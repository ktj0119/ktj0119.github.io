// Centralized concert data for the entire application

export interface Concert {
  id: number;
  title: string;
  composer: string;
  date: string;
  venue: string;
  image: string;
  // Detailed information (optional for list views)
  conductor?: string;
  director?: string;
  description?: string;
  images?: string[];
  videoId?: string;
  videoTitle?: string;
}

// All concert data
export const concerts: Concert[] = [
  {
    id: 1,
    title: "라 트라비아타",
    composer: "Giuseppe Verdi",
    date: "2024-12-15",
    venue: "대전예술의전당 아트홀",
    image: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=400&h=400&fit=crop",
    conductor: "홍길동",
    director: "김예술",
    description: "베르디의 불멸의 명작 '라 트라비아타'가 대전오페라단의 새로운 해석으로 무대에 오릅니다. 비올레타의 비극적인 사랑 이야기를 통해 진정한 사랑의 의미를 되새겨 봅니다.",
    images: [
      "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&h=600&fit=crop",
    ],
    videoId: "dQw4w9WgXcQ",
    videoTitle: "공연 하이라이트",
  },
  {
    id: 2,
    title: "카르멘",
    composer: "Georges Bizet",
    date: "2024-11-20",
    venue: "대전예술의전당 아트홀",
    image: "https://images.unsplash.com/photo-1513623935135-c896b59073c1?w=400&h=400&fit=crop",
    conductor: "박지휘",
    director: "이연출",
    description: "비제의 열정적인 오페라 '카르멘'이 화려한 무대로 관객 여러분을 찾아갑니다. 자유로운 영혼 카르멘과 돈 호세의 운명적인 사랑 이야기를 만나보세요.",
    images: [
      "https://images.unsplash.com/photo-1513623935135-c896b59073c1?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800&h=600&fit=crop",
    ],
    videoId: "dQw4w9WgXcQ",
    videoTitle: "공연 하이라이트",
  },
  {
    id: 3,
    title: "투란도트",
    composer: "Giacomo Puccini",
    date: "2024-10-10",
    venue: "대전예술의전당 아트홀",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    conductor: "최지휘",
    director: "정연출",
    description: "푸치니의 마지막 걸작 '투란도트'가 웅장한 스케일로 무대를 장식합니다. 얼음 공주 투란도트와 칼라프 왕자의 운명적 만남을 경험하세요.",
    images: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1513623935135-c896b59073c1?w=800&h=600&fit=crop",
    ],
    videoId: "dQw4w9WgXcQ",
    videoTitle: "공연 하이라이트",
  },
  {
    id: 4,
    title: "마술피리",
    composer: "Wolfgang Amadeus Mozart",
    date: "2024-09-05",
    venue: "대전예술의전당 아트홀",
    image: "https://images.unsplash.com/photo-1514894780887-121968d00567?w=400&h=400&fit=crop",
    conductor: "강지휘",
    director: "송연출",
    description: "모차르트의 환상적인 오페라 '마술피리'가 동화 같은 무대로 여러분을 초대합니다. 타미노 왕자의 모험과 사랑 이야기를 만나보세요.",
    images: [
      "https://images.unsplash.com/photo-1514894780887-121968d00567?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&h=600&fit=crop",
    ],
    videoId: "dQw4w9WgXcQ",
    videoTitle: "공연 하이라이트",
  },
  {
    id: 5,
    title: "리골레토",
    composer: "Giuseppe Verdi",
    date: "2024-08-18",
    venue: "대전예술의전당 아트홀",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop",
    conductor: "임지휘",
    director: "오연출",
    description: "베르디의 비극 오페라 '리골레토'가 강렬한 무대로 돌아옵니다. 광대 리골레토와 그의 딸 질다의 가슴 아픈 이야기를 경험하세요.",
    images: [
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800&h=600&fit=crop",
    ],
    videoId: "dQw4w9WgXcQ",
    videoTitle: "공연 하이라이트",
  },
  {
    id: 6,
    title: "라 보엠",
    composer: "Giacomo Puccini",
    date: "2024-07-22",
    venue: "대전예술의전당 아트홀",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=400&fit=crop",
    conductor: "유지휘",
    director: "서연출",
    description: "푸치니의 서정적 걸작 '라 보엠'이 낭만적인 무대로 여러분을 찾아갑니다. 파리의 가난한 예술가들의 사랑과 우정 이야기를 만나보세요.",
    images: [
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1513623935135-c896b59073c1?w=800&h=600&fit=crop",
    ],
    videoId: "dQw4w9WgXcQ",
    videoTitle: "공연 하이라이트",
  },
  {
    id: 7,
    title: "토스카",
    composer: "Giacomo Puccini",
    date: "2024-06-14",
    venue: "대전예술의전당 아트홀",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    conductor: "신지휘",
    director: "한연출",
    description: "푸치니의 극적인 오페라 '토스카'가 긴장감 넘치는 무대로 펼쳐집니다. 사랑과 질투, 정치적 음모가 얽힌 감동적인 이야기를 경험하세요.",
    images: [
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&h=600&fit=crop",
    ],
    videoId: "dQw4w9WgXcQ",
    videoTitle: "공연 하이라이트",
  },
  {
    id: 8,
    title: "피가로의 결혼",
    composer: "Wolfgang Amadeus Mozart",
    date: "2024-05-08",
    venue: "대전예술의전당 아트홀",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
    conductor: "조지휘",
    director: "민연출",
    description: "모차르트의 유쾌한 코미디 오페라 '피가로의 결혼'이 즐거운 무대로 여러분을 초대합니다. 하루 동안 벌어지는 유쾌한 소동을 만나보세요.",
    images: [
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800&h=600&fit=crop",
    ],
    videoId: "dQw4w9WgXcQ",
    videoTitle: "공연 하이라이트",
  },
  {
    id: 9,
    title: "아이다",
    composer: "Giuseppe Verdi",
    date: "2024-04-12",
    venue: "대전예술의전당 아트홀",
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=400&h=400&fit=crop",
    conductor: "노지휘",
    director: "류연출",
    description: "베르디의 장엄한 그랜드 오페라 '아이다'가 화려한 스펙터클로 무대에 오릅니다. 고대 이집트를 배경으로 한 사랑과 충성의 이야기를 경험하세요.",
    images: [
      "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1513623935135-c896b59073c1?w=800&h=600&fit=crop",
    ],
    videoId: "dQw4w9WgXcQ",
    videoTitle: "공연 하이라이트",
  },
  {
    id: 10,
    title: "돈 조반니",
    composer: "Wolfgang Amadeus Mozart",
    date: "2024-03-15",
    venue: "대전예술의전당 아트홀",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=400&fit=crop",
    conductor: "구지휘",
    director: "안연출",
    description: "모차르트의 심오한 오페라 '돈 조반니'가 철학적 깊이와 함께 무대에 오릅니다. 방탕한 귀족 돈 조반니의 파멸적 운명을 만나보세요.",
    images: [
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&h=600&fit=crop",
    ],
    videoId: "dQw4w9WgXcQ",
    videoTitle: "공연 하이라이트",
  },
];

// Helper function to get concert by ID
export function getConcertById(id: number): Concert | undefined {
  return concerts.find(concert => concert.id === id);
}

// Helper function to get concerts sorted by date
export function getConcertsSortedByDate(order: 'latest' | 'oldest' = 'latest'): Concert[] {
  return [...concerts].sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return order === 'latest' ? dateB - dateA : dateA - dateB;
  });
}
