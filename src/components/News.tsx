import { Newspaper, ArrowRight } from 'lucide-react';
import { news } from '../data/boardData';

interface NewsProps {
  onSelectNews?: (newsId: number) => void;
  onViewAll?: () => void;
}

export function News({ onSelectNews, onViewAll }: NewsProps) {
  // Show only the top 4 news items for the main page
  const displayNews = news.slice(0, 4);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-12">
          <Newspaper className="w-8 h-8 text-[var(--color-opera-burgundy)] mr-3" />
          <h2 className="text-[var(--color-opera-burgundy)]">뉴스 기사</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayNews.map((item) => (
            <article
              key={item.no}
              onClick={() => window.open(item.url, '_blank')}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-200 cursor-pointer p-6"
            >
              <div className="flex items-center text-sm text-gray-500 mb-3">
                <span className="font-semibold text-[var(--color-opera-burgundy)] mr-2">{item.publisher}</span>
                <span>{item.date}</span>
              </div>
              <h3 className="mb-4 line-clamp-2 font-bold text-gray-900 group-hover:text-[var(--color-opera-burgundy)] transition-colors min-h-[3.5rem] flex items-center">{item.title}</h3>
              <div className="flex items-center text-[var(--color-opera-burgundy)] font-medium text-sm">
                기사 보러가기 <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            className="bg-[var(--color-opera-burgundy)] text-white px-8 py-3 rounded hover:bg-[var(--color-opera-dark)] transition-colors"
            onClick={onViewAll}
          >
            모든 뉴스 보기
          </button>
        </div>
      </div>
    </section>
  );
}