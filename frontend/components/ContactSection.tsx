
import React, { useState } from 'react';
import { WHATSAPP_LINK, apiUrl } from '../constants';

interface ContactSectionProps {
    onSubmit?: () => void;
}

const ContactSection: React.FC<ContactSectionProps> = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitError(null);
        try {
            const res = await fetch(apiUrl('/api/public/contact'), {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    company: formData.company,
                    message: formData.message,
                    pageUrl: window.location.href,
                }),
            });
            if (!res.ok) throw new Error(`Request failed: ${res.status}`);
            setIsSubmitted(true);
            onSubmit?.();
        } catch (err) {
            console.error('Contact submit failed:', err);
            setSubmitError('Gönderim başarısız oldu. Lütfen tekrar deneyin.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    if (isSubmitted) {
        return (
            <section id="contact" className="py-24 px-4">
                <div className="max-w-2xl mx-auto text-center">
                    <div className="glass rounded-3xl p-12 scale-in">
                        <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/30">
                            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-4">Mesajınız Gönderildi!</h3>
                        <p className="text-gray-300 text-lg">En kısa sürede sizinle iletişime geçeceğiz.</p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="contact" className="py-24 px-4 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-pink-500/5 rounded-full blur-[120px]"></div>
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-montserrat font-black text-white mb-4">
                        Bize <span className="shimmer-text">Ulaşın</span>
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        Sorularınız mı var? OSGB'niz için özel web sitesi hakkında bilgi almak ister misiniz? Formu doldurun, size dönelim.
                    </p>
                </div>

                {/* Form Card */}
                <div className="relative">
                    {/* Glow behind form */}
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-pink-500/10 to-orange-500/10 rounded-3xl blur-2xl"></div>

                    <div className="relative glass rounded-3xl p-8 md:p-12">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                {/* Name */}
                                <div className="space-y-2">
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                                        Ad Soyad <span className="text-orange-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        autoComplete="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all input-glow"
                                        placeholder="Adınız Soyadınız"
                                    />
                                </div>

                                {/* Email */}
                                <div className="space-y-2">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                                        E-posta <span className="text-orange-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        autoComplete="email"
                                        inputMode="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all input-glow"
                                        placeholder="ornek@email.com"
                                    />
                                </div>

                                {/* Phone */}
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
                                        Telefon
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        autoComplete="tel"
                                        inputMode="tel"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all input-glow"
                                        placeholder="05XX XXX XX XX"
                                    />
                                </div>

                                {/* Company */}
                                <div className="space-y-2">
                                    <label htmlFor="company" className="block text-sm font-medium text-gray-300">
                                        OSGB / Şirket Adı
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        autoComplete="organization"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all input-glow"
                                        placeholder="Şirket adınız"
                                    />
                                </div>
                            </div>

                            {/* Message */}
                            <div className="space-y-2">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                                    Mesajınız <span className="text-orange-500">*</span>
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all resize-none input-glow"
                                    placeholder="Mesajınızı yazın..."
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full py-4 rounded-xl text-lg font-bold transition-all flex items-center justify-center gap-3 btn-shine overflow-hidden ${isSubmitting
                                        ? 'bg-gray-700 text-gray-300 cursor-not-allowed'
                                        : 'gradient-btn hover:shadow-lg hover:shadow-orange-500/25 hover:scale-[1.02] glow-btn'
                                    }`}
                            >
                                {isSubmitting ? (
                                    <>
                                        <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24" role="status" aria-label="Yükleniyor">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                        </svg>
                                        Gönderiliyor...
                                    </>
                                ) : (
                                    <>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        Mesaj Gönder
                                    </>
                                )}
                            </button>
                            {submitError && (
                                <p className="text-red-400 font-bold text-center text-sm mt-3">{submitError}</p>
                            )}
                        </form>

                        {/* Contact Info */}
                        <div className="mt-10 pt-8 border-t border-white/10 grid md:grid-cols-3 gap-6">
                            <div className="flex flex-col items-center gap-3 group">
                                <div className="w-12 h-12 icon-container rounded-xl flex items-center justify-center">
                                    <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <span className="text-gray-300 text-sm group-hover:text-white transition-colors">hello@prosektorweb.com</span>
                            </div>

                            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 group">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 flex items-center justify-center hover:scale-110 transition-transform">
                                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                </div>
                                <span className="text-gray-300 text-sm group-hover:text-white transition-colors">WhatsApp ile ulaşın</span>
                            </a>

                            <div className="flex flex-col items-center gap-3 group">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 flex items-center justify-center hover:scale-110 transition-transform">
                                    <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <span className="text-gray-300 text-sm group-hover:text-white transition-colors">24-72 saat içinde dönüş</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
