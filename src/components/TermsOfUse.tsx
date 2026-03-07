import { ChevronLeft } from 'lucide-react';

interface TermsOfUseProps {
  onBack: () => void;
}

export function TermsOfUse({ onBack }: TermsOfUseProps) {
  return (
    <div className="min-h-screen bg-[var(--color-opera-cream)] py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={onBack}
          className="flex items-center text-[var(--color-opera-burgundy)] hover:text-[var(--color-opera-dark)] transition-colors mb-8"
        >
          <ChevronLeft className="w-5 h-5 mr-1" />
          <span>이전으로</span>
        </button>

        <div className="bg-white rounded-lg shadow-md p-8 sm:p-12">
          <h1 className="text-3xl font-bold text-[var(--color-opera-burgundy)] mb-8 border-b pb-4">
            이용약관
          </h1>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              제1조 (목적)<br></br><br></br>
              본 약관은 대전오페라단(이하 "대전오페라단")이 운영하는 홈페이지(이하 "사이트")의 이용과 관련하여 사이트와 이용자 간의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
              <br></br><br></br>
              제2조 (서비스의 내용)<br></br>
<br></br>
              대전오페라단은 사이트를 통해 다음과 같은 정보를 제공합니다.
              <br></br><br></br>
              대전오페라단 소개
              <br></br><br></br>
              공연 및 행사 안내
              <br></br><br></br>
              공지사항 및 소식
              <br></br><br></br>
              문의 접수 및 답변
              <br></br><br></br>
              기타 대전오페라단이 제공하는 정보 서비스
              <br></br><br></br>
              제3조 (서비스의 변경 및 중단)
              <br></br>
<br></br>
              대전오페라단은 운영상 또는 기술상의 필요에 따라 서비스 내용을 변경할 수 있습니다.
              시스템 점검, 서버 장애, 기타 불가피한 사유가 발생할 경우 서비스 제공이 일시적으로 중단될 수 있습니다.
              <br></br><br></br>
              제4조 (이용자의 의무)<br></br>
<br></br>
              이용자는 다음 행위를 하여서는 안 됩니다.
              <br></br><br></br>
              타인의 개인정보를 도용하는 행위
              <br></br><br></br>
              사이트에 게시된 정보를 무단으로 변경하거나 훼손하는 행위
              <br></br><br></br>
              오페라단 또는 제3자의 저작권 등 권리를 침해하는 행위
              <br></br><br></br>
              공공질서 및 미풍양속에 반하는 행위
              <br></br><br></br>
              기타 관련 법령에 위반되는 행위
              <br></br><br></br>
              제5조 (저작권)
              <br></br>
<br></br>
              사이트에 게시된 모든 콘텐츠(텍스트, 이미지, 영상 등)의 저작권은 대전오페라단 또는 정당한 권리자에게 있습니다.
              <br></br>
              이용자는 대전오페라단의 사전 동의 없이 사이트의 콘텐츠를 복제, 배포, 전송, 전시 등의 방법으로 사용할 수 없습니다.
              <br></br><br></br>
              제6조 (면책조항)
              <br></br>
<br></br>
              대전오페라단은 사이트에 제공되는 정보의 정확성을 위해 노력하지만, 정보의 변경이나 오류로 인한 손해에 대해 책임을 지지 않습니다.
              이용자가 사이트를 이용하면서 발생하는 결과에 대한 책임은 이용자 본인에게 있습니다.
              <br></br><br></br>
              제7조 (준거법 및 관할)<br></br>
<br></br>
              본 약관은 대한민국 법령에 따라 해석되며, 사이트 이용과 관련하여 발생하는 분쟁은 오페라단 소재지를 관할하는 법원을 관할 법원으로 합니다.
              <br></br><br></br>
              부칙<br></br>
<br></br>
              본 약관은 2026년 3월 8일부터 시행합니다.<br></br>
            </p>
            {/* 내용을 추가하려면 여기에 작성하세요 */}
          </div>
        </div>
      </div>
    </div>
  );
}
