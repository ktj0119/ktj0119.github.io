export type NewsImage = {
  id: string;
  src: string;
  alt: string;
  description?: string;
  newsId?: number;
};

export const newsImages: NewsImage[] = [
  {
    id: 'news-default-01',
    src: '/images/news/news-default-01.jpg',
    alt: '뉴스 기본 썸네일 이미지',
    description: '보도자료/기사에 사용하는 기본 이미지',
  },
  {
    id: 'news-press-01',
    src: '/images/news/news-press-01.jpg',
    alt: '언론 인터뷰 및 보도 이미지',
    description: '언론 보도 및 인터뷰 관련 기사용 이미지',
  },
  {
    id: 'news-event-01',
    src: '/images/news/news-event-01.jpg',
    alt: '행사 및 특별 프로그램 이미지',
    description: '행사/프로그램 관련 뉴스에 사용하는 이미지',
  },
];

export default newsImages;
