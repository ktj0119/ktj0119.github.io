import { useState } from 'react';
import { Plus, Edit, Trash2, Save, X, Search } from 'lucide-react';
import { notices, news, magazines } from '../data/boardData';
import type { NoticeItem, NewsItem, MagazineItem } from '../data/boardData';
import { concerts } from '../data/concertData';
import type { Concert } from '../data/concertData';

type TabType = 'performances' | 'announcements' | 'news' | 'magazines';

export function Admin() {
  const [activeTab, setActiveTab] = useState<TabType>('performances');
  const [searchQuery, setSearchQuery] = useState('');
  const [editingId, setEditingId] = useState<number | null>(null);
  const [isAdding, setIsAdding] = useState(false);

  // Mock data states (in a real app, these would be managed by backend)
  const [performanceData, setPerformanceData] = useState<Concert[]>(concerts);
  const [announcementData, setAnnouncementData] = useState<NoticeItem[]>(notices);
  const [newsData, setNewsData] = useState<NewsItem[]>(news);
  const [magazineData, setMagazineData] = useState<MagazineItem[]>(magazines);

  // Form states
  const [formData, setFormData] = useState<any>({});

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    setSearchQuery('');
    setEditingId(null);
    setIsAdding(false);
    setFormData({});
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const filterByTitle = (items: any[]) => {
    if (!searchQuery) return items;
    return items.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const handleEdit = (id: number) => {
    setEditingId(id);
    setIsAdding(false);
    
    // Load data into form
    let item: any;
    switch (activeTab) {
      case 'performances':
        item = performanceData.find((p) => p.id === id);
        break;
      case 'announcements':
        item = announcementData.find((a) => a.no === id);
        break;
      case 'news':
        item = newsData.find((n) => n.no === id);
        break;
      case 'magazines':
        item = magazineData.find((m) => m.id === id);
        break;
    }
    setFormData(item || {});
  };

  const handleDelete = (id: number) => {
    if (!confirm('정말 삭제하시겠습니까?')) return;

    switch (activeTab) {
      case 'performances':
        setPerformanceData(performanceData.filter((p) => p.id !== id));
        break;
      case 'announcements':
        setAnnouncementData(announcementData.filter((a) => a.no !== id));
        break;
      case 'news':
        setNewsData(newsData.filter((n) => n.no !== id));
        break;
      case 'magazines':
        setMagazineData(magazineData.filter((m) => m.id !== id));
        break;
    }
  };

  const handleAdd = () => {
    setIsAdding(true);
    setEditingId(null);
    setFormData({});
  };

  const handleSave = () => {
    // Mock save - in real app, this would call an API
    console.log('Saving:', formData);
    
    if (isAdding) {
      // Add new item
      switch (activeTab) {
        case 'performances':
          const newPerformance = { ...formData, id: Date.now() };
          setPerformanceData([...performanceData, newPerformance]);
          break;
        case 'announcements':
          const newAnnouncement = { ...formData, no: Date.now(), views: 0 };
          setAnnouncementData([...announcementData, newAnnouncement]);
          break;
        case 'news':
          const newNews = { ...formData, no: Date.now(), views: 0 };
          setNewsData([...newsData, newNews]);
          break;
        case 'magazines':
          const newMagazine = { ...formData, id: Date.now() };
          setMagazineData([...magazineData, newMagazine]);
          break;
      }
    } else if (editingId) {
      // Update existing item
      switch (activeTab) {
        case 'performances':
          setPerformanceData(
            performanceData.map((p) => (p.id === editingId ? { ...formData, id: editingId } : p))
          );
          break;
        case 'announcements':
          setAnnouncementData(
            announcementData.map((a) => (a.no === editingId ? { ...formData, no: editingId } : a))
          );
          break;
        case 'news':
          setNewsData(
            newsData.map((n) => (n.no === editingId ? { ...formData, no: editingId } : n))
          );
          break;
        case 'magazines':
          setMagazineData(
            magazineData.map((m) => (m.id === editingId ? { ...formData, id: editingId } : m))
          );
          break;
      }
    }

    setEditingId(null);
    setIsAdding(false);
    setFormData({});
  };

  const handleCancel = () => {
    setEditingId(null);
    setIsAdding(false);
    setFormData({});
  };

  const renderForm = () => {
    if (!isAdding && editingId === null) return null;

    return (
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-[var(--color-opera-burgundy)]">
            {isAdding ? '새 항목 추가' : '항목 수정'}
          </h3>
          <div className="flex gap-2">
            <button
              onClick={handleSave}
              className="flex items-center gap-2 px-4 py-2 bg-[var(--color-opera-burgundy)] text-white rounded hover:opacity-90 transition-opacity"
            >
              <Save className="w-4 h-4" />
              저장
            </button>
            <button
              onClick={handleCancel}
              className="flex items-center gap-2 px-4 py-2 bg-gray-500 text-white rounded hover:opacity-90 transition-opacity"
            >
              <X className="w-4 h-4" />
              취소
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {activeTab === 'performances' && (
            <>
              <input
                type="text"
                placeholder="공연 제목"
                value={formData.title || ''}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[var(--color-opera-burgundy)]"
              />
              <input
                type="text"
                placeholder="작곡가"
                value={formData.composer || ''}
                onChange={(e) => setFormData({ ...formData, composer: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[var(--color-opera-burgundy)]"
              />
              <input
                type="text"
                placeholder="공연 날짜 (예: 2024.12.15)"
                value={formData.date || ''}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[var(--color-opera-burgundy)]"
              />
              <input
                type="text"
                placeholder="공연 장소"
                value={formData.venue || ''}
                onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[var(--color-opera-burgundy)]"
              />
              <input
                type="text"
                placeholder="이미지 URL"
                value={formData.image || ''}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[var(--color-opera-burgundy)]"
              />
            </>
          )}

          {activeTab === 'announcements' && (
            <>
              <input
                type="text"
                placeholder="제목"
                value={formData.title || ''}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[var(--color-opera-burgundy)]"
              />
              <input
                type="text"
                placeholder="날짜 (예: 2024-12-15)"
                value={formData.date || ''}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[var(--color-opera-burgundy)]"
              />
              <input
                type="text"
                placeholder="작성자"
                value={formData.author || ''}
                onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[var(--color-opera-burgundy)]"
              />
              <textarea
                placeholder="내용"
                value={formData.content || ''}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[var(--color-opera-burgundy)]"
              />
            </>
          )}

          {activeTab === 'news' && (
            <>
              <input
                type="text"
                placeholder="제목"
                value={formData.title || ''}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[var(--color-opera-burgundy)]"
              />
              <input
                type="text"
                placeholder="URL 링크"
                value={formData.url || ''}
                onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[var(--color-opera-burgundy)]"
              />
              <input
                type="text"
                placeholder="날짜 (예: 2024-12-15)"
                value={formData.date || ''}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[var(--color-opera-burgundy)]"
              />
            </>
          )}

          {activeTab === 'magazines' && (
            <>
              <input
                type="text"
                placeholder="제목"
                value={formData.title || ''}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[var(--color-opera-burgundy)]"
              />
              <input
                type="text"
                placeholder="날짜 (예: 2024-12-15)"
                value={formData.date || ''}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[var(--color-opera-burgundy)]"
              />
              <input
                type="text"
                placeholder="썸네일 URL"
                value={formData.thumbnail || ''}
                onChange={(e) => setFormData({ ...formData, thumbnail: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[var(--color-opera-burgundy)]"
              />
            </>
          )}
        </div>
      </div>
    );
  };

  const renderDataTable = () => {
    let data: any[] = [];
    let headers: string[] = [];

    switch (activeTab) {
      case 'performances':
        data = filterByTitle(performanceData);
        headers = ['ID', '제목', '작곡가', '날짜', '장소', '액션'];
        break;
      case 'announcements':
        data = filterByTitle(announcementData);
        headers = ['No.', '제목', '날짜', '조회수', '액션'];
        break;
      case 'news':
        data = filterByTitle(newsData);
        headers = ['No.', '제목', '날짜', '조회수', '액션'];
        break;
      case 'magazines':
        data = magazineData;
        headers = ['ID', '제목', '날짜', '액션'];
        break;
    }

    return (
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-[var(--color-opera-cream)]">
            <tr>
              {headers.map((header) => (
                <th key={header} className="px-6 py-3 text-left text-sm text-gray-700">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {data.length === 0 ? (
              <tr>
                <td colSpan={headers.length} className="px-6 py-8 text-center text-gray-500">
                  {searchQuery ? '검색 결과가 없습니다.' : '데이터가 없습니다.'}
                </td>
              </tr>
            ) : (
              data.map((item) => {
                const itemId = item.id || item.no;
                return (
                  <tr key={itemId} className="hover:bg-gray-50 transition-colors">
                    {activeTab === 'performances' && (
                      <>
                        <td className="px-6 py-4 text-sm text-gray-600">{item.id}</td>
                        <td className="px-6 py-4 text-sm text-gray-800">{item.title}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{item.composer}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{item.date}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{item.venue}</td>
                      </>
                    )}
                    {activeTab === 'announcements' && (
                      <>
                        <td className="px-6 py-4 text-sm text-gray-600">{item.no}</td>
                        <td className="px-6 py-4 text-sm text-gray-800">{item.title}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{item.date}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{item.views}</td>
                      </>
                    )}
                    {activeTab === 'news' && (
                      <>
                        <td className="px-6 py-4 text-sm text-gray-600">{item.no}</td>
                        <td className="px-6 py-4 text-sm text-gray-800">{item.title}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{item.date}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{item.views}</td>
                      </>
                    )}
                    {activeTab === 'magazines' && (
                      <>
                        <td className="px-6 py-4 text-sm text-gray-600">{item.id}</td>
                        <td className="px-6 py-4 text-sm text-gray-800">{item.title}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{item.date}</td>
                      </>
                    )}
                    <td className="px-6 py-4 text-sm">
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEdit(itemId)}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded transition-colors"
                          title="수정"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(itemId)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded transition-colors"
                          title="삭제"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    );
  };

  const showSearch = activeTab === 'announcements' || activeTab === 'news';

  return (
    <div className="min-h-screen bg-[var(--color-opera-cream)]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[var(--color-opera-burgundy)] to-[var(--color-opera-dark)] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl text-white mb-2">데이터 관리</h1>
          <p className="text-white/90">공연, 공지사항, 뉴스, 매거진 관리</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1">
            <button
              onClick={() => handleTabChange('performances')}
              className={`px-6 py-4 transition-colors ${
                activeTab === 'performances'
                  ? 'text-[var(--color-opera-burgundy)] border-b-2 border-[var(--color-opera-burgundy)]'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              공연 목록
            </button>
            <button
              onClick={() => handleTabChange('announcements')}
              className={`px-6 py-4 transition-colors ${
                activeTab === 'announcements'
                  ? 'text-[var(--color-opera-burgundy)] border-b-2 border-[var(--color-opera-burgundy)]'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              공지사항
            </button>
            <button
              onClick={() => handleTabChange('news')}
              className={`px-6 py-4 transition-colors ${
                activeTab === 'news'
                  ? 'text-[var(--color-opera-burgundy)] border-b-2 border-[var(--color-opera-burgundy)]'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              뉴스
            </button>
            <button
              onClick={() => handleTabChange('magazines')}
              className={`px-6 py-4 transition-colors ${
                activeTab === 'magazines'
                  ? 'text-[var(--color-opera-burgundy)] border-b-2 border-[var(--color-opera-burgundy)]'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              매거진
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between mb-6">
          {showSearch && (
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="제목으로 검색..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[var(--color-opera-burgundy)]"
              />
            </div>
          )}
          <button
            onClick={handleAdd}
            className="flex items-center gap-2 px-6 py-2 bg-[var(--color-opera-burgundy)] text-white rounded hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            <Plus className="w-5 h-5" />
            새 항목 추가
          </button>
        </div>

        {/* Form */}
        {renderForm()}

        {/* Data Table */}
        {renderDataTable()}
      </div>
    </div>
  );
}