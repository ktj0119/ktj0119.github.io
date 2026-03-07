import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

interface HeaderProps {
  onNavigate: (page: 'home' | 'about' | 'concerts' | 'board' | 'sponsorship' | 'inquiry') => void;
}

export function Header({ onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<
    string | null
  >(null);

  const menuItems = [
    {
      label: "대전오페라단소개",
      onClick: () => {
        onNavigate('about');
        setIsMenuOpen(false);
      },
    },
    {
      label: "발자취",
      onClick: () => {
        onNavigate('concerts');
        setIsMenuOpen(false);
      },
    },
    {
      label: "게시판",
      onClick: () => {
        onNavigate('board');
        setIsMenuOpen(false);
      },
    },
    {
      label: "고객지원",
      submenu: [
        { 
          label: "1:1 문의",
          onClick: () => {
            onNavigate('inquiry');
            setIsMenuOpen(false);
          }
        },
        { 
          label: "후원안내",
          onClick: () => {
            onNavigate('sponsorship');
            setIsMenuOpen(false);
          }
        },
      ],
    },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <button 
              onClick={() => onNavigate('home')}
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
            >
              <img
                src="/images/logo.png"
                alt="대전오페라단 로고"
                className="w-[200px] h-auto object-contain"
              />            </button>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex space-x-8">
            {menuItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() =>
                  item.submenu && setActiveDropdown(item.label)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button 
                  onClick={() => item.onClick?.()}
                  className="flex items-center space-x-1 text-gray-800 hover:text-[var(--color-opera-burgundy)] transition-colors py-2"
                >
                  <span className="font-normal">
                    {item.label}
                  </span>
                  {item.submenu && (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>

                {/* Dropdown */}
                {item.submenu &&
                  activeDropdown === item.label && (
                    <div className="absolute top-full right-x-3/2 -translate-x-1/2 bg-white shadow-lg rounded-md py-3 w-[150px] border border-gray-100 z-50">
                      {item.submenu.map((subitem) => (
                        <a
                          key={subitem.label}
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-[var(--color-opera-cream)] hover:text-[var(--color-opera-burgundy)] transition-colors text-center"
                          onClick={(e) => {
                            e.preventDefault();
                            subitem.onClick();
                          }}
                        >
                          {subitem.label}
                        </a>
                      ))}
                    </div>
                  )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4">
            {menuItems.map((item) => (
              <div
                key={item.label}
                className="border-t border-gray-200 py-2"
              >
                <button
                  className="flex items-center justify-between w-full px-2 py-2 text-gray-800"
                  onClick={() => {
                    if (item.onClick) {
                      item.onClick();
                    } else if (item.submenu) {
                      setActiveDropdown(
                        activeDropdown === item.label
                          ? null
                          : item.label,
                      );
                    }
                  }}
                >
                  <span>{item.label}</span>
                  {item.submenu && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${activeDropdown === item.label ? "rotate-180" : ""}`}
                    />
                  )}
                </button>
                {item.submenu &&
                  activeDropdown === item.label && (
                    <div className="pl-4 mt-2 space-y-2">
                      {item.submenu.map((subitem) => (
                        <a
                          key={subitem.label}
                          href="#"
                          className="block py-1 text-sm text-gray-600 hover:text-[var(--color-opera-burgundy)]"
                          onClick={(e) => {
                            e.preventDefault();
                            subitem.onClick();
                          }}
                        >
                          {subitem.label}
                        </a>
                      ))}
                    </div>
                  )}
              </div>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}