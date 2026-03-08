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
                대전오페라단은 37년의 제작 경험을 바탕으로 국내 오페라 공연의 수준을 국제적인 수준으로 끌어올리기 위해 끊임없이 노력하고 있습니다. 이를 위해 전문 아티스트를 위한 무대 제공과 인재 발굴을 통해 수준 높은 공연 문화를 정착시키는데 힘쓰고 있으며, 권위 있는 제14회 대한민국 오페라축제에 초청된 유일한 민간 오페라단입니다.
              </p>
              <p>
                국제 문화교류의 중심단체로서 선도적 역할을 하고 있으며, 특히 몽골과의 문화예술 교류를 통해 국제문화교류의 중심단체로서의 역할을 더욱 강화하고 있습니다.
              </p>
              <p>
                대전 지역 소외계층에게 문화예술을 접할 수 있는 기회를 제공하기 위해 무료 또는 할인 입장권을 제공하고 있으며, 기업과 함께 각종 단체에 입장권 기부 등을 통한 사회공헌 활동을 전개하고 있습니다. 앞으로도 예술적 열정과 역량을 기반으로 일반관객과 클래식 음악 애호가들 뿐 아니라 국제적인 활동 무대까지 확장해 나가 대한민국을 대표하는 원천이 되고, 국제문화교류의 중심지로 더욱 발전해 나갈 것입니다.
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
                src="/images/intro_propile.png"
                alt="단장 지은주"
                className="w-32 h-32 object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="space-y-4 text-gray-700">
              <p className="italic">
                "대전오페라단을 찾아주신 여러분, 진심으로 환영합니다."
              </p>
              <p>
                대전오페라단은 오페라 예술의 아름다움을 더 많은 분들과 나누고자
                하는 열정으로 지난 37년간 걸어왔습니다.
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
                <span className="block mt-2">대전오페라단 단장 지은주</span>
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
                2025
              </h3>
              <ul className="space-y-1 text-gray-700">
                <li>• 대전오페라단과 함께하는 코레일 신년음악회</li>
                <li>• 제36회 정기공연 오페라 '나비부인'</li>
              </ul>
            </div>

            <div className="border-l-4 border-[var(--color-opera-gold)] pl-6 py-2">
              <h3 className="text-xl text-[var(--color-opera-burgundy)] mb-2">
                2024
              </h3>
              <ul className="space-y-1 text-gray-700">
                <li>• 대전오페라단과 함께하는 코레일 음악회</li>
                <li>• 공연예술창작신작 올해의 신작 창작오페라 '이상의 날개'</li>
              </ul>
            </div>

            <div className="border-l-4 border-[var(--color-opera-gold)] pl-6 py-2">
              <h3 className="text-xl text-[var(--color-opera-burgundy)] mb-2">
                2023
              </h3>
              <ul className="space-y-1 text-gray-700">
                <li>• 제35회 정기공연 오페라 '카발레리아 루스티카나&팔리아치'</li>
              </ul>
            </div>

            <div className="border-l-4 border-[var(--color-opera-gold)] pl-6 py-2">
              <h3 className="text-xl text-[var(--color-opera-burgundy)] mb-2">
                2022
              </h3>
              <ul className="space-y-1 text-gray-700">
                <li>• 렉쳐콘서트 오페라 '리골레또'</li>
                <li>• 제1회 대전오페라단 국제 성악 콩쿨 개최</li>
                <li>• 제34회 정기공연 오페라 '마술피리'</li>
                <li>• 창작오페라 '이상의날개' 쇼케이스</li>
              </ul>
            </div>
          </div>

          {/* <div className="flex justify-center mt-12">
            <button className="flex items-center gap-2 px-8 py-3 bg-[var(--color-opera-burgundy)] text-white rounded hover:bg-opacity-90 transition-colors">
              <FileText className="w-4 h-4" />
              <span>전체 연혁 보기</span>
            </button>
          </div> */}
        </section>

        {/* Organization Chart Section */}
        <section id="organization" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl text-[var(--color-opera-burgundy)] mb-6 border-b-2 border-[var(--color-opera-gold)] pb-2">
            조직도
          </h2>
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="space-y-8">
              {/* Top Level */}
              <div className="text-center mb-12">
                <div className="inline-block bg-[var(--color-opera-burgundy)] text-white px-8 py-4 rounded shadow-md">
                  <div className="mb-1 font-bold">단장</div>
                  <div className="text-sm">지은주</div>
                </div>
              </div>

              {/* Sub Teams - White background with black-ish text, in a single row */}
              <div className="flex flex-wrap lg:flex-nowrap justify-center gap-4">
                {[
                  { name: '고    문', leader: '최남인, 염홍철, 김낙관' },
                  { name: '사무국장', leader: '박미란' },
                  { name: '기    획', leader: '송상우' },
                  { name: '홍    보', leader: '고도현, 이서현' },
                  { name: '회    계', leader: '박영애' },
                ].map((team) => (
                  <div key={team.name} className="flex-shrink-0">
                    <div 
                      className="bg-white border border-gray-500 px-2 py-6 rounded shadow-sm text-center flex flex-col"
                      style={{ width: '160px', height: '160px', minWidth: '160px', minHeight: '160px' }}
                    >
                      <div className="mb-3 font-bold text-gray-100 border-b border-gray-100 pb-2 mx-2">{team.name}</div>
                      <div className="text-sm text-gray-600 space-y-1 px-2">
                        {team.leader.split(',').map((name, index) => (
                          <div key={index} className="leading-tight">{name.trim()}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
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
                address="대전광역시 서구 둔산대로117번길 102"
                className="h-[400px]"
                level={3}
              />
            </div>

            {/* Combined Address and Contact Information */}
            <div className="bg-[var(--color-opera-cream)] border-2 border-[var(--color-opera-gold)] rounded-lg p-6">
              <div className="grid md:grid-cols-1 gap-8">
                <div>
                  <h3 className="text-xl text-[var(--color-opera-burgundy)] mb-4">
                    주소
                  </h3>
                  <p className="text-gray-700 mb-2">
                    대전광역시 서구 둔산대로117번길 102
                  </p>
                  <p className="text-gray-700">
                    6층 602호 (만년동, 아트벤처빌딩)
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
                  <span>1호선 정부청사역 3번 출구 (도보 15분)</span>
                </div>
                <div>
                  <span className="inline-block bg-green-500 text-white px-2 py-1 rounded text-sm mr-2">
                    버스
                  </span>
                  <span>705, 911, 108, 116번 - 만년동 하차</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}