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
  publisher: string;
  date: string;
  views: number;
  category?: string;
  excerpt?: string;
  image?: string;
  url: string;
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
    no: 1,
    title: "홈페이지 개편 안내",
    date: "2026-03-08",
    views: 0,
    author: "관리자",
    isPinned: true,
    content: `안녕하세요, 대전오페라단입니다.

기존의 대전오페라단 사이트를 개선하기 위해 새 홈페이지를 제작 중에 있습니다.

현재 홈페이지 서비스를 개방하였으나 아직 개선 사항이 진행중에 있습니다.

최대한 빠른 시일 내에 처리하여 더 좋은 서비스로 여러분께 제공하겠습니다.

감사합니다.`
  }
];

// News Data - Shared between Main page and Board page
export const news: NewsItem[] = [
  {
    no: 20,
    title: "대전오페라단, 문화예술대상 수상",
    publisher: "중도일보",
    date: "2024-12-22",
    views: 512,
    category: "수상",
    excerpt: "대전오페라단이 2024년 대전광역시 문화예술대상을 수상하는 영예를 안았습니다.",
    image: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=800&h=500&fit=crop",
    url: "https://www.joongdo.co.kr/main/view.php?key=20241222010007890",
  },
  {
    no: 19,
    title: "라 트라비아타 공연 성황리에 종료",
    publisher: "대전일보",
    date: "2024-12-19",
    views: 389,
    category: "공연",
    excerpt: "대전오페라단의 정기공연 '라 트라비아타'가 지난 주말 3일간의 공연을 성황리에 마쳤습니다.",
    image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=800&h=500&fit=crop",
    url: "https://www.daejonilbo.com/news/articleView.html?idxno=2105678",
  },
  {
    no: 18,
    title: "젊은 성악가 발굴 프로젝트 시작",
    publisher: "충청투데이",
    date: "2024-12-16",
    views: 267,
    category: "교육",
    excerpt: "대전오페라단이 미래 오페라계를 이끌어갈 젊은 성악가 발굴에 나섭니다.",
    image: "https://images.unsplash.com/photo-1513623935135-c896b59073c1?w=800&h=500&fit=crop",
    url: "https://www.cctoday.co.kr/news/articleView.html?idxno=2189012",
  },
  {
    no: 17,
    title: "해외 오케스트라와 협업 공연 확정",
    publisher: "굿모닝충청",
    date: "2024-12-12",
    views: 445,
    category: "공연",
    excerpt: "세계적인 오케스트라와의 협업 공연이 확정되어 많은 기대를 모으고 있습니다.",
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&h=500&fit=crop",
    url: "https://www.goodmorningcc.com/news/articleView.html?idxno=301234",
  },
  {
    no: 16,
    title: "오페라 아카데미 수강생 모집",
    publisher: "뉴스1",
    date: "2024-12-08",
    views: 312,
    category: "교육",
    excerpt: "2025년 상반기 오페라 아카데미 신규 수강생을 모집합니다.",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=500&fit=crop",
    url: "https://www.news1.kr/articles/?5678901",
  },
  {
    no: 15,
    title: "지역 학교 찾아가는 오페라 교육",
    publisher: "연합뉴스",
    date: "2024-12-05",
    views: 198,
    category: "교육",
    excerpt: "지역 초·중·고등학교를 찾아가는 오페라 교육 프로그램이 진행됩니다.",
    image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800&h=500&fit=crop",
    url: "https://www.yna.co.kr/view/AKR20241205001234567",
  },
  {
    no: 14,
    title: "겨울 갈라 콘서트 티켓 오픈",
    publisher: "뉴시스",
    date: "2024-12-01",
    views: 623,
    category: "공연",
    excerpt: "겨울 특별 갈라 콘서트 티켓 예매가 시작되었습니다.",
    image: "https://images.unsplash.com/photo-1551696785-927d4ac2d35b?w=800&h=500&fit=crop",
    url: "https://www.newsis.com/view/?id=NISX20241201_0002987654",
  },
  {
    no: 13,
    title: "국립오페라단과 교류 협약 체결",
    publisher: "금강일보",
    date: "2024-11-28",
    views: 276,
    category: "협약",
    excerpt: "국립오페라단과 상호 교류 및 협력을 위한 MOU를 체결했습니다.",
    image: "https://images.unsplash.com/photo-1660463718048-b55d65fd7a34?w=800&h=500&fit=crop",
    url: "https://www.ggilbo.com/news/articleView.html?idxno=1002345",
  },
  {
    no: 12,
    title: "대전시와 문화예술 발전 MOU",
    publisher: "대전매일",
    date: "2024-11-24",
    views: 345,
    category: "협약",
    excerpt: "대전광역시와 지역 문화예술 발전을 위한 업무협약을 체결했습니다.",
    image: "https://images.unsplash.com/photo-1665322049384-e56e9ce06e68?w=800&h=500&fit=crop",
    url: "http://www.dynews.co.kr/news/articleView.html?idxno=701234",
  },
  {
    no: 11,
    title: "카르멘 공연 관객 만족도 95%",
    publisher: "충청신문",
    date: "2024-11-20",
    views: 428,
    category: "공연",
    excerpt: "지난달 공연된 '카르멘'이 관객들로부터 뜨거운 호응을 받았습니다.",
    image: "https://images.unsplash.com/flagged/photo-1575448056267-834f55896cd8?w=800&h=500&fit=crop",
    url: "http://www.dailycc.net/news/articleView.html?idxno=789012",
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