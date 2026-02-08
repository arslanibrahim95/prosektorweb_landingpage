
import React from 'react';

const Features: React.FC = () => {
  const data = [
    {
      title: "Sektörel Uzmanlık",
      desc: "Çünkü dilinizi konuşuyoruz. Mevzuatı, yetki belgelerini ve operasyonel süreçlerinizi biliyoruz. Sitenizi genelgeçer kurallarla değil, İSG dinamikleriyle inşa ediyoruz.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "Önce Görme Güvencesi",
      desc: "Sürprizlere yer yok. Bitmiş haliyle inceleyip sadece beğendiğinizde süreci başlatırsınız. Satın almadan önce neye sahip olacağınızı net bir şekilde bilirsiniz.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      )
    },
    {
      title: "Hız ve Verimlilik",
      desc: "Zamanınıza saygı duyuyoruz. Bitmek bilmeyen revizelerle vakit kaybetmeyin. 48 saat içinde yayına hazır bir otorite alanı sunuyoruz.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Odak Noktası",
      desc: "Tek odağımız, tek uzmanlığımız: OSGB. Biz bir genel ajans değiliz. Tüm enerjimizi sektörünüzü en iyi temsil edecek yapıya harcıyoruz.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0A]/80 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-montserrat font-black mb-6">
            Neden <span className="shimmer-text">Biz</span>?
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((item, i) => (
            <div
              key={i}
              className={`group relative p-8 rounded-3xl glass glass-hover transition-all duration-500 fade-in-up stagger-${i + 1}`}
            >
              {/* Gradient border on hover */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 gradient-border"></div>

              {/* Icon */}
              <div className="relative w-14 h-14 rounded-2xl icon-container flex items-center justify-center mb-6 text-orange-500">
                {item.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-orange-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-pink-500 group-hover:w-1/2 transition-all duration-500 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
