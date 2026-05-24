
import React, { useState, useEffect, useCallback, lazy, Suspense } from 'react';
import { PreviewSession } from './types';
import { MOCK_CODES, PROCESS_STEPS, FAQ_DATA, apiUrl } from './constants';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import ProcessFlow from './components/ProcessFlow';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import PreviewBar from './components/PreviewBar';
import PhoneInput from './components/PhoneInput';

// Lazy load modal components
const CookieBanner = lazy(() => import('./components/CookieBanner'));
const GlobalLegalModals = lazy(() => import('./components/GlobalLegalModals'));
const PaymentScreen = lazy(() => import('./components/PaymentScreen'));
import { LegalModalType } from './components/GlobalLegalModals';

type FlowStep = 'IDLE' | 'INFO' | 'LOGIN' | 'WELCOME' | 'PREVIEW_MOCKUP' | 'REVISE_INFO' | 'GO_LIVE' | 'PAYMENT' | 'EXPIRED' | 'LEAD_FORM' | 'LEAD_SUCCESS' | 'CONTACT_FORM' | 'CONTACT_SUCCESS';


const App: React.FC = () => {
  const [session, setSession] = useState<PreviewSession | null>(null);
  const [currentStep, setCurrentStep] = useState<FlowStep>('IDLE');

  const [isArchived, setIsArchived] = useState(false);
  const [activeLegalModal, setActiveLegalModal] = useState<LegalModalType>(null);

  // Check Local Storage on Mount
  useEffect(() => {
    // Test Backend Connection (silent - no console errors in production)
    fetch(apiUrl('/api/status'))
      .then(res => res.json())
      .catch(() => {/* Backend not available - expected on static hosting */});

    const saved = localStorage.getItem('psw_session');
    if (saved) {
      const parsed: PreviewSession = JSON.parse(saved);
      if (Date.now() > parsed.expiryDate) {
        setIsArchived(true);
        setCurrentStep('EXPIRED');
        localStorage.removeItem('psw_session');
      } else {
        setSession(parsed);
      }
    }
  }, []);

  const handleVerifyCode = (code: string, name: string) => {
    const company = MOCK_CODES[code.toUpperCase()];
    if (company) {
      const newSession: PreviewSession = {
        code: code.toUpperCase(),
        companyName: company,
        expiryDate: Date.now() + (168 * 60 * 60 * 1000) // 7 days
      };
      setSession(newSession);
      localStorage.setItem('psw_session', JSON.stringify(newSession));
      setCurrentStep('WELCOME');
      return true;
    }
    return false;
  };

  const logout = () => {
    setSession(null);
    setCurrentStep('IDLE');
    localStorage.removeItem('psw_session');
  };

  // iOS-safe scroll lock for overlay
  useEffect(() => {
    if (currentStep === 'IDLE') return;
    const scrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.overflow = '';
      window.scrollTo(0, scrollY);
    };
  }, [currentStep]);

  // Escape key to close overlay
  const handleOverlayEscape = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape' && currentStep !== 'IDLE') setCurrentStep('IDLE');
  }, [currentStep]);

  useEffect(() => {
    document.addEventListener('keydown', handleOverlayEscape);
    return () => document.removeEventListener('keydown', handleOverlayEscape);
  }, [handleOverlayEscape]);

  return (
    <div className="min-h-screen bg-psw-dark text-white selection:bg-[#FF0080] selection:text-white">
      <Navbar onLoginClick={() => setCurrentStep('INFO')} isSessionActive={!!session} onLogout={logout} />

      <main className="pt-16 md:pt-20">
        <Hero
          onCheckCode={() => {
            if (isArchived) setCurrentStep('EXPIRED');
            else if (session) setCurrentStep('WELCOME');
            else setCurrentStep('INFO');
          }}
          isSessionActive={!!session}
          companyName={session?.companyName}
        />

        {isArchived && !currentStep && (
          <div className="bg-red-900/40 border-y border-red-500 py-4 text-center px-4 animate-pulse">
            <p className="text-red-200 font-bold">⚠️ Tasarımınız arşivlendi! İnceleme süreniz doldu. Yeniden aktif etmek için tıklayın.</p>
          </div>
        )}

        <Features />
        <Testimonials />
        <ProcessFlow steps={PROCESS_STEPS} />
        <Pricing onPreviewClick={() => setCurrentStep('INFO')} />
        <FAQ items={FAQ_DATA} />
        <ContactSection />
      </main>

      <Footer
        onContactClick={() => setCurrentStep('CONTACT_FORM')}
        onOpenLegalModal={setActiveLegalModal}
      />

      {/* Multi-step Flow Overlay */}
      {currentStep !== 'IDLE' && (
        <div className="fixed inset-0 z-[90] flex items-center justify-center bg-black/95 transition-all duration-500 overflow-y-auto" role="dialog" aria-modal="true" aria-label="İşlem adımı">
          <div className="w-full min-h-screen flex items-center justify-center p-4">
            <button
              onClick={() => setCurrentStep('IDLE')}
              className="absolute top-8 right-8 text-gray-400 hover:text-white min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg"
              aria-label="Kapat"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="max-w-4xl w-full text-center py-12">
              {currentStep === 'INFO' && <InfoScreen onNext={() => setCurrentStep('LOGIN')} onRequestCode={() => setCurrentStep('LEAD_FORM')} />}
              {currentStep === 'LOGIN' && <LoginScreen onVerify={handleVerifyCode} />}
              {currentStep === 'WELCOME' && <WelcomeScreen companyName={session?.companyName || 'OSGB'} onPreview={() => setCurrentStep('PREVIEW_MOCKUP')} expiryDate={session?.expiryDate || Date.now()} />}
              {currentStep === 'PREVIEW_MOCKUP' && <MockupScreen onNext={() => setCurrentStep('REVISE_INFO')} companyName={session?.companyName || 'osgb'} />}
              {currentStep === 'REVISE_INFO' && <ReviseScreen onNext={() => setCurrentStep('GO_LIVE')} />}
              {currentStep === 'GO_LIVE' && <GoLiveScreen onNext={() => setCurrentStep('PAYMENT')} />}
              {currentStep === 'PAYMENT' && (
                <Suspense fallback={
                  <div className="text-center py-8 text-gray-400">
                    Yükleniyor...
                  </div>
                }>
                  <PaymentScreen />
                </Suspense>
              )}
              {currentStep === 'EXPIRED' && <ExpiredScreen onReactivate={() => setCurrentStep('INFO')} />}
              {currentStep === 'LEAD_FORM' && <LeadRequestFormScreen onComplete={() => setCurrentStep('LEAD_SUCCESS')} />}
              {currentStep === 'LEAD_SUCCESS' && <LeadSuccessScreen onFinish={() => setCurrentStep('IDLE')} />}
              {currentStep === 'CONTACT_FORM' && <ContactFormScreen onComplete={() => setCurrentStep('CONTACT_SUCCESS')} />}
              {currentStep === 'CONTACT_SUCCESS' && <ContactSuccessScreen onFinish={() => setCurrentStep('IDLE')} />}
            </div>
          </div>
        </div>
      )}

      <Suspense fallback={null}>
        <CookieBanner />
      </Suspense>
      {session && currentStep === 'IDLE' && <PreviewBar companyName={session.companyName} expiryDate={session.expiryDate} />}
      <Suspense fallback={null}>
        <GlobalLegalModals activeModal={activeLegalModal} onClose={() => setActiveLegalModal(null)} />
      </Suspense>
    </div>
  );
};

// --- CONTACT FLOW SCREENS ---

const ContactFormScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '', kvkk: false });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.kvkk) return;

    setIsSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch(apiUrl('/api/public/contact'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          message: formData.message,
          kvkk: formData.kvkk,
          pageUrl: window.location.href,
        }),
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      onComplete();
    } catch (err) {
      console.error('Contact submit failed:', err);
      setSubmitError('Gönderim başarısız. Lütfen tekrar deneyin.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom duration-500 w-full max-w-4xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-8">Bize Yazın</h2>
      <div className="space-y-2 mb-12">
        <p className="text-xl md:text-2xl font-bold text-gray-200">Soru, öneri ve talepleriniz için iletişim formumuzu doldurun!!</p>
        <p className="text-xl md:text-2xl font-bold text-gray-300">Mesajlarınıza en geç 1 iş günü içinde dönüş yapıyoruz.</p>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
        <div className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="contact-name" className="form-label">Adınız Soyadınız</label>
            <input id="contact-name" required value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} type="text" autoComplete="name" className="form-input bg-white text-black" />
          </div>
          <PhoneInput
            id="contact-phone"
            value={formData.phone}
            onChange={phone => setFormData({ ...formData, phone })}
            className="form-input bg-white text-black"
            required
            label="Telefon Numaranız"
          />
          <div className="space-y-2">
            <label htmlFor="contact-email" className="form-label">E-Posta Adresiniz</label>
            <input id="contact-email" required value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} type="email" autoComplete="email" inputMode="email" className="form-input bg-white text-black" />
          </div>
        </div>

        <div className="space-y-6 flex flex-col">
          <div className="space-y-2 flex-1">
            <label htmlFor="contact-message" className="form-label">Mesajınız</label>
            <textarea id="contact-message" required value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} className="form-input bg-white text-black min-h-[200px] md:h-full resize-none"></textarea>
          </div>

          <div className="space-y-4 pt-4">
            <div className="flex items-start gap-3 cursor-pointer group">
              <input
                type="checkbox"
                id="kvkk-check"
                checked={formData.kvkk}
                onChange={e => setFormData({ ...formData, kvkk: e.target.checked })}
                className="form-checkbox mt-0.5"
                required
              />
              <label htmlFor="kvkk-check" className="text-sm font-medium cursor-pointer group-hover:text-white transition-colors">
                KVKK onay formunu okudum, onaylıyorum.
              </label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full gradient-btn py-4 rounded-full text-lg font-black text-white flex items-center justify-center gap-3 transition-all shadow-2xl ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:scale-105'}`}
            >
              {isSubmitting ? 'GÖNDERİLİYOR...' : 'GÖNDER'} <span className="text-xl">›</span>
            </button>
            {submitError && (
              <p className="text-red-400 font-bold text-center">{submitError}</p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

const ContactSuccessScreen: React.FC<{ onFinish: () => void }> = ({ onFinish }) => (
  <div className="space-y-12 animate-in fade-in zoom-in duration-700 max-w-3xl mx-auto">
    <div className="flex justify-center">
      <div className="gradient-btn px-20 py-8 rounded-full text-4xl font-black shadow-[0_0_50px_rgba(255,140,0,0.3)] text-white">
        Mesajınız İletildi
      </div>
    </div>

    <div className="space-y-8 text-2xl font-bold leading-relaxed">
      <p>Sorunuz başarıyla tarafımıza ulaştı.</p>
      <p>İlgili danışmanlarımız mesajınızı inceleyerek en geç 1 iş günü içinde size dönüş yapacaktır.</p>
      <p className="text-orange-400">Bizimle iletişime geçtiğiniz için teşekkür ederiz.</p>
    </div>

    <button onClick={onFinish} className="mt-12 bg-white text-black px-12 py-5 rounded-full text-xl font-black hover:scale-105 transition-all">
      Tamam
    </button>
  </div>
);

// --- PREVIOUS FLOW SCREENS ---

const InfoScreen: React.FC<{ onNext: () => void, onRequestCode: () => void }> = ({ onNext, onRequestCode }) => (
  <div className="space-y-8 animate-in fade-in zoom-in duration-500">
    <div className="bg-[#C62828] text-white font-bold py-4 px-8 rounded-lg inline-block w-full max-w-3xl">
      Önizleme alanı yalnızca adına özel çalışma yapılan OSGB’lere açılır.
    </div>
    <div className="space-y-4 text-xl md:text-2xl font-medium leading-relaxed max-w-2xl mx-auto">
      <p>önizleme erişim kodu size e-posta veya mesaj yoluyla gönderilmiştir.</p>
      <p>Kodunuzu girerek, OSGB’nize özel hazırlanan web sitesini herhangi bir ücret ödemeden inceleyebilir ve kararınızı verebilirsiniz.</p>
    </div>
    <p className="text-gray-400 text-lg">Önizleme erişimi 7 gün boyunca aktiftir.</p>
    <p className="text-gray-400">Bu sürenin sonunda tasarım arşivlenir ve yeniden çalışma gerektirir.</p>

    <div className="flex flex-col items-center gap-6 pt-8">
      <button onClick={onNext} className="gradient-btn px-16 py-5 rounded-full text-2xl font-black shadow-2xl hover:scale-105 transition-all">
        Kodum Var, Giriş Yap
      </button>
      <div className="bg-[#C62828] w-full py-4 text-white font-bold text-xl rounded-lg max-w-xl">Kodunuz yok mu?</div>
      <div className="space-y-2">
        <p className="text-2xl font-bold">Talebinizi bırakın.</p>
        <p className="text-gray-400 text-lg">Web siteniz için önizleme hazırlayalım,<br />erişim kodunuz en geç 24–72 saat içinde tarafınıza iletilsin.</p>
      </div>
      <button onClick={onRequestCode} className="gradient-btn px-12 py-5 rounded-full text-2xl font-black shadow-xl hover:scale-105 transition-all">
        Önizleme Talebi Bırak
      </button>
    </div>
  </div>
);

const LeadRequestFormScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [formData, setFormData] = useState({ company: '', name: '', email: '', phone: '', agreed: false });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreed) return;

    setIsSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch(apiUrl('/api/public/leads'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          company: formData.company,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          consent: formData.agreed,
          pageUrl: window.location.href,
        }),
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      onComplete();
    } catch (err) {
      console.error('Lead submit failed:', err);
      setSubmitError('Gönderim başarısız. Lütfen tekrar deneyin.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 animate-in slide-in-from-bottom duration-500 max-w-2xl mx-auto text-left">
      <div className="text-center space-y-4 mb-8">
        <p className="text-xl font-bold text-gray-200">Önizleme erişimi yalnızca OSGB yetkililerine açılır.</p>
        <p className="text-lg text-gray-300">Kurumsal e-postası olmayan OSGB’ler için ek doğrulama talep edilebilir.</p>
        <p className="text-lg text-gray-400 italic">Bu uygulama, adil kullanım ve güvenlik amacıyla uygulanmaktadır.</p>
      </div>

      <div className="bg-[#C62828] w-full py-4 text-white font-bold text-xl rounded-lg text-center mb-8 uppercase tracking-wide">
        OSGB Web Sitesi Önizleme Talep Formu
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="lead-company" className="form-label">OSGB Ticari Ünvanı:</label>
          <input id="lead-company" required value={formData.company} onChange={e => setFormData({ ...formData, company: e.target.value })} type="text" autoComplete="organization" className="form-input bg-white/5 border border-white/10 text-white rounded-xl" />
        </div>
        <div className="space-y-2">
          <label htmlFor="lead-name" className="form-label">Yetkili Adı Soyadı:</label>
          <input id="lead-name" required value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} type="text" autoComplete="name" className="form-input bg-white/5 border border-white/10 text-white rounded-xl" />
        </div>
        <div className="space-y-2">
          <label htmlFor="lead-email" className="form-label">E-posta Adresi:</label>
          <input id="lead-email" required value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} type="email" autoComplete="email" inputMode="email" className="form-input bg-white/5 border border-white/10 text-white rounded-xl" />
          <p className="text-gray-400 text-sm italic">(Kurumsal e-postası olmayan OSGB'ler için ek doğrulama yapılabilir.)</p>
        </div>
          <PhoneInput
            id="lead-phone"
            value={formData.phone}
            onChange={phone => setFormData({ ...formData, phone })}
            className="form-input bg-white/5 border border-white/10 text-white rounded-xl"
            required
            label="Cep Telefonu:"
          />
          <p className="text-gray-400 text-sm italic -mt-4">(Önizleme kodu SMS veya e-posta üzerinden gönderilecektir.)</p>

        <div className="flex items-center gap-3 py-4 group cursor-pointer">
          <input
            type="checkbox"
            id="auth-check"
            checked={formData.agreed}
            onChange={e => setFormData({ ...formData, agreed: e.target.checked })}
            className="form-checkbox"
            required
          />
          <label htmlFor="auth-check" className="text-sm font-bold cursor-pointer group-hover:text-white transition-colors">
            OSGB adına web sitesi önizleme talebinde bulunmaya yetkiliyim.
          </label>
        </div>
      </div>

      <div className="flex flex-col items-center gap-6 pt-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`gradient-btn px-20 py-5 rounded-full text-2xl font-black shadow-2xl transition-all text-white ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:scale-105'}`}
        >
          {isSubmitting ? 'Gönderiliyor...' : 'Önizleme Talebi Bırak'}
        </button>
        {submitError && (
          <p role="alert" className="text-red-400 font-bold text-center">{submitError}</p>
        )}
        <p className="text-gray-400 text-lg text-center font-bold uppercase tracking-widest">Önizleme erişimi uygunluk kontrolü sonrası oluşturulur.</p>
      </div>
    </form>
  );
};

const LeadSuccessScreen: React.FC<{ onFinish: () => void }> = ({ onFinish }) => (
  <div className="space-y-12 animate-in fade-in zoom-in duration-700 max-w-3xl mx-auto">
    <div className="flex justify-center">
      <div className="gradient-btn px-20 py-8 rounded-full text-4xl font-black shadow-[0_0_50px_rgba(255,140,0,0.3)] text-white">
        Talebiniz Alındı
      </div>
    </div>

    <div className="space-y-8 text-2xl font-bold leading-relaxed">
      <p>OSGB’niz için web sitesi önizleme talebiniz başarıyla alındı.</p>
      <p>Bilgileriniz kısa süre içinde kontrol edilecektir.</p>
        <p>Uygunluk durumuna göre,</p>
        <p className="text-white">önizleme erişim kodunuz mesaj veya e-posta yoluyla tarafınıza iletilecektir.</p>
    </div>

    <div className="pt-20">
      <p className="text-xl font-bold italic text-gray-400 uppercase tracking-widest">Önizleme erişimi yalnızca yetkilendirilmiş OSGB’ler için oluşturulur.</p>
    </div>

    <button onClick={onFinish} className="mt-8 text-gray-400 hover:text-white underline text-lg transition-colors">Ana Sayfaya Dön</button>
  </div>
);

const LoginScreen: React.FC<{ onVerify: (code: string, name: string) => boolean }> = ({ onVerify }) => {
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [error, setError] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!onVerify(code, name)) setError(true);
  };

  return (
    <form onSubmit={submit} className="space-y-12 animate-in fade-in slide-in-from-bottom duration-500">
      <h2 className="text-4xl md:text-5xl font-extrabold">Giriş Yap</h2>
      <div className="space-y-8 max-w-lg mx-auto">
        <div className="space-y-2">
          <label htmlFor="login-name" className="form-label">
            OSGB Adı <span className="text-orange-500">*</span>
          </label>
          <input id="login-name" required value={name} onChange={e => setName(e.target.value)} type="text" autoComplete="organization" className={`form-input bg-white/5 text-white text-center rounded-xl transition-colors ${error ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/20' : ''}`} aria-invalid={error} aria-describedby={error ? "login-error" : undefined} />
        </div>
        <div className="space-y-2">
          <label htmlFor="login-code" className="form-label">
            Önizleme Kodu <span className="text-orange-500">*</span>
          </label>
          <input id="login-code" required value={code} onChange={e => { setCode(e.target.value); setError(false); }} type="text" placeholder="XXXXXX" autoCapitalize="characters" className={`form-input bg-white/5 text-white text-center rounded-xl transition-colors ${error ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/20' : ''}`} aria-invalid={error} aria-describedby={error ? "login-error" : undefined} />
        </div>
        <p className="text-gray-400">Önizleme kodu, size WhatsApp / e-posta ile gönderilir.</p>
        {error && <p id="login-error" role="alert" className="text-red-500 font-bold">Hatalı giriş! Lütfen bilgilerinizi kontrol edin.</p>}
        <div className="text-gray-400 text-sm space-y-2 pt-4">
          <p>Önizleme kodu ilk girişte doğrulanır. Aynı cihazdan tekrar girişte kod istenmez.</p>
          <p>Farklı cihazlarda güvenlik nedeniyle kod doğrulaması yapılır.</p>
        </div>
        <button type="submit" className="w-full bg-white text-black py-5 rounded-full text-2xl font-black shadow-2xl hover:scale-105 transition-all">
          Sisteme Giriş Yap
        </button>
      </div>
    </form>
  );
};

const WelcomeScreen: React.FC<{ companyName: string, onPreview: () => void, expiryDate: number }> = ({ companyName, onPreview, expiryDate }) => {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const update = () => {
      const diff = expiryDate - Date.now();
      const h = Math.floor(diff / (1000 * 60 * 60));
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((diff % (1000 * 60)) / 1000);
      setTimeLeft(`${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`);
    };
    const t = setInterval(update, 1000);
    update();
    return () => clearInterval(t);
  }, [expiryDate]);

  return (
    <div className="space-y-12 animate-in fade-in scale-95 duration-700">
      <h2 className="text-4xl md:text-5xl font-extrabold">Hoş geldiniz, [{companyName}]</h2>
      <p className="text-2xl font-medium">Sizin için hazırlanan tam kapsamlı web sitesi hazır.</p>

      <div className="relative inline-block group cursor-pointer" onClick={onPreview}>
        <div className="gradient-btn px-20 py-10 rounded-[3rem] text-5xl font-black shadow-[0_0_50px_rgba(255,140,0,0.3)] group-hover:scale-105 transition-all text-white">
          Web <br /> Sitemi <br /> Önizle
        </div>
        <div className="absolute -bottom-8 -right-8 w-16 h-16 animate-bounce">
          <svg className="w-full h-full text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5" />
          </svg>
        </div>
      </div>

      <div className="space-y-4 pt-10">
        <div className="text-4xl md:text-7xl font-mono font-black text-white tracking-widest">{timeLeft}</div>
        <p className="text-xl font-bold">Önizleme süresi: 6 gün 23 saat</p>
      </div>
    </div>
  );
};

const MockupScreen: React.FC<{ onNext: () => void, companyName: string }> = ({ onNext, companyName }) => (
  <div className="space-y-12 animate-in slide-in-from-right duration-500 h-full flex flex-col justify-center">
    <div className="bg-yellow-400 w-full min-h-[300px] flex items-center justify-center rounded-[3rem] p-12 shadow-2xl overflow-hidden relative group">
      <div className="bg-white px-12 py-6 rounded-full flex items-center gap-4 text-xl md:text-3xl font-medium shadow-lg max-w-2xl w-full border-r-8 border-gray-200">
        <span className="text-gray-400">www.</span>
        <span>{companyName.toLowerCase().replace(/\s/g, '')}osgb.com</span>
        <span className="ml-auto text-gray-300">🔍</span>
      </div>
      <div onClick={onNext} className="absolute bottom-0 left-0 w-full gradient-btn py-6 text-2xl md:text-4xl font-black text-white cursor-pointer hover:h-24 transition-all flex items-center justify-center">
        Bu tasarımı yayına al
      </div>
    </div>
    <p className="text-gray-400 text-xl font-bold">Sitenizin bitmiş halini bizzat deneyimleyin.</p>
  </div>
);

const ReviseScreen: React.FC<{ onNext: () => void }> = ({ onNext }) => (
  <div className="space-y-16 animate-in fade-in duration-500">
    <div className="space-y-8">
      <h2 className="text-4xl md:text-5xl font-extrabold">Düzenleme (Revize)</h2>
      <p className="text-2xl font-bold leading-relaxed max-w-2xl mx-auto">
        İnceleme süresi boyunca düzenleme taleplerinizi iletişim kanallarımız üzerinden iletebilirsiniz.
      </p>
    </div>
    <div className="text-gray-400 text-xl max-w-xl mx-auto leading-relaxed">
      Düzenleme kapsamı ve koşulları SSS bölümü içindeki "Revize Süreci" bölümünde açıklanmıştır.
    </div>
    <button onClick={onNext} className="gradient-btn px-16 py-6 rounded-full text-2xl font-black shadow-2xl hover:scale-105 transition-all text-white">
      Devam Et
    </button>
  </div>
);

const GoLiveScreen: React.FC<{ onNext: () => void }> = ({ onNext }) => (
  <div className="space-y-16 animate-in zoom-in duration-500">
    <div className="space-y-6">
      <h2 className="text-4xl md:text-5xl font-extrabold">Seçtiğiniz tasarımı yayına almak üzeresiniz.</h2>
      <p className="text-2xl font-bold text-gray-300">(7 Gün - 7 Bin TL - Tek Fiyat)</p>
    </div>
    <p className="text-xl max-w-2xl mx-auto font-bold">Bu sayfa, size özel hazırlanan dijital kimliğin yayın sürecini başlatır.</p>

    <button onClick={onNext} className="gradient-btn px-20 py-8 rounded-full text-3xl font-black shadow-[0_0_60px_rgba(255,0,128,0.4)] hover:scale-110 transition-all text-white">
      Bu tasarımı yayına al
    </button>

    <div className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed italic">
      Yayına alma sonrasında talep edilen yeni sayfa, yapısal değişiklik veya ek fonksiyonlar, ek hizmet kapsamında değerlendirilir.
    </div>
  </div>
);

const ExpiredScreen: React.FC<{ onReactivate: () => void }> = ({ onReactivate }) => (
  <div className="space-y-12 animate-in fade-in duration-500">
    <h2 className="text-4xl md:text-6xl font-extrabold text-white">Önizleme Süresi Sona Erdi</h2>
    <div className="space-y-4 text-2xl font-medium max-w-2xl mx-auto">
      <p>Firmanız için oluşturulan önizleme süresi sona ermiştir.</p>
      <p>Bu nedenle hazırlanan tasarımlar arşivlenmiştir ve şu anda erişime kapalıdır.</p>
    </div>

    <button onClick={onReactivate} className="gradient-btn px-16 py-8 rounded-full text-2xl font-black shadow-2xl hover:scale-105 transition-all text-white">
      Ön izlemeyi tekrar aktifleştir
    </button>

    <div className="space-y-2">
      <h3 className="text-2xl font-bold">Yeniden Aktifleştirme Bedeli</h3>
      <div className="flex flex-col items-center">
        <span className="text-gray-400 line-through text-2xl">7.000 TL (tanıtım süresi sona erdi)</span>
        <span className="text-5xl font-black text-white">12.500 TL</span>
      </div>
    </div>
    <p className="text-gray-400">Bu bedel, önizleme alanının yeniden oluşturulmasını ve erişime açılmasını kapsar.</p>
  </div>
);

export default App;
