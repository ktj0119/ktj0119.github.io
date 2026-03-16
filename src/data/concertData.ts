// Centralized concert data for the entire application

export interface Concert {
  id: number;
  title: string;
  date: string;
  venue: string;
  image: string;
  // Detailed information (optional for list views)
  description?: string;
  images?: string[];
  videoId?: string;
  videoTitle?: string;
}

// All concert data
export const concerts: Concert[] = [
  {
    id: 1,
    title: "나비부인",
    date: "2025-08-29 ~ 2025-08-31",
    venue: "대전예술의전당 아트홀",
    image: "images/concert/2025/madama butterfly/poster.jpg",
    description: `“사랑을 믿은 날개는, 운명 앞에 조용히 젖는다.”

1900년 일본의 나가사키를 배경으로 펼쳐지는 오페라 <나비부인>은 돌아오지 않을 남편을 홀로 기다리다 비극적 최후를 맞이하는 초초상의 이야기입니다. 나가사키에 주둔하고 있던 미 해군 중위 핑커턴(Pinkerton)은 집안이 몰락하여 게이샤가 된 15살의 초초상(Cio-Cio-San) 과 결혼합니다. 얼마 후 복무 기간이 끝난 핑커턴은 곧 돌아오겠다는 말을 남기고 미국으로 돌아가 버립니다. 3년이 지나도 그가 돌아오지 않자 주위 사람들은 그녀에게 재혼을 권하지만 초초상은 이를 거절합니다. 그러던 어느 날 핑커턴은 미국인 아내 케이트(Kate)와 함께 초초상 앞에 나타나 아들을 데려가겠다고 말합니다. 좌절한 초초상은 아들과 마지막 인사를 나누고 스스로 자결합니다.`,
    images: [
    "images/concert/2025/madama butterfly/pic1.jpg",
    "images/concert/2025/madama butterfly/pic2.jpg",
    "images/concert/2025/madama butterfly/pic3.jpg"
  ]
  },
{
  id: 2,
    title: "이상의 날개",
      date: "2024-03-08 ~ 2024-03-10",
        venue: "국립극장 달오름",
          image: "images/concert/2024/The Wing of Yi Sang/poster.jpg",
            description: `“어떤 고통에도 희망의 날개를 접지 않는 자, 마침내 그 희망의 가장 가까이 닿을 것이다”. 이미 죽은 사람처럼, 자신을 ‘박제가 되어버린 천재’라고 자처했던 김해경(시인 이상)
            
            1936년 식민지 도시 경성. 
            희망 없는 나날. 해경의 괴로움을 아는 것은 자신이 마주하는 거울 속 세계에 존재하는 분신, 이상 뿐이다. 이상은 해경을 만날 때마다 자살을 권유한다. 이 가혹한 세계를 탈출하는 방법은 죽음밖에 없다고. 하지만 해경은 아직은 도망가지 않겠다며 거부한다.  자신이 겪는 절망을 문학으로 똑똑히 기록하고 싶다고. 

            19세기와 20세기의 틈바구니에 짓눌려 아우성치는 식민지 사람들. 무서운 시대, 겁에 질린 아이들이 막다른 골목으로 질주하는 것을 목격하는 시인. 그렇게 처절한 비명처럼 써 나간 시 오감도. 

            하지만 세상에 야심차게 내보인 작품은 실패로 돌아가고, 금홍이 역시 그를 외면한다. 
            빛 한 줌 들지 않는 종로 구석에 유폐된 듯 살아온 두 청춘. 폐병에 걸려 삶과 죽음의 문턱을 오가는 시인 해경과 시골 기생 출신 금홍이의 사랑. 화려한 불빛 아래, 욕망이 들끓는 도시 한복판에서 해경은 이제 길을 잃고 애인마저 잃는다.

            홀로 남은 해경에게 다가온 한 여자. 그의 시를 사랑하는 변동림이 나타나고, 마침내 해경은 금홍이와의 생활을 청산하고 동림과 새로운 출발을 꿈꾼다. 그러나 행복한 순간도 잠시. 결혼식장에서 행패를 부리는 일본인을 해경이 폭행하는 사건이 벌어지고, 이 일로 해경은 경성을 떠나 바다를 건너간다.
            비록 피난처이긴 하나 그토록 갈망했던 도시 동경에 도착한 해경. 하지만 곧 자신이 품었던 환상이 착각이었음을 깨닫고, 급기야 오랫동안 멈춰 있던 각혈까지 재발한다. 그렇게 환멸에 빠져 있는 해경 앞에 이상이 또 다시 나타나는데...`,
              images: [
                "images/concert/2024/The Wing of Yi Sang/pic1.jpg",
                "images/concert/2024/The Wing of Yi Sang/pic2.jpg", 
                "images/concert/2024/The Wing of Yi Sang/pic3.jpg",
              ],
              videoId: "QZfyRYg4HfI",
              videoTitle: "24.03.08 15:00 공연"
  },
  {
    id:3,
    title: "카발레리아 루스티카나 & 팔리아치",
    date: "2023-06-09 ~ 2023-06-11",
    venue: "대전예술의전당 아트홀",
    image: "images/concert/2023/Cavalleria/poster.jpg",
    description: `현실보다 더욱 적나라한 현실을 무대 위에 그려내는 베리즈모 오페라의 대표작!
    시대와 외형을 그대로 표현하지 않고, 내면의 실제와 타락한 현실 그리고 엉킨 관계를 보여줌으로써 현실의 객관적인 모습을 통해
    우리 자신을 반성하고 고찰하는 작품을 무대 위에서 현실의 참상과 인간의 본성을 충격적이면서도 아름답게 그려낸다.`,
    images: [
        "images/concert/2023/Cavalleria/pic1.jpg",
        "images/concert/2023/Cavalleria/pic2.jpg",
        "images/concert/2023/Cavalleria/pic3.jpg"
    ],
    videoId: "TM6DZT2zr6I",
    videoTitle: "23.06.10 15:00 공연"
  }
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
