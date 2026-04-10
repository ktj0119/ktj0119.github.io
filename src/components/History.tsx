import { Calendar, ChevronLeft } from "lucide-react";
import { historyData } from "../data/historyData";

interface HistoryProps {
  onBack: () => void;
}

export function History({ onBack }: HistoryProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Header - Centered Content */}
      <div className="bg-[var(--color-opera-burgundy)] text-white py-16 md:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <button 
            onClick={onBack}
            className="absolute left-4 md:left-8 top-8 flex items-center gap-2 text-white/80 hover:text-white transition-colors group"
          >
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">돌아가기</span>
          </button>
          <div className="flex flex-col items-center justify-center gap-4 mb-6">
            <div className="bg-white/10 p-4 rounded-full mb-2">
              <Calendar className="w-8 h-8 md:w-10 md:h-10 text-[var(--color-opera-gold)]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">대전오페라단 연혁</h1>
          </div>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            37년의 제작 경험을 바탕으로 수준 높은 공연 문화를 선도하는<br className="hidden md:block" />
            대전오페라단의 발자취입니다.
          </p>
        </div>
      </div>

      {/* Main Content - EXACT About.tsx Style List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-6">
          {historyData.map((history, index) => (
            <div
              key={history.year}
              className={`border-l-4 pl-6 py-2 ${index % 2 === 0 ? 'border-[var(--color-opera-burgundy)]' : 'border-[var(--color-opera-gold)]'
                }`}
            >
              <h3 className="text-xl text-[var(--color-opera-burgundy)] mb-2">
                {history.year}
              </h3>
              <ul className="space-y-1 text-gray-700">
                {history.items.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="mr-1.5 flex-shrink-0">•</span>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
