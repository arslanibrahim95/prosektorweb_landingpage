
import React, { useState, useEffect } from 'react';
import { DASHBOARD_URL } from '../constants';
import { openExternalByDevice } from '../utils/navigation';

interface NavbarProps {
  onLoginClick: () => void;
  isSessionActive: boolean;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onLoginClick, isSessionActive, onLogout }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detect active section
      const sections = ['features', 'process', 'pricing', 'faq', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Neden Biz?', href: '#features', id: 'features' },
    { name: 'Nasıl Çalışırız?', href: '#process', id: 'process' },
    { name: 'Fiyatlandırma', href: '#pricing', id: 'pricing' },
    { name: 'SSS', href: '#faq', id: 'faq' },
    { name: 'İletişim', href: '#contact', id: 'contact' },
  ];

  const handleDashboardClick = () => {
    openExternalByDevice(DASHBOARD_URL);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-30 transition-all duration-300 safe-top ${isScrolled
        ? 'bg-[#121218]/98 backdrop-blur-xl shadow-lg shadow-black/20 border-b border-white/10'
        : 'bg-[#121218]/80 backdrop-blur-md border-b border-white/5'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <span className="text-2xl font-montserrat font-black shimmer-text tracking-tight">PSW</span>
            <div className="hidden sm:flex items-center">
              <div className="w-px h-6 bg-gradient-to-b from-transparent via-gray-600 to-transparent mx-3"></div>
              <span className="text-xs text-gray-300 font-semibold uppercase tracking-widest group-hover:text-gray-300 transition-colors">
                Prosektorweb
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${activeSection === link.id
                    ? 'text-white'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
              >
                {link.name}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-orange-500 rounded-full"></span>
                )}
              </a>
            ))}

            <button
              onClick={handleDashboardClick}
              className="px-4 py-2 text-sm font-semibold text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300"
            >
              Dashboard
            </button>

            <div className="w-px h-6 bg-gray-800 mx-4"></div>

            {isSessionActive ? (
              <button
                onClick={onLogout}
                className="text-xs font-bold text-red-400 hover:text-red-300 border border-red-900/30 px-4 py-2 rounded-full transition-all hover:bg-red-950/30"
              >
                Çıkış Yap
              </button>
            ) : (
              <button
                onClick={onLoginClick}
                className="relative gradient-btn px-6 py-2.5 rounded-full font-bold text-sm shadow-lg shadow-orange-900/30 btn-shine overflow-hidden glow-btn"
              >
                <span className="relative z-10">Web Sitemi Gör</span>
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg hover:bg-white/5 transition-colors"
              aria-label={isMobileMenuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
              aria-expanded={isMobileMenuOpen}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
        <div className="bg-[#1a1a1f]/95 backdrop-blur-xl border-b border-white/5 py-4 px-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block text-base font-medium py-2 px-4 rounded-lg transition-colors ${activeSection === link.id
                  ? 'text-white bg-white/5'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => { handleDashboardClick(); setIsMobileMenuOpen(false); }}
            className="w-full text-left text-base font-medium py-2 px-4 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
          >
            Dashboard
          </button>
          <button
            onClick={() => { onLoginClick(); setIsMobileMenuOpen(false); }}
            className="w-full gradient-btn px-6 py-3 rounded-xl font-bold text-sm mt-4"
          >
            {isSessionActive ? 'Önizleme Aktif' : 'Web Sitemi Gör'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
