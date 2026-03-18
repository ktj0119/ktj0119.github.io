import {
  Heart,
  Building2,
  Gift,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export function Sponsorship() {
  const monthlySponsorshipLevels = [
    {
      level: "헨델",
      amount: "10,000원",
      benefits: ["티켓 1매 제공[년]", "추가 구매 시 30% 할인"],
    },
    {
      level: "모차르트",
      amount: "30,000원 이상",
      benefits: ["티켓 2매 제공[년]", "추가 구매 시 40% 할인"],
    },
    {
      level: "슈트라우스",
      amount: "100,000원 이상",
      benefits: ["티켓 4매 제공[년]", "추가 구매 시 50% 할인"],
    },
  ];

  const annualSponsorshipLevels = [
    {
      level: "도니제티",
      amount: "300만원 이상 후원",
      benefits: [
        "티켓 20매 제공[년]",
        "추가 구매 시 30% 할인",
        "정기공연 프로그램 북 광고",
      ],
    },
    {
      level: "푸치니",
      amount: "500만원 이상 후원",
      benefits: [
        "티켓 30매 제공[년]",
        "추가 구매 시 40% 할인",
        "맛있는 오페라 강의[년1회]",
        "정기공연 프로그램 북 광고",
      ],
    },
    {
      level: "베르니",
      amount: "1,000만원 이상 후원",
      benefits: [
        "티켓 30매 제공[년]",
        "추가 구매 시 50% 할인",
        "사은 음악회[년1회]",
        "정기공연 프로그램 북 광고",
      ],
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
      <section className="py-16 bg-white border-b border-gray-100">
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

          {/* Monthly Membership Table */}
          <div className="mb-12">
            <h3 className="text-2xl mb-6 text-[var(--color-opera-burgundy)]">
              월회비
            </h3>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-[var(--color-opera-burgundy)] to-[var(--color-opera-dark)]">
                      <th className="px-6 py-4 text-center text-white border-r border-white/20">
                        등급
                      </th>
                      <th className="px-6 py-4 text-center text-white border-r border-white/20">
                        금액
                      </th>
                      <th className="px-6 py-4 text-center text-white">
                        혜택
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {monthlySponsorshipLevels.map(
                      (tier, index) => (
                        <tr
                          key={index}
                          className={`${
                            index % 2 === 0
                              ? "bg-white"
                              : "bg-[var(--color-opera-cream)]"
                          } hover:bg-[var(--color-opera-gold)]/10 transition-colors`}
                        >
                          <td className="px-6 py-4 border-b border-gray-200 text-center">
                            <span className="font-semibold text-[var(--color-opera-burgundy)]">
                              {tier.level}
                            </span>
                          </td>
                          <td className="px-6 py-4 border-b border-gray-200 text-center">
                            <span className="font-semibold">
                              {tier.amount}
                            </span>
                          </td>
                          <td className="px-6 py-4 border-b border-gray-200">
                            <ul className="space-y-2">
                              {tier.benefits.map(
                                (benefit, idx) => (
                                  <li
                                    key={idx}
                                    className="flex items-start text-sm"
                                  >
                                    <span className="text-[var(--color-opera-gold)] mr-2">
                                      ✓
                                    </span>
                                    <span className="text-gray-700">
                                      {benefit}
                                    </span>
                                  </li>
                                ),
                              )}
                            </ul>
                          </td>
                        </tr>
                      ),
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Annual Membership Table */}
          <div>
            <h3 className="text-2xl mb-6 text-[var(--color-opera-burgundy)]">
              연회비
            </h3>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-[var(--color-opera-burgundy)] to-[var(--color-opera-dark)]">
                      <th className="px-6 py-4 text-center text-white border-r border-white/20">
                        등급
                      </th>
                      <th className="px-6 py-4 text-center text-white border-r border-white/20">
                        금액
                      </th>
                      <th className="px-6 py-4 text-center text-white">
                        혜택
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {annualSponsorshipLevels.map(
                      (tier, index) => (
                        <tr
                          key={index}
                          className={`${
                            index % 2 === 0
                              ? "bg-white"
                              : "bg-[var(--color-opera-cream)]"
                          } hover:bg-[var(--color-opera-gold)]/10 transition-colors`}
                        >
                          <td className="px-6 py-4 border-b border-gray-200 text-center">
                            <span className="font-semibold text-[var(--color-opera-burgundy)]">
                              {tier.level}
                            </span>
                          </td>
                          <td className="px-6 py-4 border-b border-gray-200 text-center">
                            <span className="font-semibold">
                              {tier.amount}
                            </span>
                          </td>
                          <td className="px-6 py-4 border-b border-gray-200">
                            <ul className="space-y-2">
                              {tier.benefits.map(
                                (benefit, idx) => (
                                  <li
                                    key={idx}
                                    className="flex items-start text-sm"
                                  >
                                    <span className="text-[var(--color-opera-gold)] mr-2">
                                      ✓
                                    </span>
                                    <span className="text-gray-700">
                                      {benefit}
                                    </span>
                                  </li>
                                ),
                              )}
                            </ul>
                          </td>
                        </tr>
                      ),
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Sponsor */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-[var(--color-opera-burgundy)] mb-12">
            후원 신청 방법
          </h2>

          <div className="bg-white border border-gray-100 rounded-2xl shadow-xl overflow-hidden mt-10 mb-16">
            <div className="bg-[var(--color-opera-burgundy)] py-4 px-8 text-center">
              <h3 className="text-white text-xl mb-0">신청 절차 안내</h3>
            </div>
            <div className="p-10 space-y-12">
              <div className="flex flex-col md:flex-row md:items-start gap-6 mt-4">
                <div className="text-center md:text-left">
                  <h4 className="text-lg font-bold mb-2 text-gray-800">자동이체(CMS) 신청</h4>
                  <p className="text-gray-600 leading-relaxed">
                    매월 정기적으로 원하시는 금액만큼 후원하실 수 있습니다. <br/>
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:items-start gap-6 mt-4">
                <div className="text-center md:text-left">
                  <h4 className="text-lg font-bold mb-2 text-gray-800">무통장 입금 및 계좌이체</h4>
                  <div className="bg-[var(--color-opera-cream)] p-5 rounded-lg inline-block border border-[var(--color-opera-gold)]/20 mt-2">
                    <p className="text-[var(--color-opera-burgundy)] font-bold text-lg mb-1">국민은행 468401-04-201402</p>
                    <p className="text-gray-700">예금주: 지은주(대전오페라단)</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:items-start gap-6 mt-4">
                <div className="text-center md:text-left">
                  <h4 className="text-lg font-bold mb-2 text-gray-800">후원 및 기부 문의</h4>
                  <p className="text-gray-700 flex items-center justify-center md:justify-start gap-2 text-lg">
                    <Phone className="w-5 h-5 text-[var(--color-opera-gold)]" />
                    담당자: <span className="font-bold text-[var(--color-opera-burgundy)]">010-3419-9020</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
