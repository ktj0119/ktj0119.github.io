export type MainImage = {
  id: string;
  src: string;
  alt: string;
  description?: string;
};

export const mainImages: MainImage[] = [
  {
    id: 'main-hero-01',
    src: '/images/main/main-hero-01.jpg',
    alt: '대전오페라단 메인 비주얼 이미지 1',
    description: '대표 작품 공연 장면을 강조한 메인 비주얼',
  },
  {
    id: 'main-hero-02',
    src: '/images/main/main-hero-02.jpg',
    alt: '대전오페라단 메인 비주얼 이미지 2',
    description: '오케스트라와 성악가가 함께하는 공연 장면',
  },
  {
    id: 'main-banner-sponsorship',
    src: '/images/main/main-banner-sponsorship.jpg',
    alt: '후원 및 협찬 안내 배너 이미지',
    description: '후원/협찬 섹션으로 이동하는 배너 이미지',
  },
];

export default mainImages;
