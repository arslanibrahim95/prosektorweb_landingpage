import React, { useEffect, useRef } from 'react';
import { LegalModalType } from './GlobalLegalModals';
import { WHATSAPP_LINK } from '../constants';

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
        }

        @keyframes float-up {
          0% {
            top: 50%;
            transform: translate(-50%, -50%) scale(1);
          }
          100% {
            top: calc(var(--uplift) * -1);
            transform: translate(-50%, -50%) scale(0);
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
          font-weight: 600;
        }

        .gooey-footer-section h4 {
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
        <div className="gooey-footer-content relative z-10 max-w-6xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-5 gap-8">

          {/* Brand & Payment */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <div className="text-xl font-black" style={{ color: 'var(--text-color)' }}>
              Prosektor<span className="text-white">web</span>
            </div>
            <p className="text-sm opacity-70" style={{ color: 'var(--text-color)' }}>
              OSGB'lere özel dijital kimlik çözümleri
            </p>
            {/* Payment Logos */}
            <div className="flex items-center gap-2 pt-2">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" width={50} height={20} className="h-5 opacity-70 hover:opacity-100 transition-opacity" loading="lazy" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" width={32} height={20} className="h-5 opacity-70 hover:opacity-100 transition-opacity" loading="lazy" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Troy_logo.png/800px-Troy_logo.png" alt="Troy" width={40} height={20} className="h-5 opacity-70 hover:opacity-100 transition-opacity" loading="lazy" />
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
            <h4>Hızlı Erişim</h4>
            <a href="#features" onClick={(e) => handleScroll(e, 'features')} className="footer-link">Özellikler</a>
            <a href="#process" onClick={(e) => handleScroll(e, 'process')} className="footer-link">Süreç</a>
            <a href="#pricing" onClick={(e) => handleScroll(e, 'pricing')} className="footer-link">Fiyat</a>
            <a href="#faq" onClick={(e) => handleScroll(e, 'faq')} className="footer-link">S.S.S.</a>
          </div>

          {/* Yasal */}
          <div className="space-y-3">
            <h4>Yasal</h4>
            <a href="#" onClick={(e) => { e.preventDefault(); onOpenLegalModal('TERMS'); }} className="footer-link">Kullanım Koşulları</a>
            <a href="#" onClick={(e) => { e.preventDefault(); onOpenLegalModal('PRIVACY'); }} className="footer-link">Gizlilik Politikası</a>
            <a href="#" onClick={(e) => { e.preventDefault(); onOpenLegalModal('COOKIES'); }} className="footer-link">Çerez Politikası</a>
            <a href="#" onClick={(e) => { e.preventDefault(); onOpenLegalModal('SALES'); }} className="footer-link">Mesafeli Satış</a>
          </div>

          {/* İletişim */}
          <div className="space-y-3">
            <h4>İletişim</h4>
            <a href="tel:+905517038599" className="footer-link flex items-center gap-2">
              <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +90 551 703 85 99
            </a>
            <a href="mailto:hello@prosektorweb.com" className="footer-link flex items-center gap-2">
              <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              hello@prosektorweb.com
            </a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="footer-link flex items-center gap-2">
              <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.352 0-4.55-.637-6.44-1.748l-.452-.268-3.218 1.079 1.079-3.218-.268-.452A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              WhatsApp
            </a>
            <a href="#" onClick={(e) => { e.preventDefault(); onContactClick(); }} className="footer-link flex items-center gap-2">
              <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              İletişim Formu
            </a>
            <div className="flex items-center gap-2 text-sm opacity-60 pt-2" style={{ color: 'var(--text-color)' }}>
              <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              İstanbul, Türkiye
            </div>
          </div>

          {/* Sosyal - sadece aktif profiller eklenir */}
          <div className="space-y-3">
            <h4>Bizi Takip Edin</h4>
            <p className="text-sm opacity-60" style={{ color: 'var(--text-color)' }}>
              Sosyal medya hesaplarımız yakında aktif olacaktır.
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="relative z-10 text-center text-sm opacity-70 pt-4 border-t border-black/10 mt-4 mx-6" style={{ color: 'var(--text-color)' }}>
          © 2026 Prosektorweb. Tüm hakları saklıdır.
        </div>
      </footer>
    </>
  );
};

export default Footer;
