import React, { useEffect, useRef } from 'react';
import { LegalModalType } from './GlobalLegalModals';

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
    const particleCount = 100;
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
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-5 opacity-70 hover:opacity-100 transition-opacity" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-5 opacity-70 hover:opacity-100 transition-opacity" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Troy_logo.png/800px-Troy_logo.png" alt="Troy" className="h-5 opacity-70 hover:opacity-100 transition-opacity" />
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
            <a href="mailto:hello@prosektorweb.com" className="footer-link">hello@prosektorweb.com</a>
            <a href="https://wa.me/905551234567" target="_blank" rel="noopener noreferrer" className="footer-link">WhatsApp</a>
            <a href="#" onClick={(e) => { e.preventDefault(); onContactClick(); }} className="footer-link">İletişim Formu</a>
          </div>

          {/* Sosyal */}
          <div className="space-y-3">
            <h4>Sosyal</h4>
            <div className="flex gap-3 flex-wrap justify-center md:justify-start">
              {/* X (Twitter) */}
              <a href="#" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-black/10 flex items-center justify-center hover:bg-black/20 transition-colors">
                <svg className="w-4 h-4" style={{ color: 'var(--text-color)' }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* Facebook */}
              <a href="#" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-black/10 flex items-center justify-center hover:bg-black/20 transition-colors">
                <svg className="w-4 h-4" style={{ color: 'var(--text-color)' }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-black/10 flex items-center justify-center hover:bg-black/20 transition-colors">
                <svg className="w-4 h-4" style={{ color: 'var(--text-color)' }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-black/10 flex items-center justify-center hover:bg-black/20 transition-colors">
                <svg className="w-4 h-4" style={{ color: 'var(--text-color)' }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
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
