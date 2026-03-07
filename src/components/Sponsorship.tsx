import { Heart, Building2, Gift, Mail, Phone, MapPin } from 'lucide-react';

export function Sponsorship() {
  const sponsorshipLevels = [
    {
      level: '플래티넘 후원',
      amount: '1,000만원 이상',
      benefits: [
        '공연 프로그램북 메인 페이지 광고',
        '연간 정기공연 VIP석 10매 제공',
        '공연 리셉션 초대',
        '홈페이지 및 SNS 후원사 로고 게재',
        '세제 혜택 (기부금 영수증 발급)',
      ],
      color: 'bg-gradient-to-br from-gray-300 to-gray-400',
    },
    {
      level: '골드 후원',
      amount: '500만원 이상',
      benefits: [
        '공연 프로그램북 광고 게재',
        '연간 정기공연 VIP석 5매 제공',
        '홈페이지 후원사 명단 게재',
        '세제 혜택 (기부금 영수증 발급)',
      ],
      color: 'bg-gradient-to-br from-[var(--color-opera-gold)] to-yellow-600',
    },
    {
      level: '실버 후원',
      amount: '300만원 이상',
      benefits: [
        '공연 프로그램북 후원사 명단 게재',
        '연간 정기공연 일반석 5매 제공',
        '세제 혜택 (기부금 영수증 발급)',
      ],
      color: 'bg-gradient-to-br from-gray-200 to-gray-300',
    },
    {
      level: '일반 후원',
      amount: '100만원 이상',
      benefits: [
        '공연 프로그램북 후원사 명단 게재',
        '연간 정기공연 일반석 2매 제공',
        '세제 혜택 (기부금 영수증 발급)',
      ],
      color: 'bg-gradient-to-br from-[var(--color-opera-burgundy)] to-red-900',
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--color-opera-cream)]">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[var(--color-opera-burgundy)] to-[var(--color-opera-dark)] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="w-16 h-16 mx-auto mb-6 text-[var(--color-opera-gold)]" />
          <h1 className="text-5xl mb-6 text-white">후원 안내</h1>
          <p className="text-xl max-w-3xl mx-auto text-white/90">
            대전오페라단과 함께 예술의 아름다움을 나누어주세요.<br />
            여러분의 소중한 후원이 우리 지역 문화예술 발전의 밑거름이 됩니다.
          </p>
        </div>
      </section>

      {/* Why Sponsor Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-[var(--color-opera-burgundy)] mb-12">
            후원이 필요한 이유
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Building2 className="w-12 h-12 mx-auto mb-4 text-[var(--color-opera-burgundy)]" />
              <h3 className="mb-3">지역 문화 발전</h3>
              <p className="text-gray-600">
                대전 지역의 오페라 문화를 발전시키고 시민들에게 수준 높은 공연을 제공합니다.
              </p>
            </div>
            <div className="text-center p-6">
              <Gift className="w-12 h-12 mx-auto mb-4 text-[var(--color-opera-burgundy)]" />
              <h3 className="mb-3">신진 예술가 양성</h3>
              <p className="text-gray-600">
                재능 있는 젊은 예술가들에게 무대 경험의 기회를 제공하고 육성합니다.
              </p>
            </div>
            <div className="text-center p-6">
              <Heart className="w-12 h-12 mx-auto mb-4 text-[var(--color-opera-burgundy)]" />
              <h3 className="mb-3">예술의 대중화</h3>
              <p className="text-gray-600">
                더 많은 시민들이 오페라를 쉽게 접하고 즐길 수 있도록 노력합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorship Levels */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-[var(--color-opera-burgundy)] mb-4">
            후원 등급 안내
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            후원 금액에 따라 다양한 혜택을 드립니다
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sponsorshipLevels.map((tier, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className={`${tier.color} p-6 text-white text-center`}>
                  <h3 className="text-2xl mb-2 text-white">{tier.level}</h3>
                  <p className="text-lg opacity-90">{tier.amount}</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {tier.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <span className="text-[var(--color-opera-gold)] mr-2">✓</span>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Sponsor */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-[var(--color-opera-burgundy)] mb-12">
            후원 방법
          </h2>

          <div className="bg-[var(--color-opera-cream)] rounded-lg p-8 mb-8">
            <h3 className="mb-6 text-[var(--color-opera-burgundy)]">계좌 이체</h3>
            <div className="space-y-3 text-gray-700">
              <p className="text-lg">
                <strong>은행:</strong> 국민은행
              </p>
              <p className="text-lg">
                <strong>계좌번호:</strong> 123-456-789012
              </p>
              <p className="text-lg">
                <strong>예금주:</strong> 대전오페라단
              </p>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              ※ 후원금 입금 후 연락 주시면 기부금 영수증을 발급해 드립니다.
            </p>
          </div>

          <div className="bg-[var(--color-opera-cream)] rounded-lg p-8">
            <h3 className="mb-6 text-[var(--color-opera-burgundy)]">문의하기</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Phone className="w-5 h-5 text-[var(--color-opera-burgundy)] mr-3 mt-1" />
                <div>
                  <p className="text-gray-700">
                    <strong>전화:</strong> 042-123-4567
                  </p>
                  <p className="text-sm text-gray-600">평일 09:00 - 18:00</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="w-5 h-5 text-[var(--color-opera-burgundy)] mr-3 mt-1" />
                <div>
                  <p className="text-gray-700">
                    <strong>이메일:</strong> sponsor@daejeonopera.kr
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-[var(--color-opera-burgundy)] mr-3 mt-1" />
                <div>
                  <p className="text-gray-700">
                    <strong>주소:</strong> 대전광역시 중구 대종로 123 오페라하우스
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tax Benefits */}
      <section className="py-16 bg-gradient-to-r from-[var(--color-opera-burgundy)] to-[var(--color-opera-dark)] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6 text-white">세제 혜택 안내</h2>
          <p className="text-lg mb-4 text-white/90">
            대전오페라단은 문화예술진흥법에 따른 지정기부금 단체입니다.
          </p>
          <p className="text-white/90 max-w-2xl mx-auto">
            개인 후원자는 기부금액의 15~30%, 법인 후원자는 10%를 소득공제 또는 세액공제 받으실 수 있습니다.
            기부금 영수증은 연말정산 시 제출하시면 됩니다.
          </p>
        </div>
      </section>
    </div>
  );
}
