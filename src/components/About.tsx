import React, { useState, useEffect } from "react";
import { FileText } from "lucide-react";
import { KakaoMap } from "./KakaoMap";

export function About() {
  const [activeSection, setActiveSection] = useState("introduction");

  const sections = [
    { id: "introduction", label: "소개" },
    { id: "greeting", label: "인사말" },
    { id: "history", label: "연혁" },
    { id: "organization", label: "조직도" },
    { id: "directions", label: "오시는 길" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.querySelector(`#${id} h2`);
    if (section) {
      const offset = 100;
      const elementPosition =
        section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 gap-8">
      {/* Fixed Left Side Menu */}
      <aside className="hidden lg:block w-48 flex-shrink-0">
        <nav className="fixed top-33 w-48">
          <ul className="space-y-2">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-4 py-2 rounded transition-colors ${activeSection === section.id
                      ? "bg-[var(--color-opera-burgundy)] text-white"
                      : "text-gray-700 hover:bg-[var(--color-opera-cream)] hover:text-[var(--color-opera-burgundy)]"
                    }`}
                >
                  {section.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        {/* Introduction Section */}
        <section id="introduction" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl text-[var(--color-opera-burgundy)] mb-6 border-b-2 border-[var(--color-opera-gold)] pb-2">
            대전오페라단 소개
          </h2>
          <div className="relative">
            <div className="space-y-4 text-gray-700 pr-8 md:pr-12 lg:pr-16">
              <p>
                대전오페라단은 36년 이상의 제작 경험을 바탕으로 국내 오페라 공연의 수준을 국제적인 수준으로 끌어올리기 위해 끊임없이 노력하고 있습니다. 이를 위해 전문 아티스트를 위한 무대 제공과 인재 발굴을 통해 수준 높은 공연 문화를 정착시키는데 힘쓰고 있으며, 권위 있는 제14회 대한민국 오페라축제에 초청된 유일한 민간 오페라단입니다.
              </p>
              <p>
                국제 문화교류의 중심단체로서 선도적 역할을 하고 있으며, 특히 몽골과의 문화예술 교류를 통해 국제문화교류의 중심단체로서의 역할을 더욱 강화하고 있습니다.
              </p>
              <p>
                대전 지역 소외계층과 소외계층에게 문화예술을 접할 수 있는 기회를 제공하기 위해 무료 또는 할인 입장권을 제공하고 있으며, 기업과 함께 각종 단체에 입장권 기부 등을 통한 사회공헌 활동을 전개하고 있습니다. 앞으로도 예술적 열정과 역량을 기반으로 일반관객과 클래식 음악 애호가들 뿐 아니라 국제적인 활동 무대까지 확장해 나가 대한민국을 대표하는 원천이 되고, 국제문화교류의 중심지로 더욱 발전해 나갈 것입니다.
              </p>
            </div>
          </div>
        </section>

        {/* Greeting Section */}
        <section id="greeting" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl text-[var(--color-opera-burgundy)] mb-6 border-b-2 border-[var(--color-opera-gold)] pb-2">
            단장 인사말
          </h2>
          <div className="bg-[var(--color-opera-cream)] p-8 rounded-lg relative">
            {/* Director Portrait */}
            <div className="float-left mr-6 mb-4">
              <img
                src="https://images.unsplash.com/photo-1699521376652-a5666c8552fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMGNvbmR1Y3RvcnxlbnwxfHx8fDE3NjY2NDEwNzB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="단장 김성철"
                className="w-32 h-32 object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="space-y-4 text-gray-700">
              <p className="italic">
                "대전오페라단을 찾아주신 여러분, 진심으로 환영합니다."
              </p>
              <p>
                대전오페라단은 오페라 예술의 아름다움을 더 많은 분들과 나누고자
                하는 열정으로 지난 35년간 걸어왔습니다.
              </p>
              <p>
                우리는 단순히 공연을 올리는 것을 넘어, 관객 여러분께 깊은 감동과
                삶의 위로를 전하고자 합니다. 세계 최고 수준의 성악가들과 함께
                만들어가는 무대는 언제나 새로운 도전이자 기쁨입니다.
              </p>
              <p>
                앞으로도 대전오페라단은 예술적 탁월함을 추구하며, 지역 문화예술
                발전에 앞장서겠습니다. 여러분의 많은 관심과 사랑
                부탁드립니다.
              </p>
              <p className="mt-6 text-right clear-both">
                <span className="block">감사합니다.</span>
                <span className="block mt-2">대전오페라단 단장 김성철</span>
              </p>
            </div>
          </div>
        </section>

        {/* History Section */}
        <section id="history" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl text-[var(--color-opera-burgundy)] mb-6 border-b-2 border-[var(--color-opera-gold)] pb-2">
            연혁
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-l-4 border-[var(--color-opera-burgundy)] pl-6 py-2">
              <h3 className="text-xl text-[var(--color-opera-burgundy)] mb-2">
                2024
              </h3>
              <ul className="space-y-1 text-gray-700">
                <li>• 창단 36주년 기념 갈라 콘서트</li>
                <li>• 정기공연 「라 트라비아타」</li>
                <li>• 시민과 함께하는 야외 오페라 축제</li>
              </ul>
            </div>

            <div className="border-l-4 border-[var(--color-opera-gold)] pl-6 py-2">
              <h3 className="text-xl text-[var(--color-opera-burgundy)] mb-2">
                2023
              </h3>
              <ul className="space-y-1 text-gray-700">
                <li>• 정기공연 「카르멘」</li>
                <li>• 특별공연 「투란도트」</li>
                <li>• 대전 문화예술대상 수상</li>
              </ul>
            </div>

            <div className="border-l-4 border-[var(--color-opera-gold)] pl-6 py-2">
              <h3 className="text-xl text-[var(--color-opera-burgundy)] mb-2">
                2020
              </h3>
              <ul className="space-y-1 text-gray-700">
                <li>• 문화체육관광부 우수공연단체 선정</li>
                <li>• 온라인 스트리밍 콘서트 시리즈 시작</li>
              </ul>
            </div>

            <div className="border-l-4 border-[var(--color-opera-gold)] pl-6 py-2">
              <h3 className="text-xl text-[var(--color-opera-burgundy)] mb-2">
                1988
              </h3>
              <ul className="space-y-1 text-gray-700">
                <li>• 대전오페라단 창단</li>
                <li>• 창단 공연 「라 보엠」</li>
              </ul>
            </div>
          </div>

          <button className="mt-6 flex items-center gap-2 px-6 py-3 bg-[var(--color-opera-burgundy)] text-white rounded hover:bg-opacity-90 transition-colors">
            <FileText className="w-4 h-4" />
            <span>전체 연혁 보기</span>
          </button>
        </section>

        {/* Organization Chart Section */}
        <section id="organization" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl text-[var(--color-opera-burgundy)] mb-6 border-b-2 border-[var(--color-opera-gold)] pb-2">
            조직도
          </h2>
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="space-y-8">
              {/* Top Level */}
              <div className="text-center">
                <div className="inline-block bg-[var(--color-opera-burgundy)] text-white px-8 py-4 rounded">
                  <div className="mb-1">단장</div>
                  <div className="text-sm">김성철</div>
                </div>
              </div>

              {/* Second Level */}
              <div className="flex justify-center gap-4">
                <div className="text-center">
                  <div className="bg-[var(--color-opera-gold)] text-white px-6 py-3 rounded">
                    <div className="mb-1">예술감독</div>
                    <div className="text-sm">박예술</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-[var(--color-opera-gold)] text-white px-6 py-3 rounded">
                    <div className="mb-1">사무국장</div>
                    <div className="text-sm">이행정</div>
                  </div>
                </div>
              </div>

              {/* Third Level */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="bg-gray-100 border border-gray-300 px-4 py-3 rounded">
                    <div className="mb-2">음악팀</div>
                    <div className="text-sm text-gray-600 space-y-1">
                      <div>정화음</div>
                      <div>최선율</div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-gray-100 border border-gray-300 px-4 py-3 rounded">
                    <div className="mb-2">연출팀</div>
                    <div className="text-sm text-gray-600 space-y-1">
                      <div>강무대</div>
                      <div>윤연기</div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-gray-100 border border-gray-300 px-4 py-3 rounded">
                    <div className="mb-2">기획팀</div>
                    <div className="text-sm text-gray-600 space-y-1">
                      <div>송기획</div>
                      <div>한준비</div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-gray-100 border border-gray-300 px-4 py-3 rounded">
                    <div className="mb-2">총무팀</div>
                    <div className="text-sm text-gray-600 space-y-1">
                      <div>오관리</div>
                      <div>임회계</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Directions Section */}
        <section id="directions" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl text-[var(--color-opera-burgundy)] mb-6 border-b-2 border-[var(--color-opera-gold)] pb-2">
            오시는 길
          </h2>

          <div className="space-y-6">
            <div className="rounded-lg overflow-hidden h-[400px] border border-gray-200">
              <KakaoMap
                address="대전광역시 서구 둔산대로 169"
                className="h-[400px]"
                level={3}
              />
            </div>

            {/* Combined Address and Contact Information */}
            <div className="bg-[var(--color-opera-cream)] border-2 border-[var(--color-opera-gold)] rounded-lg p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl text-[var(--color-opera-burgundy)] mb-4">
                    주소
                  </h3>
                  <p className="text-gray-700 mb-2">
                    대전광역시 서구 둔산대로 169
                  </p>
                  <p className="text-gray-700">
                    대전예술의전당 내 대전오페라단
                  </p>
                </div>

                <div>
                  <h3 className="text-xl text-[var(--color-opera-burgundy)] mb-4">
                    연락처
                  </h3>
                  <p className="text-gray-700 mb-2">
                    전화: 042-270-8000
                  </p>
                  <p className="text-gray-700">
                    팩스: 042-270-8009
                  </p>
                </div>
              </div>
            </div>

            {/* Transportation */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl text-[var(--color-opera-burgundy)] mb-4">
                대중교통
              </h3>
              <div className="space-y-3 text-gray-700">
                <div>
                  <span className="inline-block bg-blue-500 text-white px-2 py-1 rounded text-sm mr-2">
                    지하철
                  </span>
                  <span>1호선 시청역 4번 출구 (도보 10분)</span>
                </div>
                <div>
                  <span className="inline-block bg-green-500 text-white px-2 py-1 rounded text-sm mr-2">
                    버스
                  </span>
                  <span>102, 106, 311, 316, 606번 - 예술의전당 하차</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}