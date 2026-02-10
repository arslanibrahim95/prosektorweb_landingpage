
import React from 'react';

interface HeroProps {
  onCheckCode: () => void;
  isSessionActive: boolean;
  companyName?: string;
}

const Hero: React.FC<HeroProps> = ({ onCheckCode, isSessionActive, companyName }) => {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[500px] h-[500px] bg-orange-600/15 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[500px] h-[500px] bg-pink-600/15 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-600/5 rounded-full blur-[100px]"></div>

        {/* Floating Particles */}
        <div className="particle" style={{ top: '20%', left: '10%', animationDelay: '0s' }}></div>
        <div className="particle" style={{ top: '60%', left: '20%', animationDelay: '1s' }}></div>
        <div className="particle" style={{ top: '30%', left: '80%', animationDelay: '0.5s' }}></div>
        <div className="particle" style={{ top: '70%', left: '70%', animationDelay: '1.5s' }}></div>
        <div className="particle" style={{ top: '40%', left: '50%', animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center md:text-left flex flex-col md:flex-row items-center gap-12">
        {/* Content */}
        <div className="md:w-3/5 space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-xs font-bold tracking-widest text-orange-400 uppercase fade-in-up">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
            OSGB Sektörüne Özel Çözümler
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-montserrat font-black leading-tight fade-in-up stagger-1">
            {isSessionActive ? (
              <>Merhaba, <br /><span className="shimmer-text">{companyName}</span> için bir web sitesi hazırladık.</>
            ) : (
              <>Önce <span className="shimmer-text">Gör</span>,<br /> Sonra Satın Al.</>
            )}
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed fade-in-up stagger-2">
            Sürprizlere yer yok. Önce ödeme yapıp sonuç beklediğiniz geleneksel ajans modelini yıktık. OSGB'nize özel, bizzat inceleyebileceğiniz hazır web sitenizi 48 saatte hazırlıyoruz.
          </p>

          {/* CTA Section */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 justify-center md:justify-start fade-in-up stagger-3">
            <button
              onClick={onCheckCode}
              className="group relative w-full sm:w-auto px-10 py-5 bg-white text-black font-extrabold rounded-2xl hover:scale-105 transition-all duration-300 btn-shine overflow-hidden shadow-xl shadow-white/10"
            >
              <span className="flex items-center justify-center gap-2 relative z-10">
                {isSessionActive ? 'Önizlemeye Dön' : 'Web Sitemi İncele'}
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
            <div className="text-sm text-gray-500 font-medium">
              7 Gün Geçerli • <span className="text-white font-bold">7.000 TL+KDV</span> Tek Fiyat
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 pt-8 fade-in-up stagger-4">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <div className="w-8 h-8 rounded-lg icon-container flex items-center justify-center">
                <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span>Hızlı Teslimat</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <div className="w-8 h-8 rounded-lg icon-container flex items-center justify-center">
                <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <span>Mobil Uyumlu</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <div className="w-8 h-8 rounded-lg icon-container flex items-center justify-center">
                <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <span>SEO Odaklı</span>
            </div>
          </div>
        </div>

        {/* Hero Visual Mockup */}
        <div className="md:w-2/5 w-full max-w-sm md:max-w-none relative fade-in-up stagger-5">
          <div className="relative float-animation">
            {/* Glow behind image */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-pink-500/20 rounded-3xl blur-2xl scale-105"></div>

            {/* Mockup Image */}
            <img
              src="/osgb-mockup.png"
              alt="OSGB Web Sitesi Örneği - Prosektorweb"
              width={640}
              height={640}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="relative w-full rounded-2xl shadow-2xl border border-white/10 hover:scale-[1.02] transition-transform duration-500"
            />

            {/* Floating status badge */}
            <div className="absolute -bottom-4 -left-4 glass p-3 rounded-xl shadow-xl" style={{ animation: 'float 3s ease-in-out infinite' }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-xl">🚀</div>
                <div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Durum</div>
                  <div className="text-sm font-bold text-white">Yayına Hazır</div>
                </div>
              </div>
            </div>

            {/* Additional floating element */}
            <div className="absolute -top-4 -right-4 glass p-2 rounded-lg shadow-xl" style={{ animation: 'float 4s ease-in-out infinite', animationDelay: '1s' }}>
              <div className="flex items-center gap-2 text-xs">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-gray-300 font-medium">48 Saatte Teslim</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
