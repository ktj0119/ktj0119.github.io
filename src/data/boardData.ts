// Centralized data source for Notice and News

export interface NoticeItem {
  no: number;
  title: string;
  date: string;
  views: number;
  content?: string;
  author?: string;
  isPinned?: boolean;
}

export interface NewsItem {
  no: number;
  title: string;
  date: string;
  views: number;
  category?: string;
  excerpt?: string;
  image?: string;
  url?: string;
}

export interface MagazineItem {
  id: number;
  thumbnail: string;
  title: string;
  date: string;
}

// Notice Data - Shared between Main page and Board page
export const notices: NoticeItem[] = [
  {
    no: 15,
    title: "2025년 정기공연 일정 안내",
    date: "2024-12-20",
    views: 245,
    author: "관리자",
    isPinned: true,
    content: `안녕하세요, 대전오페라단입니다.

2025년 정기공연 일정을 안내드립니다.

■ 2025년 정기공연 일정

1월: 신년음악회 - 1월 15일
3월: 라 보엠 - 3월 20일
6월: 마술피리 - 6월 10일
9월: 토스카 - 9월 15일
12월: 연말 갈라 콘서트 - 12월 20일

각 공연의 상세 정보 및 예매는 추후 별도 안내 예정입니다.

많은 관심과 사랑 부탁드립니다.

감사합니다.`,
  },
//   {
//     no: 14,
//     title: "설 연휴 사무실 운영 안내",
//     date: "2024-12-18",
//     views: 189,
//     author: "관리자",
//     isPinned: true,
//     content: `설 연휴 기간 동안 대전오페라단 사무실 운영 일정을 안내드립니다.

// ■ 휴무 기간: 2025년 1월 28일(화) ~ 1월 30일(목)
// ■ 정상 운영: 2025년 1월 31일(금)부터

// 휴무 기간 중에는 전화 및 방문 상담이 불가하오니 양해 부탁드립니다.
// 급한 문의 사항은 이메일(info@daejeonopera.or.kr)로 보내주시면 휴무 종료 후 순차적으로 답변드리겠습니다.

// 새해 복 많이 받으세요.`,
//   },
//   {
//     no: 13,
//     title: "겨울 특별 공연 티켓 예매 시작",
//     date: "2024-12-15",
//     views: 432,
//     author: "기획팀",
//     isPinned: false,
//     content: `겨울 특별 공연 티켓 예매가 시작되었습니다.

// ■ 공연명: 겨울밤의 오페라 갈라
// ■ 공연일시: 2025년 1월 20일(토) 오후 7시 30분
// ■ 장소: 대전예술의전당 아트홀
// ■ 티켓가격: VIP 10만원 / R석 7만원 / S석 5만원 / A석 3만원

// 예매는 인터파크, 예스24, 대전예술의전당 홈페이지에서 가능합니다.

// 조기 매진이 예상되오니 서둘러 예매해 주시기 바랍니다.`,
//   },
//   {
//     no: 12,
//     title: "오페라단 회원 모집 공고",
//     date: "2024-12-10",
//     views: 156,
//     author: "관리자",
//     isPinned: false,
//   },
//   {
//     no: 11,
//     title: "공연장 좌석 배치 변경 안내",
//     date: "2024-12-05",
//     views: 278,
//     isPinned: false,
//   },
//   {
//     no: 10,
//     title: "후원금 영수증 발급 안내",
//     date: "2024-12-01",
//     views: 123,
//     isPinned: false,
//   },
//   {
//     no: 9,
//     title: "11월 정기공연 연기 안내",
//     date: "2024-11-28",
//     views: 567,
//     isPinned: false,
//   },
//   {
//     no: 8,
//     title: "오페라단 홈페이지 리뉴얼",
//     date: "2024-11-25",
//     views: 345,
//     isPinned: false,
//   },
//   {
//     no: 7,
//     title: "2024년 하반기 공연 평가회",
//     date: "2024-11-20",
//     views: 198,
//     isPinned: false,
//   },
//   {
//     no: 6,
//     title: "단원 정기 총회 개최 안내",
//     date: "2024-11-15",
//     views: 234,
//     isPinned: false,
//   },
];

// News Data - Shared between Main page and Board page
export const news: NewsItem[] = [
  {
    no: 20,
    title: "대전오페라단, 문화예술대상 수상",
    date: "2024-12-22",
    views: 512,
    category: "수상",
    excerpt: "대전오페라단이 2024년 대전광역시 문화예술대상을 수상하는 영예를 안았습니다.",
    image: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=800&h=500&fit=crop",
    url: "https://www.daejeon.go.kr/news/example1",
  },
  {
    no: 19,
    title: "라 트라비아타 공연 성황리에 종료",
    date: "2024-12-19",
    views: 389,
    category: "공연",
    excerpt: "대전오페라단의 정기공연 '라 트라비아타'가 지난 주말 3일간의 공연을 성황리에 마쳤습니다.",
    image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=800&h=500&fit=crop",
    url: "https://www.daejeon.go.kr/news/example2",
  },
  {
    no: 18,
    title: "젊은 성악가 발굴 프로젝트 시작",
    date: "2024-12-16",
    views: 267,
    category: "교육",
    excerpt: "대전오페라단이 미래 오페라계를 이끌어갈 젊은 성악가 발굴에 나섭니다.",
    image: "https://images.unsplash.com/photo-1513623935135-c896b59073c1?w=800&h=500&fit=crop",
    url: "https://www.daejeon.go.kr/news/example3",
  },
  {
    no: 17,
    title: "해외 오케스트라와 협업 공연 확정",
    date: "2024-12-12",
    views: 445,
    category: "공연",
    excerpt: "세계적인 오케스트라와의 협업 공연이 확정되어 많은 기대를 모으고 있습니다.",
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&h=500&fit=crop",
    url: "https://www.daejeon.go.kr/news/example4",
  },
  {
    no: 16,
    title: "오페라 아카데미 수강생 모집",
    date: "2024-12-08",
    views: 312,
    category: "교육",
    excerpt: "2025년 상반기 오페라 아카데미 신규 수강생을 모집합니다.",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=500&fit=crop",
    url: "https://www.daejeon.go.kr/news/example5",
  },
  {
    no: 15,
    title: "지역 학교 찾아가는 오페라 교육",
    date: "2024-12-05",
    views: 198,
    category: "교육",
    excerpt: "지역 초·중·고등학교를 찾아가는 오페라 교육 프로그램이 진행됩니다.",
    image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800&h=500&fit=crop",
    url: "https://www.daejeon.go.kr/news/example6",
  },
  {
    no: 14,
    title: "겨울 갈라 콘서트 티켓 오픈",
    date: "2024-12-01",
    views: 623,
    category: "공연",
    excerpt: "겨울 특별 갈라 콘서트 티켓 예매가 시작되었습니다.",
    image: "https://images.unsplash.com/photo-1551696785-927d4ac2d35b?w=800&h=500&fit=crop",
    url: "https://www.daejeon.go.kr/news/example7",
  },
  {
    no: 13,
    title: "국립오페라단과 교류 협약 체결",
    date: "2024-11-28",
    views: 276,
    category: "협약",
    excerpt: "국립오페라단과 상호 교류 및 협력을 위한 MOU를 체결했습니다.",
    image: "https://images.unsplash.com/photo-1660463718048-b55d65fd7a34?w=800&h=500&fit=crop",
    url: "https://www.daejeon.go.kr/news/example8",
  },
  {
    no: 12,
    title: "대전시와 문화예술 발전 MOU",
    date: "2024-11-24",
    views: 345,
    category: "협약",
    excerpt: "대전광역시와 지역 문화예술 발전을 위한 업무협약을 체결했습니다.",
    image: "https://images.unsplash.com/photo-1665322049384-e56e9ce06e68?w=800&h=500&fit=crop",
    url: "https://www.daejeon.go.kr/news/example9",
  },
  {
    no: 11,
    title: "카르멘 공연 관객 만족도 95%",
    date: "2024-11-20",
    views: 428,
    category: "공연",
    excerpt: "지난달 공연된 '카르멘'이 관객들로부터 뜨거운 호응을 받았습니다.",
    image: "https://images.unsplash.com/flagged/photo-1575448056267-834f55896cd8?w=800&h=500&fit=crop",
    url: "https://www.daejeon.go.kr/news/example10",
  },
];

// Magazine Data
export const magazines: MagazineItem[] = [
  {
    id: 1,
    thumbnail: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=400&h=300&fit=crop",
    title: "2024 겨울호 - 라 트라비아타 특집",
    date: "2024-12-15",
  },
  {
    id: 2,
    thumbnail: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=400&h=300&fit=crop",
    title: "2024 가을호 - 카르멘의 열정",
    date: "2024-09-20",
  },
  {
    id: 3,
    thumbnail: "https://images.unsplash.com/photo-1513623935135-c896b59073c1?w=400&h=300&fit=crop",
    title: "2024 여름호 - 오페라의 여름밤",
    date: "2024-06-15",
  },
  {
    id: 4,
    thumbnail: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&h=300&fit=crop",
    title: "2024 봄호 - 새로운 시작",
    date: "2024-03-20",
  },
  {
    id: 5,
    thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
    title: "2023 겨울호 - 투란도트 회고",
    date: "2023-12-10",
  },
  {
    id: 6,
    thumbnail: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=400&h=300&fit=crop",
    title: "2023 가을호 - 오페라의 향연",
    date: "2023-09-15",
  },
];