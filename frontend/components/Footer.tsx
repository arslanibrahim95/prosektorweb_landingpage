import React, { useEffect, useRef } from 'react';
import { LegalModalType } from './GlobalLegalModals';
import { DASHBOARD_URL, PHONE_NUMBER, PHONE_LINK, INSTAGRAM_LINK } from '../constants';
import { openExternalByDevice } from '../utils/navigation';

interface FooterProps {
  onContactClick: () => void;
  onOpenLegalModal: (modal: LegalModalType) => void;
}

const Footer: React.FC<FooterProps> = ({ onContactClick, onOpenLegalModal }) => {
  const particleContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = particleContainerRef.current;
    if (!container) return;

    container.innerHTML = '';
    const particleCount = 30;
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < particleCount; i++) {
      const span = document.createElement('span');
      span.classList.add('gooey-particle');

      const size = 3 + Math.random() * 6;
      const distance = 10 + Math.random() * 15;
      const position = Math.random() * 100;
      const time = 3 + Math.random() * 3;
      const delay = -1 * (Math.random() * 10);

      span.style.setProperty('--dim', `${size}rem`);
      span.style.setProperty('--uplift', `${distance}rem`);
      span.style.setProperty('--pos-x', `${position}%`);
      span.style.setProperty('--dur', `${time}s`);
      span.style.setProperty('--delay', `${delay}s`);

      fragment.appendChild(span);
    }

    container.appendChild(fragment);
  }, []);

  const handleScroll = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDashboardClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    openExternalByDevice(DASHBOARD_URL);
  };

  return (
    <>
      {/* SVG Filter for Gooey Effect */}
      <svg style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }} version="1.1" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="liquid-effect">
            <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="liquid"
            />
          </filter>
        </defs>
      </svg>

      <style>{`
        .gooey-footer-section {
          --footer-color: #f97316;
          --text-color: #1a1a1a;
          position: relative;
          background: var(--footer-color);
          min-height: 280px;
          padding-bottom: 2rem;
          margin-top: 8rem;
          width: 100%;
          font-family: 'Inter', sans-serif;
          overflow-x: clip;
        }

        .gooey-animations {
          position: absolute;
          top: 0;
          width: 120%;
          left: -10%;
          height: 6rem;
          background: var(--footer-color);
          transform: translateY(-99%);
          z-index: 0;
          filter: url('#liquid-effect');
          overflow: visible;
          pointer-events: none;
        }

        .gooey-particle {
          position: absolute;
          background: var(--footer-color);
          border-radius: 50%;
          top: 50%;
          left: var(--pos-x, 50%);
          width: var(--dim, 5rem);
          height: var(--dim, 5rem);
          transform: translate(-50%, -50%);
          animation: float-up var(--dur, 4s) ease-in infinite;
          animation-delay: var(--delay, 0s);
          will-change: transform, opacity;
        }

        @keyframes float-up {
          0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, calc(-50% - var(--uplift, 10rem))) scale(0);
            opacity: 0;
          }
        }

        .gooey-footer-section a.footer-link {
          color: var(--text-color);
          opacity: 0.8;
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 400;
          transition: opacity 0.3s, transform 0.3s;
          display: block;
        }

        .gooey-footer-section a.footer-link:hover {
          opacity: 1;
          transform: translateY(-3px);
        }

        .gooey-footer-section h3 {
          color: var(--text-color);
          margin: 0 0 1rem 0;
          font-size: 0.9rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.5px;
        }

        @media (max-width: 768px) {
          .gooey-footer-content { text-align: center; }
          .gooey-animations { display: none; }
        }
      `}</style>

      <footer className="gooey-footer-section">
        {/* Gooey Animation Layer */}
        <div className="gooey-animations" ref={particleContainerRef}></div>

        {/* Footer Content */}
        <div className="gooey-footer-content relative z-10 max-w-6xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-6 gap-8">

          {/* Brand & Payment */}
          <div className="col-span-2 md:col-span-2 space-y-4">
            <div className="text-xl font-black" style={{ color: 'var(--text-color)' }}>
              Prosektor<span className="text-white">web</span>
            </div>
            <p className="text-sm opacity-85" style={{ color: 'var(--text-color)' }}>
              OSGB'lere özel dijital kimlik çözümleri. En kısa sürede hazır, önce gör sonra öde modeliyle güvenli web sitesi sahibi olun.
            </p>
            {/* Payment Logos */}
            <div className="flex items-center gap-2 pt-2">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" width={50} height={20} className="h-5 opacity-85 hover:opacity-100 transition-opacity" loading="lazy" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" width={32} height={20} className="h-5 opacity-85 hover:opacity-100 transition-opacity" loading="lazy" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Troy_logo.png/800px-Troy_logo.png" alt="Troy" width={40} height={20} className="h-5 opacity-85 hover:opacity-100 transition-opacity" loading="lazy" />
            </div>
            {/* SSL Badge */}
            <div className="flex items-center gap-1.5 text-[10px] font-bold bg-black/10 px-2.5 py-1 rounded-full w-fit" style={{ color: 'var(--text-color)' }}>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              256 BIT SSL
            </div>
          </div>

          {/* Hızlı Erişim */}
          <div className="space-y-3">
            <h3>Hızlı Erişim</h3>
            <a href="#features" onClick={(e) => handleScroll(e, 'features')} className="footer-link">Özellikler</a>
            <a href="#testimonials" onClick={(e) => handleScroll(e, 'testimonials')} className="footer-link">Referanslar</a>
            <a href="#process" onClick={(e) => handleScroll(e, 'process')} className="footer-link">Süreç</a>
            <a href="#pricing" onClick={(e) => handleScroll(e, 'pricing')} className="footer-link">Fiyat</a>
            <a href="#faq" onClick={(e) => handleScroll(e, 'faq')} className="footer-link">S.S.S.</a>
            <a href={DASHBOARD_URL} onClick={handleDashboardClick} className="footer-link">Dashboard</a>
          </div>

          {/* Hizmetler */}
          <div className="space-y-3">
            <h3>Hizmetler</h3>
            <a href="#features" onClick={(e) => handleScroll(e, 'features')} className="footer-link">OSGB Web Sitesi</a>
            <a href="#features" onClick={(e) => handleScroll(e, 'features')} className="footer-link">SEO Optimizasyonu</a>
            <a href="#features" onClick={(e) => handleScroll(e, 'features')} className="footer-link">Mobil Uyumluluk</a>
            <a href="#features" onClick={(e) => handleScroll(e, 'features')} className="footer-link">Alan Adı Tescili</a>
            <a href="#features" onClick={(e) => handleScroll(e, 'features')} className="footer-link">Hosting & Bakım</a>
          </div>

          {/* Yasal */}
          <div className="space-y-3">
            <h3>Yasal</h3>
            <a href="#" onClick={(e) => { e.preventDefault(); onOpenLegalModal('TERMS'); }} className="footer-link">Kullanım Koşulları</a>
            <a href="#" onClick={(e) => { e.preventDefault(); onOpenLegalModal('PRIVACY'); }} className="footer-link">Gizlilik Politikası</a>
            <a href="#" onClick={(e) => { e.preventDefault(); onOpenLegalModal('COOKIES'); }} className="footer-link">Çerez Politikası</a>
            <a href="#" onClick={(e) => { e.preventDefault(); onOpenLegalModal('SALES'); }} className="footer-link">Mesafeli Satış</a>
          </div>

          {/* İletişim */}
          <div className="space-y-3">
            <h3>İletişim</h3>
            <a href={PHONE_LINK} className="footer-link flex items-center gap-2">
              <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {PHONE_NUMBER}
            </a>
            <a href="mailto:hello@prosektorweb.com" className="footer-link flex items-center gap-2">
              <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              hello@prosektorweb.com
            </a>
            <a href="#" onClick={(e) => { e.preventDefault(); onContactClick(); }} className="footer-link flex items-center gap-2">
              <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              İletişim Formu
            </a>
            <div className="flex items-center gap-2 text-sm opacity-80 pt-2" style={{ color: 'var(--text-color)' }}>
              <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              İstanbul, Türkiye
            </div>
          </div>

          {/* Sosyal */}
          <div className="space-y-3">
            <h3>Bizi Takip Edin</h3>
            <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="footer-link flex items-center gap-2">
              <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Instagram
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="relative z-10 text-center text-sm opacity-85 pt-4 border-t border-black/10 mt-4 mx-6" style={{ color: 'var(--text-color)' }}>
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6">
            <span>© 2026 Prosektorweb. Tüm hakları saklıdır.</span>
            <span className="hidden md:inline">•</span>
            <span>OSGB Web Sitesi Tasarımı</span>
            <span className="hidden md:inline">•</span>
            <span>İstanbul, Türkiye</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default React.memo(Footer);
