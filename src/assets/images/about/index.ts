export type AboutImage = {
  id: string;
  src: string;
  alt: string;
  description?: string;
};

export const aboutImages: AboutImage[] = [
  {
    id: 'about-history-01',
    src: '/images/about/about-history-01.jpg',
    alt: '대전오페라단 창단 당시 사진',
    description: '대전오페라단의 역사와 발자취를 보여주는 이미지',
  },
  {
    id: 'about-artistic-director',
    src: '/images/about/about-artistic-director.jpg',
    alt: '예술감독 프로필 사진',
    description: '예술감독 인사말 또는 소개에 사용되는 이미지',
  },
  {
    id: 'about-rehearsal-01',
    src: '/images/about/about-rehearsal-01.jpg',
    alt: '연습실에서 리허설 중인 단원들',
    description: '대전오페라단 단원들의 연습 모습',
  },
];

export default aboutImages;
