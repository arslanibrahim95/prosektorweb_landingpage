
import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Önce görüp sonra ödeme modeli gerçekten güven verici. Web sitemizi inceledikten sonra karar verdik, hiçbir sürprizle karşılaşmadık.",
      author: "Ahmet Y.",
      company: "Delta OSGB",
      role: "Genel Müdür",
      rating: 5
    },
    {
      quote: "En kısa sürede hazır web sitesi aldık. OSGB sektörüne özel içerikler gerçekten profesyonel hazırlanmış.",
      author: "Fatma K.",
      company: "Alfa Ortak Sağlık Birimi",
      role: "İşletme Sahibi",
      rating: 5
    },
    {
      quote: "Mevzuat uyumlu içerik ve SEO çalışması sayesinde Google'da hemen öne çıkmaya başladık. Teşekkürler Prosektorweb!",
      author: "Mehmet S.",
      company: "Güven OSGB",
      role: "Kurucu Ortak",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0F0F0F] to-[#0A0A0A] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-montserrat font-black mb-6">
            Müşterilerimiz <span className="shimmer-text">Ne Diyor</span>?
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            OSGB'ler için hazırladığımız web siteleri hakkında geri bildirimler
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-pink-500 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className={`group relative p-8 rounded-3xl glass glass-hover transition-all duration-500 fade-in-up stagger-${i + 1}`}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-orange-500/20 text-6xl font-serif leading-none">"</div>

              {/* Rating Stars */}
              <div
                className="flex gap-1 mb-6"
                role="img"
                aria-label={`5 üzerinden ${item.rating} yıldız`}
                title={`5 üzerinden ${item.rating} yıldız`}
              >
                {[...Array(item.rating)].map((_, starIndex) => (
                  <svg key={starIndex} aria-hidden="true" className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-300 text-base leading-relaxed mb-8 relative z-10">
                "{item.quote}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg">
                  {item.author.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-bold">{item.author}</h4>
                  <p className="text-gray-400 text-sm">{item.role}</p>
                  <p className="text-orange-400 text-sm font-medium">{item.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          {[
            { value: "Hızlı", suffix: "", label: "Teslimat" },
            { value: "100", suffix: "%", label: "Müşteri Memnuniyeti" },
            { value: "7", suffix: " Gün", label: "Ücretsiz Önizleme" },
            { value: "3", suffix: "", label: "Revize Hakkı" }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl md:text-5xl font-montserrat font-black text-white mb-2">
                {stat.value}<span className="text-orange-500">{stat.suffix}</span>
              </div>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
