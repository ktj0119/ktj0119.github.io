import { useState } from "react";
import { Search, Calendar } from "lucide-react";
import { concerts as allConcerts } from "../data/concertData";
import type { Concert } from "../data/concertData";

interface ConcertsProps {
  onSelectConcert: (concertId: number) => void;
}

export function Concerts({ onSelectConcert }: ConcertsProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState<"latest" | "oldest">("latest");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // Filter by search term
  const filteredConcerts = allConcerts.filter((concert) =>
    concert.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort concerts
  const sortedConcerts = [...filteredConcerts].sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return sortOrder === "latest" ? dateB - dateA : dateA - dateB;
  });

  // Paginate
  const totalPages = Math.ceil(sortedConcerts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedConcerts = sortedConcerts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-4xl text-[var(--color-opera-burgundy)] mb-8">
        공연 목록
      </h1>

      {/* Search and Sort Controls */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        {/* Search */}
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="공연명 검색..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-opera-burgundy)]"
          />
        </div>

        {/* Sort */}
        <div className="flex items-center gap-2">
          <select
            value={sortOrder}
            onChange={(e) => {
              setSortOrder(e.target.value as "latest" | "oldest");
              setCurrentPage(1);
            }}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-opera-burgundy)]"
          >
            <option value="latest">최신순 ▲</option>
            <option value="oldest">최신순 ▼</option>
          </select>
        </div>
      </div>

      {/* Concert Grid */}
      {paginatedConcerts.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {paginatedConcerts.map((concert) => (
              <button
                key={concert.id}
                onClick={() => onSelectConcert(concert.id)}
                className="group cursor-pointer"
              >
                <div className="aspect-square overflow-hidden rounded-lg shadow-lg transition-transform group-hover:scale-105">
                  <img
                    src={concert.image}
                    alt={concert.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl text-gray-800 group-hover:text-[var(--color-opera-burgundy)] transition-colors">
                    {concert.title}
                  </h3>
                  <p className="text-gray-600 mt-1">
                    {concert.date.includes('~') 
                      ? concert.date 
                      : new Date(concert.date).toLocaleDateString("ko-KR")}
                  </p>
                  <p className="text-sm text-gray-500">{concert.venue}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-2">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                이전
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-4 py-2 border rounded ${
                      currentPage === page
                        ? "bg-[var(--color-opera-burgundy)] text-white border-[var(--color-opera-burgundy)]"
                        : "border-gray-300 hover:bg-gray-100"
                    }`}
                  >
                    {page}
                  </button>
                )
              )}
              <button
                onClick={() =>
                  setCurrentPage((p) => Math.min(totalPages, p + 1))
                }
                disabled={currentPage === totalPages}
                className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                다음
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-16 text-gray-500">
          검색 결과가 없습니다.
        </div>
      )}
    </div>
  );
}