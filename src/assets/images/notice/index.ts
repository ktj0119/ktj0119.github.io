export type NoticeImage = {
  id: string;
  src: string;
  alt: string;
  description?: string;
  noticeId?: number;
};

export const noticeImages: NoticeImage[] = [
  {
    id: 'notice-default-01',
    src: '/images/notice/notice-default-01.jpg',
    alt: '공지사항 기본 썸네일 이미지',
    description: '일반 공지사항에 사용되는 기본 이미지',
  },
  {
    id: 'notice-audition-01',
    src: '/images/notice/notice-audition-01.jpg',
    alt: '오디션 공지 썸네일 이미지',
    description: '단원 및 오디션 관련 공지에 사용하는 이미지',
  },
  {
    id: 'notice-recruit-01',
    src: '/images/notice/notice-recruit-01.jpg',
    alt: '채용 공고 썸네일 이미지',
    description: '채용/모집 공지에 사용하는 이미지',
  },
];

export default noticeImages;
