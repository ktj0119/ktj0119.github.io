import {
  Facebook,
  Instagram,
  Youtube,
  Phone,
  MapPin,
  Mail,
  User,
} from "lucide-react";

interface FooterProps {
  onNavigate?: (page: any) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[var(--color-opera-dark)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* 기본 정보 */}
          <div className="md:col-span-2 lg:col-span-2">
            <h3 className="text-[var(--color-opera-gold)] mb-4 font-bold text-lg">
              Contact Info
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center">
                <span className="font-semibold mr-2 text-[var(--color-opera-gold)]">
                  사업자번호:
                </span>
                314-91-65424
              </li>
              <li className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0 text-[var(--color-opera-gold)]" />
                <span>
                  (35203) 대전광역시 서구 둔산대로117번길 102, 6층 602호(만년동, 아트벤처빌딩)
                </span>
              </li>

              <li className="flex items-center">
                <User className="w-4 h-4 mr-2 flex-shrink-0 text-[var(--color-opera-gold)]" />
                <span className="text-gray-300">
                  대표자 : 지은주
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2 flex-shrink-0 text-[var(--color-opera-gold)]" />
                <span className="text-gray-300">
                  대표전화 : 010-3419-9020
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2 flex-shrink-0 text-[var(--color-opera-gold)]" />
                <span className="text-gray-300">
                  E-mail : daejeonopera@gmail.com
                </span>
              </li>
            </ul>
          </div>

          {/* SNS 채널 */}
          <div>
            <h3 className="text-[var(--color-opera-gold)] mb-4 font-bold text-lg">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/daejeonopera/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-[var(--color-opera-burgundy)] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/daejeon_opera_/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-[var(--color-opera-burgundy)] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/channel/UClRSvoZe7_LD0MOqWgRI5XQ/featured"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-[var(--color-opera-burgundy)] transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-[6px] mr-[0px] mb-[0px] ml-[0px]">
              <ul className="space-y-2 text-sm mt-[21px] mr-[0px] mb-[0px] ml-[0px] text-[15px]">
                <li>
                  <a
                    href="#terms-of-use"
                    className="text-gray-300 hover:text-white transition-colors font-bold"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate?.('terms-of-use');
                    }}
                  >
                    이용약관
                  </a>
                </li>
                <li>
                  <a
                    href="#privacy-policy"
                    className="text-gray-300 hover:text-white transition-colors font-bold"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate?.('privacy-policy');
                    }}
                  >
                    개인정보처리방침
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 카피라이트 */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>
            copyright ⓒ 1988 Daejeon Oprea, All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}