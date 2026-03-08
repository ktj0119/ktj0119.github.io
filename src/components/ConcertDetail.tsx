import { useState } from "react";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Images,
} from "lucide-react";
import { getConcertById } from "../data/concertData";

interface ConcertDetailProps {
  concertId: number;
  onBack: () => void;
  onViewAllPhotos: () => void;
}

export function ConcertDetail({
  concertId,
  onBack,
  onViewAllPhotos,
}: ConcertDetailProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Get concert data by ID
  const concert = getConcertById(concertId);

  if (!concert) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-gray-600">공연 정보를 찾을 수 없습니다.</p>
      </div>
    );
  }

  const nextImage = () => {
    if (concert.images) {
      setCurrentImageIndex((prev) =>
        prev === concert.images!.length - 1 ? 0 : prev + 1,
      );
    }
  };

  const prevImage = () => {
    if (concert.images) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? concert.images!.length - 1 : prev - 1,
      );
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-gray-600 hover:text-[var(--color-opera-burgundy)] mb-6 transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>목록으로 돌아가기</span>
      </button>

      {/* Concert Title */}
      <div className="mb-8">
        <h1 className="text-4xl text-[var(--color-opera-burgundy)] mb-4">
          {concert.title}
        </h1>
        <div className="flex flex-wrap gap-4 text-gray-600">
          <div>
            <span className="font-bold text-gray-900">공연일</span>{"  "}
            {concert.date.includes('~') 
              ? concert.date 
              : new Date(concert.date).toLocaleDateString("ko-KR")}
          </div>
          <div className="mt-[0px] mr-[0px] mb-[0px] ml-[19px]">
            <span className="font-bold text-gray-900">장소</span>{"  "}
            {concert.venue}
          </div>
          {/* <div>
            <span className="text-gray-500">지휘:</span>{" "}
            {concert.conductor}
          </div>
          <div>
            <span className="text-gray-500">연출:</span>{" "}
            {concert.director}
          </div> */}
        </div>
      </div>

      {/* Description */}
      <div className="mt-[0px] mr-[0px] mb-[32px] ml-[0px]">
        <h2 className="text-2xl text-[var(--color-opera-burgundy)] mb-4">
          공연 소개
        </h2>
        <div className="bg-[var(--color-opera-cream)] p-6 rounded-lg">
          <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
            {concert.description}
          </p>
        </div>
      </div>

      {/* Main Content - Vertical Layout */}
      <div className="flex flex-col gap-8 mb-8">
        {/* Image Gallery */}
        <div>
          <div className="mb-4">
            <h2 className="text-2xl text-[var(--color-opera-burgundy)] mb-4">
              공연 갤러리
            </h2>
            {/* Image Slider */}
            <div className="relative bg-black/90 rounded-lg overflow-hidden aspect-[4/3]">
              <img
                src={concert.images![currentImageIndex]}
                alt={`${concert.title} - ${currentImageIndex + 1}`}
                className="w-full h-full object-contain"
              />

              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-gray-800" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-gray-800" />
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {currentImageIndex + 1} /{" "}
                {concert.images!.length}
              </div>
            </div>

            {/* Thumbnail Navigation */}
            <div className="flex gap-2 mt-4">
              {concert.images!.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`flex-1 aspect-video rounded overflow-hidden border-2 transition-colors bg-gray-50 ${
                    currentImageIndex === index
                      ? "border-[var(--color-opera-burgundy)]"
                      : "border-transparent hover:border-gray-300"
                  }`}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-contain"
                  />
                </button>
              ))}
            </div>

            {/* View More Button */}
            <button
              onClick={onViewAllPhotos}
              className="mt-4 w-full flex items-center justify-center gap-2 px-6 py-3 bg-[var(--color-opera-burgundy)] text-white rounded hover:bg-opacity-90 transition-colors"
            >
              <Images className="w-5 h-5" />
              <span>전체 사진 보기</span>
            </button>
          </div>
        </div>

        {/* YouTube Video */}
        {concert.videoId && concert.videoTitle && (
          <div>
            <h2 className="text-2xl text-[var(--color-opera-burgundy)] mb-4">
              영상
            </h2>
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${concert.videoId}`}
                  title={concert.videoTitle}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <div className="p-3 bg-white">
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Additional Information */}
      {/* <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h2 className="text-2xl text-[var(--color-opera-burgundy)] mb-4">
          출연진
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div>
            <h3 className="text-gray-500 text-sm mb-1">
              비올레타
            </h3>
            <p className="text-gray-800">소프라노 김수진</p>
          </div>
          <div>
            <h3 className="text-gray-500 text-sm mb-1">
              알프레도
            </h3>
            <p className="text-gray-800">테너 박성민</p>
          </div>
          <div>
            <h3 className="text-gray-500 text-sm mb-1">
              제르몽
            </h3>
            <p className="text-gray-800">바리톤 이준호</p>
          </div>
          <div>
            <h3 className="text-gray-500 text-sm mb-1">
              플로라
            </h3>
            <p className="text-gray-800">메조소프라노 최유리</p>
          </div>
          <div>
            <h3 className="text-gray-500 text-sm mb-1">
              가스통
            </h3>
            <p className="text-gray-800">테너 정태양</p>
          </div>
          <div>
            <h3 className="text-gray-500 text-sm mb-1">
              오케스트라
            </h3>
            <p className="text-gray-800">대전시립교향악단</p>
          </div>
        </div>
      </div> */}
    </div>
  );
}