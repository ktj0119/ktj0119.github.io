import { Bell, Pin } from 'lucide-react';
import { notices } from '../data/boardData';

interface NoticeBoardProps {
  onSelectNotice?: (noticeId: number) => void;
  onViewAll?: () => void;
}

export function NoticeBoard({ onSelectNotice, onViewAll }: NoticeBoardProps) {
  // Get top 2 most recent pinned notices
  const pinnedNotices = notices
    .filter(notice => notice.isPinned === true)
    .sort((a, b) => b.no - a.no) // Sort by number descending (most recent first)
    .slice(0, 2);

  // Get top 2 most recent regular (non-pinned) notices
  const regularNotices = notices
    .filter(notice => !notice.isPinned)
    .sort((a, b) => b.no - a.no) // Sort by number descending (most recent first)
    .slice(0, 2);

  // Combine: pinned first, then regular
  const displayNotices = [...pinnedNotices, ...regularNotices];

  return (
    <section className="py-16 bg-[var(--color-opera-cream)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-12">
          <Bell className="w-8 h-8 text-[var(--color-opera-burgundy)] mr-3" />
          <h2 className="text-[var(--color-opera-burgundy)]">공지사항</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Array.from({ length: 4 }).map((_, index) => {
            const notice = displayNotices[index];

            if (!notice) {
              // 남는 박스는 빈 박스로 표시 (동일한 높이와 스타일 유지)
              return (
                <div
                  key={`placeholder-${index}`}
                  className="bg-white rounded-lg p-6 shadow-md border border-gray-200 h-32"
                />
              );
            }

            return (
              <div
                key={notice.no}
                onClick={() => onSelectNotice && onSelectNotice(notice.no)}
                className={`bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all cursor-pointer h-32 flex flex-col justify-between ${
                  notice.isPinned ? 'border-2 border-[var(--color-opera-gold)]' : 'border border-gray-200'
                }`}
              >
                <div className="flex items-start justify-between">
                  <h3 className="flex-1 line-clamp-1 font-semibold text-gray-900">{notice.title}</h3>
                  {notice.isPinned && (
                    <Pin className="w-5 h-5 text-[var(--color-opera-gold)] flex-shrink-0 ml-2" />
                  )}
                </div>
                <p className="text-sm text-gray-500">{notice.date}</p>
              </div>
            );
          })}
        </div>

        {onViewAll && (
          <div className="text-center mt-12">
            <button
              className="bg-[var(--color-opera-burgundy)] text-white px-8 py-3 rounded hover:bg-[var(--color-opera-dark)] transition-colors"
              onClick={onViewAll}
            >
              모든 공지 보기
            </button>
          </div>
        )}
      </div>
    </section>
  );
}