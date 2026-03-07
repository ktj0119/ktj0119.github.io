import { useState, useEffect } from "react";
import { ArrowLeft, Eye, Calendar, Download } from "lucide-react";

interface MagazineDetailProps {
  magazineId: number;
  onBack: () => void;
  onViewIncrement: (id: string) => void;
}

export function MagazineDetail({ magazineId, onBack, onViewIncrement }: MagazineDetailProps) {
  const [views, setViews] = useState(0);

  // Mock magazine detail data
  const magazineData: Record<number, any> = {
    1: {
      id: 1,
      thumbnail: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=1200&h=800&fit=crop",
      title: "2024 겨울호 - 라 트라비아타 특집",
      date: "2024-12-15",
      description: "베르디의 불멸의 명작 '라 트라비아타'를 새롭게 해석한 대전오페라단의 겨울 공연을 특집으로 다룹니다.",
      pages: 48,
      fileSize: "12.5 MB",
      contents: [
        "단장 인사말",
        "2024 겨울 공연 하이라이트 - 라 트라비아타",
        "주요 출연진 인터뷰",
        "무대 뒤 이야기",
        "2025년 공연 일정 미리보기",
        "후원자 명단",
      ],
      images: [
        "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&h=600&fit=crop",
      ],
    },
    2: {
      id: 2,
      thumbnail: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=1200&h=800&fit=crop",
      title: "2024 가을호 - 카르멘의 열정",
      date: "2024-09-20",
      description: "비제의 정열적인 오페라 '카르멘'을 통해 가을의 열정을 전합니다.",
      pages: 52,
      fileSize: "14.2 MB",
      contents: [
        "예술감독의 글",
        "카르멘, 자유로운 영혼의 노래",
        "성악가 박성민 인터뷰 - 돈 호세 역을 맡으며",
        "의상과 무대 디자인 이야기",
        "오페라 속 춤의 매력",
        "관객 후기 모음",
      ],
      images: [
        "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1513623935135-c896b59073c1?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
      ],
    },
    3: {
      id: 3,
      thumbnail: "https://images.unsplash.com/photo-1513623935135-c896b59073c1?w=1200&h=800&fit=crop",
      title: "2024 여름호 - 오페라의 여름밤",
      date: "2024-06-15",
      description: "여름밤을 수놓은 야외 오페라 축제와 특별 공연들을 소개합니다.",
      pages: 44,
      fileSize: "11.8 MB",
      contents: [
        "여름밤의 오페라 축제",
        "야외 공연의 특별한 매력",
        "신예 성악가 발굴 프로젝트 결과",
        "어린이를 위한 오페라 교육",
        "후원 프로그램 안내",
        "독자 참여 이벤트",
      ],
      images: [
        "https://images.unsplash.com/photo-1513623935135-c896b59073c1?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=800&h=600&fit=crop",
      ],
    },
    4: {
      id: 4,
      thumbnail: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=1200&h=800&fit=crop",
      title: "2024 봄호 - 새로운 시작",
      date: "2024-03-20",
      description: "봄과 함께 시작되는 새로운 시즌의 공연과 프로그램을 안내합니다.",
      pages: 40,
      fileSize: "10.5 MB",
      contents: [
        "2024 시즌 개막 인사",
        "봄 정기공연 - 라 보엠",
        "신임 단원 소개",
        "오페라 아카데미 개강",
        "지역 학교 찾아가는 오페라",
        "회원 가입 안내",
      ],
      images: [
        "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800&h=600&fit=crop",
      ],
    },
  };

  const magazine = magazineData[magazineId] || magazineData[1];

  useEffect(() => {
    // Increment view count when component mounts
    const currentViews = views + 1;
    setViews(currentViews);
    onViewIncrement(`magazine-${magazineId}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [magazineId]); // Only re-run when magazineId changes

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

      {/* Magazine Detail */}
      <article className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        {/* Featured Image */}
        <div className="aspect-[16/9] overflow-hidden">
          <img
            src={magazine.thumbnail}
            alt={magazine.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Header */}
        <div className="px-8 py-6 border-b border-gray-200">
          <h1 className="text-3xl text-[var(--color-opera-burgundy)] mb-4">
            {magazine.title}
          </h1>
          <p className="text-gray-700 mb-4 leading-relaxed">
            {magazine.description}
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>발행일: {magazine.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              <span>조회수: {views}</span>
            </div>
            <div>
              <span>페이지: {magazine.pages}p</span>
            </div>
            <div>
              <span>파일크기: {magazine.fileSize}</span>
            </div>
          </div>
        </div>

        {/* Contents */}
        <div className="px-8 py-6 border-b border-gray-200">
          <h2 className="text-xl text-[var(--color-opera-burgundy)] mb-4">
            목차
          </h2>
          <ul className="space-y-2">
            {magazine.contents.map((item: string, index: number) => (
              <li key={index} className="flex items-start gap-3 text-gray-700">
                <span className="text-[var(--color-opera-gold)] mt-1">▪</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Preview Images */}
        <div className="px-8 py-6 border-b border-gray-200">
          <h2 className="text-xl text-[var(--color-opera-burgundy)] mb-4">
            미리보기
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {magazine.images.map((image: string, index: number) => (
              <div
                key={index}
                className="aspect-[3/4] overflow-hidden rounded-lg border border-gray-200"
              >
                <img
                  src={image}
                  alt={`Preview ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Download Section */}
        <div className="px-8 py-6 bg-[var(--color-opera-cream)]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-lg text-gray-800 mb-1">
                매거진 다운로드
              </h3>
              <p className="text-sm text-gray-600">
                PDF 파일로 다운로드하여 읽으실 수 있습니다
              </p>
            </div>
            <button className="flex items-center gap-2 px-6 py-3 bg-[var(--color-opera-burgundy)] text-white rounded hover:bg-opacity-90 transition-colors">
              <Download className="w-5 h-5" />
              <span>PDF 다운로드</span>
            </button>
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