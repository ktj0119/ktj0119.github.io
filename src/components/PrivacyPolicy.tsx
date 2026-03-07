import { ChevronLeft } from 'lucide-react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

export function PrivacyPolicy({ onBack }: PrivacyPolicyProps) {
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
            개인정보처리방침
          </h1>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              대전오페라단(이하 "대전오페라단")은 이용자의 개인정보를 중요하게 생각하며 관련 법령을 준수합니다.
<br></br><br></br>
              개인정보 수집 항목
<br></br>
              오페라단은 문의 접수 등을 위해 다음과 같은 개인정보를 수집할 수 있습니다.
<br></br>
              이름
<br></br>
              이메일
<br></br>
              문의 내용
<br></br>
              개인정보 수집 목적
<br></br><br></br>
              수집한 개인정보는 다음 목적을 위해 사용됩니다.
<br></br>
              문의사항 확인 및 답변
<br></br>
              서비스 개선 및 운영 관리
<br></br><br></br>
              개인정보 보유 및 이용 기간
<br></br>
              개인정보는 수집 목적이 달성된 후 지체 없이 파기합니다. 단, 문의 대응 기록 관리 등을 위해 최대 1년간 보관할 수 있습니다.
<br></br><br></br>
              개인정보 제3자 제공
<br></br>
              오페라단은 이용자의 개인정보를 외부에 제공하지 않습니다. 다만 법령에 의해 요구되는 경우에는 예외로 합니다.
<br></br><br></br>
              개인정보 처리 위탁
<br></br>
              오페라단은 서비스 운영을 위해 필요한 경우 개인정보 처리를 외부 업체에 위탁할 수 있으며, 이 경우 관련 내용을 별도로 안내합니다.
<br></br><br></br>
              이용자의 권리
<br></br>
              이용자는 언제든지 자신의 개인정보에 대해 열람, 정정, 삭제를 요청할 수 있습니다.
<br></br><br></br>
              개인정보 보호책임자
<br></br>
              개인정보 관련 문의는 아래 담당자에게 연락하시기 바랍니다.
<br></br><br></br>
              개인정보 보호책임자
<br></br>
              이름: 김태준
<br></br>
              이메일: kimtaejun19@naver.com
<br></br><br></br>
              정책 변경
<br></br>
              본 개인정보처리방침은 관련 법령이나 서비스 변경에 따라 수정될 수 있으며, 변경 시 사이트를 통해 공지합니다.
<br></br><br></br>
              부칙
<br></br>
              본 방침은 2025년 3월 8일부터 시행합니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
