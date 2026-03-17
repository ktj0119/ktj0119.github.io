import { useState, useEffect } from "react";
import { ArrowLeft, Eye, Paperclip, Download } from "lucide-react";
import { notices } from "../data/boardData";

interface NoticeDetailProps {
  noticeId: number;
  onBack: () => void;
  onViewIncrement: (id: string) => void;
  viewCounts: Record<string, number>;
}

export function NoticeDetail({ 
  noticeId, 
  onBack, 
  onViewIncrement, 
  viewCounts = {} 
}: NoticeDetailProps) {
  // Find the notice from centralized data
  const notice = notices.find(n => n.no === noticeId) || notices[0];

  useEffect(() => {
    // Increment view count when component mounts
    onViewIncrement(`notice-${noticeId}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [noticeId]); // Only re-run when noticeId changes

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-gray-600 hover:text-[var(--color-opera-burgundy)] mb-6 transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>목록으로 돌아가기</span>
      </button>

      {/* Notice Detail */}
      <article className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        {/* Header */}
        <div className="bg-[var(--color-opera-cream)] px-8 py-6 border-b border-gray-200">
          <h1 className="text-3xl text-[var(--color-opera-burgundy)] mb-4">
            {notice.title}
          </h1>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            {notice.author && (
              <div>
                <span className="text-gray-500">작성자:</span> {notice.author}
              </div>
            )}
            <div>
              <span className="text-gray-500">작성일:</span> {notice.date}
            </div>
            <div className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              <span>조회수: {viewCounts[`notice-${noticeId}`] || 0}</span>
            </div>
          </div>
        </div>

        {/* Attachment Section */}
        {notice.attachmentUrl && notice.attachmentUrl.length > 0 && (
          <div className="px-8 py-3 bg-gray-50 border-b border-gray-200">
            <div className="flex flex-col gap-2">
              {notice.attachmentUrl.map((url, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Paperclip className="w-4 h-4" />
                    <span className="font-medium">첨부파일 {notice.attachmentUrl!.length > 1 ? index + 1 : ""}:</span>
                  </div>
                  <a
                    href={url}
                    download={notice.attachmentName?.[index] || `attachment-${index + 1}`}
                    className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                  >
                    <span className="truncate max-w-xs md:max-w-md">
                      {notice.attachmentName?.[index] || "첨부파일 다운로드"}
                    </span>
                    <Download className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Content */}
        <div className="px-8 py-8">
          <div className="prose max-w-none">
            {notice.content ? (
              <p className="text-gray-700 whitespace-pre-line leading-relaxed mb-8">
                {notice.content}
              </p>
            ) : (
              <p className="text-gray-700 mb-8">내용이 준비 중입니다.</p>
            )}
            
            {/* Optional Images */}
            {notice.imageUrl && notice.imageUrl.length > 0 && (
              <div className="flex flex-col gap-8 mt-8">
                {notice.imageUrl.map((url, index) => (
                  <div key={index} className="w-full">
                    <img
                      src={url}
                      alt={`${notice.title} - 이미지 ${index + 1}`}
                      className="w-full max-h-[1200px] object-contain rounded-lg mx-auto shadow-sm"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
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