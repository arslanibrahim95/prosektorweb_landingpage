
import React, { useState } from 'react';
import { FAQItem } from '../types';

interface FAQProps {
  items: FAQItem[];
  onContactClick: () => void;
}

const FAQ: React.FC<FAQProps> = ({ items, onContactClick }) => {
  const [openId, setOpenId] = useState<number | null>(1);

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-montserrat font-black mb-4">
            Sık Sorulan <span className="shimmer-text">Sorular</span>
          </h2>
          <p className="text-gray-400">Merak ettiğiniz her şey burada</p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {items.map((item, index) => {
            const isOpen = openId === item.id;
            const buttonId = `faq-btn-${item.id}`;
            const panelId = `faq-panel-${item.id}`;

            return (
              <div
                key={item.id}
                className={`glass rounded-2xl overflow-hidden transition-all duration-500 fade-in-up stagger-${Math.min(index + 1, 5)} ${isOpen ? 'ring-1 ring-orange-500/30' : ''
                  }`}
              >
                <button
                  id={buttonId}
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="w-full px-6 py-5 text-left flex justify-between items-center group hover:bg-white/5 transition-colors"
                >
                  <span className={`font-bold transition-colors ${isOpen ? 'text-orange-400' : 'text-gray-200 group-hover:text-white'
                    }`}>
                    <span className="text-gray-400 mr-2">{item.id}.</span>
                    {item.question}
                  </span>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${isOpen
                      ? 'bg-orange-500/20 rotate-180'
                      : 'bg-white/5 group-hover:bg-white/10'
                    }`}>
                    <svg
                      className={`w-4 h-4 transition-colors ${isOpen ? 'text-orange-400' : 'text-gray-300'
                        }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                {/* Accordion Content */}
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`overflow-hidden transition-all duration-500 ease-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                >
                  <div className="px-6 pb-6 pt-2 border-t border-white/5">
                    <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={onContactClick}
            className="group px-8 py-4 glass rounded-2xl font-bold transition-all hover:bg-white/10 flex items-center gap-3 mx-auto"
          >
            <span>Sorunuz mu var?</span>
            <svg
              className="w-4 h-4 text-orange-400 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
