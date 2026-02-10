
import React from 'react';
import { ProcessStep } from '../types';

interface ProcessFlowProps {
  steps: ProcessStep[];
}

const ProcessFlow: React.FC<ProcessFlowProps> = ({ steps }) => {
  return (
    <section id="process" className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/50 via-transparent to-[#0A0A0A]/50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-montserrat font-black mb-4">
            Nasıl <span className="shimmer-text">Çalışırız</span>?
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto">
            Karmaşık süreçler yok. Net ve hızlı bir yol izliyoruz.
          </p>
        </div>

        <div className="relative">
          {/* Animated Connector Line - Desktop */}
          <div className="hidden lg:block absolute top-8 left-0 w-full h-0.5 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
            <div
              className="absolute h-full w-1/3 bg-gradient-to-r from-transparent via-orange-500 to-transparent"
              style={{
                animation: 'shimmer 3s linear infinite',
                backgroundSize: '200% auto'
              }}
            ></div>
          </div>

          {/* Steps Grid */}
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-6 relative z-10">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className={`flex flex-col items-center text-center group fade-in-up stagger-${idx + 1}`}
              >
                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-2xl icon-container flex items-center justify-center text-3xl relative z-10 group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>

                  {/* Step Number Badge */}
                  <div className="absolute -top-2 -right-2 w-7 h-7 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-xs font-black rounded-full flex items-center justify-center border-4 border-[#0a0a0f] shadow-lg shadow-orange-500/20">
                    {idx + 1}
                  </div>

                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-orange-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold mb-2 group-hover:text-orange-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed max-w-[200px]">
                  {step.description}
                </p>

                {/* Mobile Connector */}
                {idx < steps.length - 1 && (
                  <div className="lg:hidden w-0.5 h-8 bg-gradient-to-b from-orange-500/50 to-transparent mt-6"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;
