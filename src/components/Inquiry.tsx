import { useState } from 'react';
import { Mail, User, MessageSquare, Send, CheckCircle } from 'lucide-react';

export function Inquiry() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Here you would normally send the form data to a backend
    // For now, we'll just show a success message
    console.log('Form submitted:', formData);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-[var(--color-opera-cream)]">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[var(--color-opera-burgundy)] to-[var(--color-opera-dark)] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Mail className="w-16 h-16 mx-auto mb-6 text-[var(--color-opera-gold)]" />
          <h1 className="text-5xl mb-6 text-white">1:1 문의</h1>
          <p className="text-xl text-white/90">
            대전오페라단에 궁금하신 사항을 문의해 주세요.<br />
            친절하고 신속하게 답변 드리겠습니다.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introductory Text */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-center text-[var(--color-opera-burgundy)] mb-4">
              문의하기
            </h2>
            <p className="text-gray-600 text-center mb-2">
              공연 관람, 티켓 예매, 단체 관람, 후원 등 대전오페라단과 관련된 모든 문의사항을 남겨주세요.
            </p>
            <p className="text-gray-600 text-center">
              영업일 기준 <strong className="text-[var(--color-opera-burgundy)]">1~2일 이내</strong>에 이메일로 답변해 드립니다.
            </p>
          </div>

          {/* Inquiry Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 mx-auto mb-4 text-green-600" />
                <h3 className="mb-4 text-green-600">문의가 성공적으로 접수되었습니다!</h3>
                <p className="text-gray-600">
                  빠른 시일 내에 답변 드리겠습니다.<br />
                  감사합니다.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="flex items-center gap-2 mb-2 text-gray-700">
                    <User className="w-5 h-5 text-[var(--color-opera-burgundy)]" />
                    <span>이름 <span className="text-red-500">*</span></span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-opera-burgundy)] focus:border-transparent transition-all"
                    placeholder="성함을 입력해주세요"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="flex items-center gap-2 mb-2 text-gray-700">
                    <Mail className="w-5 h-5 text-[var(--color-opera-burgundy)]" />
                    <span>이메일 <span className="text-red-500">*</span></span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-opera-burgundy)] focus:border-transparent transition-all"
                    placeholder="답변 받으실 이메일 주소를 입력해주세요"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="flex items-center gap-2 mb-2 text-gray-700">
                    <MessageSquare className="w-5 h-5 text-[var(--color-opera-burgundy)]" />
                    <span>문의 내용 <span className="text-red-500">*</span></span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={8}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-opera-burgundy)] focus:border-transparent transition-all resize-none"
                    placeholder="문의하실 내용을 상세히 입력해주세요"
                  />
                </div>

                {/* Submit Button */}
                <div className="text-center pt-4">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-[var(--color-opera-burgundy)] text-white px-12 py-4 rounded-lg hover:bg-[var(--color-opera-dark)] transition-colors shadow-md hover:shadow-lg"
                  >
                    <Send className="w-5 h-5" />
                    <span>문의하기</span>
                  </button>
                </div>

                {/* Privacy Notice */}
                <div className="mt-6 p-4 bg-[var(--color-opera-cream)] rounded-lg">
                  <p className="text-sm text-gray-600 text-center">
                    수집된 개인정보는 문의 응대 목적으로만 사용되며, 답변 완료 후 즉시 파기됩니다.
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="mt-8 bg-white rounded-lg shadow-md p-6 text-center">
            <h3 className="mb-4 text-[var(--color-opera-burgundy)]">상세 문의</h3>
            <div className="space-y-2 text-gray-700">
              <p>
                <strong>전화:</strong> 010-6353-9008 (평일 09:00 - 18:00)
              </p>
              <p>
                <strong>이메일:</strong> daejeonopera@gmail.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}