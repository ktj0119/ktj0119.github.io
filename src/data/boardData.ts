// Centralized data source for Notice and News
export interface NoticeItem {
  no: number;
  title: string;
  date: string;
  content?: string;
  author?: string;
  isPinned?: boolean;
  imageUrl?: string;
  attachmentUrl?: string;
  attachmentName?: string;
}

export interface NewsItem {
  no: number;
  title: string;
  publisher: string;
  date: string;
  url: string;
}

// Notice Data - Shared between Main page and Board page
export const notices: NoticeItem[] = [
  {
    no: 1,
    title: "홈페이지 개편 안내",
    date: "2026-03-08",
    author: "관리자",
    isPinned: true,
    content: `안녕하세요, 대전오페라단입니다.

기존의 대전오페라단 사이트를 개선하기 위해 새 홈페이지를 제작 중에 있습니다.

현재 홈페이지 서비스를 개방하였으나 아직 개선 사항이 진행중에 있습니다.

최대한 빠른 시일 내에 처리하여 더 좋은 서비스로 여러분께 제공하겠습니다.

감사합니다.`
  }, 
  {
    no: 2,
    title: "2026 대전오페라단 오디션 공고",
    date: "2026-03-16",
    author: "관리자",
    isPinned: true,
    content: `안녕하세요. 2026 대전오페라단 창작오페라 <이상의 날개> 오디션을 진행합니다.
    
    하단에 상세사항에 따라 신청해주세요.
    
    많은 관심과 참여 부탁드립니다.`,
    imageUrl: "/notices/audition.png",
    attachmentUrl: "/notices/2026오디션공고.hwp",
    attachmentName: "2026 대전오페라단 오디션 공고.hwp"
  }
];

// News Data - Shared between Main page and Board page
export const news: NewsItem[] = [
  {
    no: 1,
    title: "대전교육청, 학교로 찾아가는 예술무대 업무협약",
    publisher: "한국교육신문",
    date: "2026-02-25",
    url: "https://www.hangyo.com/news/article.html?no=106857"
  },
  {
    no: 2,
    title: "아이들과 함께 자라는 무대, 대전 오페라단 지은주 단장의 사명",
    publisher: "충청신문",
    date: "2025-09-17",
    url: "https://www.dailycc.net/news/articleView.html?idxno=849826"
  },
  {
    no: 3,
    title: "벛꽃 아래 피어나 슬픈 사랑, 걸작 오페라를 만나다",
    publisher: "문화저널 맥",
    date: "2025-08-10",
    url: "https://www.themac.co.kr/news/articleView.html?idxno=6318"
  }
];
