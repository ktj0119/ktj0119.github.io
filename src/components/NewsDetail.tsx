import { useState, useEffect } from "react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { news } from "../data/boardData";

interface NewsDetailProps {
  newsId: number;
  onBack: () => void;
  onViewIncrement: (id: string) => void;
}

export function NewsDetail({ newsId, onBack, onViewIncrement }: NewsDetailProps) {
  // Find the news from centralized data
  const newsItem = news.find(n => n.no === newsId) || news[0];

  useEffect(() => {
    // Increment view count when component mounts
    onViewIncrement(`news-${newsId}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newsId]); // Only re-run when newsId changes

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-gray-600 hover:text-[var(--color-opera-burgundy)] mb-6 transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>목록으로 돌아가기</span>
      </button>

      {/* News Detail */}
      <article className="bg-white border border-gray-200 rounded-lg overflow-hidden p-8">
        {/* Headline */}
        <div className="mb-8">
          <h2 className="text-gray-600 mb-2">Headline</h2>
          <h1 className="text-3xl text-[var(--color-opera-burgundy)]">
            {newsItem.title}
          </h1>
        </div>

        {/* Image */}
        {newsItem.image && (
          <div className="mb-8">
            <img
              src={newsItem.image}
              alt={newsItem.title}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        )}

        {/* Link */}
        {newsItem.url && (
          <div>
            <a
              href={newsItem.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 hover:underline transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
              <span>{newsItem.url}</span>
            </a>
          </div>
        )}
      </article>

      {/* Navigation Buttons */}
      <div className="mt-8 flex justify-center">
        <button
          onClick={onBack}
          className="px-6 py-3 bg-[var(--color-opera-burgundy)] text-white rounded hover:bg-opacity-90 transition-colors"
        >
          목록으로
        </button>
      </div>
    </div>
  );
}