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
  const hasAnyNotice = notices.length > 0;

  return (
    <section className="py-16 bg-[var(--color-opera-cream)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-12">
          <Bell className="w-8 h-8 text-[var(--color-opera-burgundy)] mr-3" />
          <h2 className="text-[var(--color-opera-burgundy)]">공지사항</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {!hasAnyNotice ? (
            <div className="col-span-1 md:col-span-2">
              <div className="bg-white rounded-lg p-6 border border-dashed border-gray-300 text-center text-gray-500">
                현재 등록된 공지사항이 없습니다.
              </div>
            </div>
          ) : (
            // 공지사항이 한 개 이상이면 항상 4개의 박스를 표시
            Array.from({ length: 4 }).map((_, index) => {
              const notice = displayNotices[index];

              if (!notice) {
                // 남는 박스는 플레이스홀더로 표시
                return (
                  <div
                    key={`placeholder-${index}`}
                    className="bg-white rounded-lg p-6 border border-dashed border-gray-200 text-center text-gray-400"
                  >
                    곧 공지가 등록될 예정입니다.
                  </div>
                );
              }

              return (
                <div
                  key={notice.no}
                  onClick={() => onSelectNotice && onSelectNotice(notice.no)}
                  className={`bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow cursor-pointer ${
                    notice.isPinned ? 'border-2 border-[var(--color-opera-gold)]' : 'border border-gray-200'
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="flex-1">{notice.title}</h3>
                    {notice.isPinned && (
                      <Pin className="w-5 h-5 text-[var(--color-opera-gold)] flex-shrink-0 ml-2" />
                    )}
                  </div>
                  <p className="text-sm text-gray-500">{notice.date}</p>
                </div>
              );
            })
          )}
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