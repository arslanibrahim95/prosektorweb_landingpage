
import React from 'react';

interface PricingProps {
  onPreviewClick: () => void;
}

const Pricing: React.FC<PricingProps> = ({ onPreviewClick }) => {
  const features = [
    "Profesyonel OSGB Web Sitesi",
    "OSGB Süreç Yönetim Paneli",
    "SEO ve Performans Optimizasyonu",
    "Mobil Uyumlu Mimari",
    "Hızlı Teslimat Garantisi"
  ];

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0A0A0A]"></div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-orange-500/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-montserrat font-black mb-4">
            <span className="shimmer-text">Fiyatlandırma</span>
          </h2>
          <p className="text-gray-400">Mühendislik Gücü, Erişilebilir Fiyat</p>
        </div>

        {/* Pricing Card */}
        <div className="relative">
          {/* Glow behind card */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-pink-500/20 to-orange-500/20 rounded-[3rem] blur-3xl scale-105"></div>

          {/* Card wrapper with gradient border */}
          <div className="relative p-[2px] rounded-[2.5rem] bg-gradient-to-br from-orange-500 via-pink-500 to-orange-500 shadow-2xl shadow-orange-900/30 animated-gradient-border">
            <div className="bg-[#121212] rounded-[2.4rem] p-8 md:p-12 text-center">

              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-6 py-2 bg-orange-500/20 border border-orange-500/30 text-orange-400 rounded-full font-bold text-sm mb-8">
                <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
                Lansman Dönemine Özel
              </div>

              {/* Package Name */}
              <h3 className="text-3xl font-extrabold mb-4">Lansman Paketi</h3>

              {/* Price */}
              <div className="flex items-baseline justify-center gap-3 mb-10">
                <span className="text-gray-500 line-through text-2xl font-medium">12.500 TL</span>
                <span className="text-5xl md:text-7xl font-montserrat font-black text-white">
                  7.000
                  <span className="text-3xl">TL</span>
                </span>
                <span className="text-gray-400 font-bold">+KDV</span>
              </div>

              {/* Features List */}
              <ul className="text-left space-y-4 max-w-sm mx-auto mb-10">
                {features.map((feature, i) => (
                  <li
                    key={i}
                    className={`flex items-center gap-3 fade-in-up stagger-${i + 1}`}
                  >
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                onClick={onPreviewClick}
                className="w-full md:w-auto px-12 py-5 gradient-btn rounded-2xl font-black text-lg shadow-xl shadow-orange-900/30 hover:scale-105 transition-transform btn-shine overflow-hidden glow-btn"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Web Sitemi İncele
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>

              <p className="mt-6 text-gray-500 text-xs italic">
                Sadece OSGB'ler için geçerli, sınırlı sayıda lisans.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
