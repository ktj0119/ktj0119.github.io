import { X, Calendar } from 'lucide-react';
import { useEffect } from 'react';
import { historyData } from '../data/historyData';

interface HistoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function HistoryModal({ isOpen, onClose }: HistoryModalProps) {
  useEffect(() => {
    if (isOpen) {
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      // Restore body scroll when modal is closed
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to ensure scroll is restored if component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 md:p-8">
      <div className="bg-white w-full max-w-4xl max-h-[85vh] min-h-0 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-[var(--color-opera-burgundy)] px-6 py-4 flex items-center justify-between sticky top-0 z-10 shadow-sm">
          <div className="flex items-center gap-2 text-white">
            <Calendar className="w-6 h-6" />
            <h2 className="text-xl font-bold">대전오페라단 전체 연혁</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar bg-white">
          <style>{`
            @keyframes slideInLeft {
              from { opacity: 0; transform: translateX(-30px); }
              to { opacity: 1; transform: translateX(0); }
            }
            @keyframes slideInRight {
              from { opacity: 0; transform: translateX(30px); }
              to { opacity: 1; transform: translateX(0); }
            }
            .animate-slide-left {
              animation: slideInLeft 0.6s ease-out forwards;
            }
            .animate-slide-right {
              animation: slideInRight 0.6s ease-out forwards;
            }
            .custom-scrollbar::-webkit-scrollbar {
              width: 8px;
            }
            .custom-scrollbar::-webkit-scrollbar-track {
              background: #f1f1f1;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb {
              background: var(--color-opera-gold);
              border-radius: 4px;
            }
          `}</style>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {historyData.map((history, index) => (
              <div 
                key={history.year} 
                style={{ 
                  animationDelay: `${Math.floor(index / 2) * 0.15}s`,
                  opacity: 0 
                }}
                className={`border-l-4 pl-6 py-2 transition-all hover:translate-x-1 ${
                  index % 2 === 0 
                    ? 'border-[var(--color-opera-burgundy)] animate-slide-left' 
                    : 'border-[var(--color-opera-gold)] animate-slide-right'
                }`}
              >
                <h3 className="text-2xl font-bold text-[var(--color-opera-burgundy)] mb-3">
                  {history.year}
                </h3>
                <ul className="space-y-2">
                  {history.items.map((item, idx) => (
                    <li key={idx} className="text-gray-700 leading-relaxed flex items-start">
                      <span className="mr-2 text-[var(--color-opera-gold)]">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-8 py-4 border-t border-gray-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-[var(--color-opera-burgundy)] text-white rounded-lg hover:bg-opacity-90 transition-all font-medium"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}
