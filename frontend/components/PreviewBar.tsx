
import React, { useState, useEffect } from 'react';

interface PreviewBarProps {
  companyName: string;
  expiryDate: number;
}

const PreviewBar: React.FC<PreviewBarProps> = ({ companyName, expiryDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const diff = expiryDate - Date.now();
      if (diff <= 0) {
        clearInterval(timer);
        window.location.reload(); // Trigger archived state
      } else {
        const totalSec = Math.floor(diff / 1000);
        const h = Math.floor(totalSec / 3600);
        const m = Math.floor((totalSec % 3600) / 60);
        const s = totalSec % 60;
        setTimeLeft({ hours: h, minutes: m, seconds: s });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [expiryDate]);

  return (
    <div className="fixed bottom-0 left-0 w-full z-[60] animate-in slide-in-from-bottom duration-500">
      <div className="bg-[#1A1A1A] border-t border-orange-500/30 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] px-4 py-4 md:py-3">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full gradient-btn flex items-center justify-center text-xl shadow-lg">👋</div>
            <div>
              <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Hoş Geldiniz</div>
              <div className="text-sm font-bold text-white">{companyName}</div>
            </div>
          </div>

          <div className="flex items-center gap-8">
            <div className="hidden sm:flex flex-col items-center">
              <div className="text-[10px] text-gray-500 font-bold uppercase mb-1">Kalan İnceleme Süresi</div>
              <div className="flex gap-2 text-sm font-mono font-black text-orange-400">
                <span className="bg-orange-500/10 px-2 py-1 rounded">{timeLeft.hours.toString().padStart(2, '0')}sa</span>
                <span className="bg-orange-500/10 px-2 py-1 rounded">{timeLeft.minutes.toString().padStart(2, '0')}dk</span>
                <span className="bg-orange-500/10 px-2 py-1 rounded">{timeLeft.seconds.toString().padStart(2, '0')}sn</span>
              </div>
            </div>

            <button className="px-8 py-3 bg-white text-black font-black rounded-xl hover:scale-105 transition-all text-sm shadow-xl">
              Bu Tasarımı Yayına Al
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewBar;
