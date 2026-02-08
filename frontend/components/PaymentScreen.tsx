import React, { useState } from 'react';
import Modal from './Modal';
import { TermsAndRefundContent, SalesAgreementContent, PrivacyPolicyContent } from './LegalDocs';

const PaymentScreen: React.FC = () => {
    const [showTermsModal, setShowTermsModal] = useState(false);
    const [showSalesModal, setShowSalesModal] = useState(false);
    const [showPrivacyModal, setShowPrivacyModal] = useState(false);

    const [agreedTerms, setAgreedTerms] = useState(false);
    const [agreedSales, setAgreedSales] = useState(false);
    const [agreedPrivacy, setAgreedPrivacy] = useState(false);

    const isFormValid = agreedTerms && agreedSales && agreedPrivacy;

    return (
        <div className="space-y-8 animate-in zoom-in duration-500 max-w-4xl mx-auto text-left">
            <div className="bg-[#121212] border border-white/10 rounded-2xl p-8 shadow-2xl">
                <h2 className="text-3xl font-bold mb-6 text-white border-b border-white/10 pb-4">Güvenli Ödeme ve Aktivasyon</h2>

                {/* Pricing Summary */}
                <div className="bg-blue-900/20 p-6 rounded-xl mb-8 border border-blue-500/20 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div>
                        <h3 className="text-xl font-bold text-white">Lansman Paketi (Tek Seferlik)</h3>
                        <p className="text-gray-400">7 Günlük Önizleme Sonrası Aktivasyon</p>
                    </div>
                    <div className="text-right">
                        <div className="text-3xl font-black text-white">7.000 TL</div>
                        <div className="text-xs text-gray-500">+ KDV (%20)</div>
                    </div>
                </div>

                {/* Legal Checkboxes */}
                <div className="space-y-4 mb-8">
                    <p className="text-sm text-gray-400 mb-2 font-bold">Hizmeti başlatmak için aşağıdaki sözleşmeleri onaylayınız:</p>

                    {/* Terms */}
                    <div className="flex items-start gap-3 p-3 hover:bg-white/5 rounded-lg transition-colors">
                        <input
                            type="checkbox"
                            id="terms"
                            checked={agreedTerms}
                            onChange={e => setAgreedTerms(e.target.checked)}
                            className="mt-1 w-5 h-5 rounded border-gray-600 bg-transparent checked:bg-blue-500 cursor-pointer"
                        />
                        <label htmlFor="terms" className="text-sm text-gray-300 cursor-pointer select-none">
                            <span className="font-bold text-white hover:underline" onClick={(e) => { e.preventDefault(); setShowTermsModal(true); }}>
                                Kullanım Koşulları ve İptal/İade Şartları
                            </span>'nı okudum, hizmetin cayma hakkı kapsamı dışında olduğunu ve 7 günlük ücretsiz inceleme süresi sonunda iptal/iade yapılamayacağını kabul ediyorum.
                        </label>
                    </div>

                    {/* Sales Agreement */}
                    <div className="flex items-start gap-3 p-3 hover:bg-white/5 rounded-lg transition-colors">
                        <input
                            type="checkbox"
                            id="sales"
                            checked={agreedSales}
                            onChange={e => setAgreedSales(e.target.checked)}
                            className="mt-1 w-5 h-5 rounded border-gray-600 bg-transparent checked:bg-blue-500 cursor-pointer"
                        />
                        <label htmlFor="sales" className="text-sm text-gray-300 cursor-pointer select-none">
                            <span className="font-bold text-white hover:underline" onClick={(e) => { e.preventDefault(); setShowSalesModal(true); }}>
                                Mesafeli Satış Sözleşmesi
                            </span>'ni okudum, ön biligilendirme formunu inceledim ve elektronik ortamda onaylıyorum.
                        </label>
                    </div>

                    {/* Privacy & KVKK */}
                    <div className="flex items-start gap-3 p-3 hover:bg-white/5 rounded-lg transition-colors">
                        <input
                            type="checkbox"
                            id="privacy"
                            checked={agreedPrivacy}
                            onChange={e => setAgreedPrivacy(e.target.checked)}
                            className="mt-1 w-5 h-5 rounded border-gray-600 bg-transparent checked:bg-blue-500 cursor-pointer"
                        />
                        <label htmlFor="privacy" className="text-sm text-gray-300 cursor-pointer select-none">
                            <span className="font-bold text-white hover:underline" onClick={(e) => { e.preventDefault(); setShowPrivacyModal(true); }}>
                                Gizlilik Politikası ve KVKK Aydınlatma Metni
                            </span>'ni okudum, kişisel verilerimin işlenmesine açık rıza gösteriyorum.
                        </label>
                    </div>
                </div>

                {/* Payment Button */}
                <button
                    disabled={!isFormValid}
                    className={`w-full py-4 rounded-xl text-xl font-bold transition-all shadow-lg flex items-center justify-center gap-2
            ${isFormValid
                            ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:scale-[1.02] shadow-green-900/20 cursor-pointer'
                            : 'bg-gray-800 text-gray-500 cursor-not-allowed'
                        }`}
                >
                    {isFormValid ? 'Ödeme Yap ve Yayına Al (8.400 TL)' : 'Sözleşmeleri Onaylayınız'}
                </button>

                {/* Secure Payment Footer */}
                <div className="mt-6 flex flex-col items-center gap-2 text-center">
                    <div className="flex items-center gap-3 opacity-60 grayscale hover:grayscale-0 transition-all">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-5" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-5" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Troy_logo.png/800px-Troy_logo.png" alt="Troy" className="h-5" />
                    </div>
                    <p className="text-xs text-gray-500">
                        Ödemeniz <span className="text-white font-bold">256-bit SSL</span> ile şifrelenerek güvenli ödeme altyapısı üzerinden alınır. Kredi kartı bilgileriniz sistemimizde saklanmaz.
                    </p>
                </div>
            </div>

            {/* Modals */}
            {showTermsModal && (
                <Modal title="Kullanım Koşulları ve İptal/İade Şartları" onClose={() => setShowTermsModal(false)}>
                    <div className="text-gray-300 space-y-6 max-h-[60vh] overflow-y-auto pr-2 text-sm md:text-base">
                        <TermsAndRefundContent />
                    </div>
                </Modal>
            )}

            {showSalesModal && (
                <Modal title="Mesafeli Satış Sözleşmesi" onClose={() => setShowSalesModal(false)}>
                    <div className="text-gray-300 space-y-6 max-h-[60vh] overflow-y-auto pr-2 text-sm md:text-base">
                        <SalesAgreementContent />
                    </div>
                </Modal>
            )}

            {showPrivacyModal && (
                <Modal title="Gizlilik Politikası ve KVKK" onClose={() => setShowPrivacyModal(false)}>
                    <div className="text-gray-300 space-y-6 max-h-[60vh] overflow-y-auto pr-2 text-sm md:text-base">
                        <PrivacyPolicyContent />
                    </div>
                </Modal>
            )}

        </div>
    );
};

export default PaymentScreen;
