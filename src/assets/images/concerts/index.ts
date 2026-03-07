export type ConcertImage = {
  id: string;
  src: string;
  alt: string;
  description?: string;
  concertId?: number;
};

export const concertImages: ConcertImage[] = [
  {
    id: 'concert-poster-01',
    src: '/images/concerts/concert-poster-01.jpg',
    alt: '정기공연 오페라 포스터 1',
    description: '정기공연 메인 포스터 이미지',
  },
  {
    id: 'concert-stage-01',
    src: '/images/concerts/concert-stage-01.jpg',
    alt: '무대 위 공연 장면 1',
    description: '무대 전경과 성악가들의 공연 장면',
  },
  {
    id: 'concert-orchestra-01',
    src: '/images/concerts/concert-orchestra-01.jpg',
    alt: '오케스트라 연주 장면',
    description: '오케스트라와 합창단이 함께하는 공연 모습',
  },
];

export default concertImages;
