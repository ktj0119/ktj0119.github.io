import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Eye, Search } from "lucide-react";
import { notices, news, magazines } from "../data/boardData";

interface BoardProps {
  onSelectNotice?: (noticeId: number) => void;
  onSelectNews?: (newsId: number) => void;
  onSelectMagazine?: (magazineId: number) => void;
  viewCounts?: Record<string, number>;
  noticePage?: number;
  setNoticePage?: (page: number) => void;
  newsPage?: number;
  setNewsPage?: (page: number) => void;
  scrollToNews?: boolean;
  scrollToNotice?: boolean;
}

export function Board({ 
  onSelectNotice, 
  onSelectNews, 
  onSelectMagazine, 
  viewCounts = {},
  noticePage: propNoticePage,
  setNoticePage: propSetNoticePage,
  newsPage: propNewsPage,
  setNewsPage: propSetNewsPage,
  scrollToNews,
  scrollToNotice,
}: BoardProps) {
  const [localNoticePage, setLocalNoticePage] = useState(1);
  const [localNewsPage, setLocalNewsPage] = useState(1);
  const [noticeSearchQuery, setNoticeSearchQuery] = useState('');
  const [newsSearchQuery, setNewsSearchQuery] = useState('');
  const itemsPerPage = 7;

  // Use prop state if provided, otherwise use local state
  const noticePage = propNoticePage !== undefined ? propNoticePage : localNoticePage;
  const setNoticePage = propSetNoticePage || setLocalNoticePage;
  const newsPage = propNewsPage !== undefined ? propNewsPage : localNewsPage;
  const setNewsPage = propSetNewsPage || setLocalNewsPage;

  // Filter data by search query
  const filterByTitle = (data: any[], query: string) => {
    if (!query) return data;
    return data.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
  };

  const filteredNotices = filterByTitle(notices, noticeSearchQuery);
  const filteredNews = filterByTitle(news, newsSearchQuery);

  // Pagination logic
  const getPaginatedData = (data: any[], page: number) => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  };

  const getTotalPages = (data: any[]) => {
    return Math.ceil(data.length / itemsPerPage);
  };

  const paginatedNotices = getPaginatedData(filteredNotices, noticePage);
  const paginatedNews = getPaginatedData(filteredNews, newsPage);
  const noticeTotalPages = getTotalPages(filteredNotices);
  const newsTotalPages = getTotalPages(filteredNews);

  // 처음 진입 시 공지 섹션으로 스크롤
  useEffect(() => {
    if (!scrollToNotice) return;
    const el = document.getElementById("board-notice-title");
    if (el) {
      const headerOffset = 90;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  }, [scrollToNotice]);

  // 처음 진입 시 뉴스 섹션으로 스크롤
  useEffect(() => {
    if (!scrollToNews) return;
    const el = document.getElementById("board-news-title");
    if (el) {
      const headerOffset = 90; // 고정 헤더 높이만큼 보정
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  }, [scrollToNews]);

  const Pagination = ({
    currentPage,
    totalPages,
    onPageChange,
  }: {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
  }) => {
    return (
      <div className="flex items-center justify-center gap-2 mt-6">
        <button
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className="p-2 rounded border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-4 py-2 rounded transition-colors ${
              currentPage === page
                ? "bg-[var(--color-opera-burgundy)] text-white"
                : "border border-gray-300 hover:bg-gray-100"
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className="p-2 rounded border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

      {/* Notice Section */}
      <section className="mb-16">
        <h2
          id="board-notice-title"
          className="text-2xl text-[var(--color-opera-burgundy)] mb-6 border-b-2 border-[var(--color-opera-gold)] pb-2"
        >
          공지사항
        </h2>
        
        {/* Search Bar */}
        <div className="mb-4">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="제목으로 검색..."
              value={noticeSearchQuery}
              onChange={(e) => {
                setNoticeSearchQuery(e.target.value);
                setNoticePage(1); // Reset to first page when searching
              }}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-opera-burgundy)]"
            />
          </div>
        </div>
        
        {/* Desktop Table View - Hidden on mobile (< 580px) */}
        <div className="hidden min-[580px]:block bg-white border border-gray-200 rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-[var(--color-opera-cream)]">
              <tr>
                <th className="px-6 py-3 text-center text-sm text-gray-700 w-20">
                  No.
                </th>
                <th className="px-6 py-3 text-left text-sm text-gray-700">
                  제목
                </th>
                <th className="px-6 py-3 text-center text-sm text-gray-700 w-32">
                  날짜
                </th>
                <th className="px-6 py-3 text-center text-sm text-gray-700 w-24">
                  조회수
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {paginatedNotices.map((notice) => (
                <tr
                  key={notice.no}
                  className="hover:bg-gray-50 transition-colors cursor-pointer"
                  onClick={() => onSelectNotice && onSelectNotice(notice.no)}
                >
                  <td className="px-6 py-4 text-sm text-gray-600 text-center">
                    {notice.no}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800">
                    {notice.title}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 text-center">
                    {notice.date}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 text-center">
                    {viewCounts[`notice-${notice.no}`] || notice.views}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View - Visible only on mobile (< 580px) */}
        <div className="min-[580px]:hidden space-y-3">
          {paginatedNotices.map((notice) => (
            <div
              key={notice.no}
              className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => onSelectNotice && onSelectNotice(notice.no)}
            >
              <h3 className="text-gray-800 mb-2 leading-snug">
                {notice.title}
              </h3>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>{notice.date}</span>
                <div className="flex items-center gap-1">
                  <Eye className="w-3.5 h-3.5" />
                  <span>{viewCounts[`notice-${notice.no}`] || notice.views}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Pagination
          currentPage={noticePage}
          totalPages={noticeTotalPages}
          onPageChange={setNoticePage}
        />
      </section>

      {/* News Section */}
      <section className="mb-16">
        <h2
          id="board-news-title"
          className="text-2xl text-[var(--color-opera-burgundy)] mb-6 border-b-2 border-[var(--color-opera-gold)] pb-2"
        >
          뉴스
        </h2>
        
        {/* Search Bar */}
        <div className="mb-4">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="제목으로 검색..."
              value={newsSearchQuery}
              onChange={(e) => {
                setNewsSearchQuery(e.target.value);
                setNewsPage(1); // Reset to first page when searching
              }}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-opera-burgundy)]"
            />
          </div>
        </div>
        
        {/* Desktop Table View - Hidden on mobile (< 580px) */}
        <div className="hidden min-[580px]:block bg-white border border-gray-200 rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-[var(--color-opera-cream)]">
              <tr>
                <th className="px-6 py-3 text-center text-sm text-gray-700 w-20">
                  No.
                </th>
                <th className="px-6 py-3 text-left text-sm text-gray-700">
                  제목
                </th>
                <th className="px-6 py-3 text-center text-sm text-gray-700 w-32">
                  게재일
                </th>
                <th className="px-6 py-3 text-center text-sm text-gray-700 w-24">
                  조회수
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {paginatedNews.map((item) => (
                <tr
                  key={item.no}
                  className="hover:bg-gray-50 transition-colors cursor-pointer"
                  onClick={() => onSelectNews && onSelectNews(item.no)}
                >
                  <td className="px-6 py-4 text-sm text-gray-600 text-center">{item.no}</td>
                  <td className="px-6 py-4 text-sm text-gray-800">
                    {item.title}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 text-center">
                    {item.date}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 text-center">
                    {viewCounts[`news-${item.no}`] || item.views}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View - Visible only on mobile (< 580px) */}
        <div className="min-[580px]:hidden space-y-3">
          {paginatedNews.map((item) => (
            <div
              key={item.no}
              className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => onSelectNews && onSelectNews(item.no)}
            >
              <h3 className="text-gray-800 mb-2 leading-snug">
                {item.title}
              </h3>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>{item.date}</span>
                <div className="flex items-center gap-1">
                  <Eye className="w-3.5 h-3.5" />
                  <span>{viewCounts[`news-${item.no}`] || item.views}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Pagination
          currentPage={newsPage}
          totalPages={newsTotalPages}
          onPageChange={setNewsPage}
        />
      </section>

      {/* Magazine Section */}
      <section className="mb-16">
        <h2 className="text-2xl text-[var(--color-opera-burgundy)] mb-6 border-b-2 border-[var(--color-opera-gold)] pb-2">
          매거진
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {magazines.map((magazine) => (
            <div
              key={magazine.id}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => onSelectMagazine && onSelectMagazine(magazine.id)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={magazine.thumbnail}
                  alt={magazine.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-gray-800 mb-2">{magazine.title}</h3>
                <p className="text-sm text-gray-500">{magazine.date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}