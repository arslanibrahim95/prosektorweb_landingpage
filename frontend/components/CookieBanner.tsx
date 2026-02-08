import React, { useState, useEffect } from 'react';
import Modal from './Modal';

const CookieBanner: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [showPolicyModal, setShowPolicyModal] = useState(false);

    useEffect(() => {
        const accepted = localStorage.getItem('cookie_consent');
        if (!accepted) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookie_consent', 'true');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <>
            {/* Banner */}
            <div className="fixed bottom-0 left-0 w-full bg-[#121212] border-t border-white/10 p-6 z-[90] animate-in slide-in-from-bottom duration-500 shadow-2xl">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed text-center md:text-left">
                        Size özel hazırlanan web sitesi önizlemesini sunabilmek ve 7 günlük (168 saat) teknik süreci yönetebilmek için zorunlu çerezler kullanıyoruz. Platformu kullanmaya devam ederek bu teknik çerezlere onay vermiş sayılırsınız.{' '}
                        <button
                            onClick={() => setShowPolicyModal(true)}
                            className="text-blue-400 hover:text-blue-300 underline font-bold cursor-pointer bg-transparent border-none p-0 inline"
                        >
                            [Çerez Politikası’nı İncele]
                        </button>
                    </p>
                    <button
                        onClick={handleAccept}
                        className="gradient-btn px-8 py-3 rounded-full text-white font-bold whitespace-nowrap hover:scale-105 transition-all shadow-lg"
                    >
                        Tamam, Anlaşıldı
                    </button>
                </div>
            </div>

            {/* Policy Modal */}
            {showPolicyModal && (
                <Modal title="Çerez (Cookie) Politikası" onClose={() => setShowPolicyModal(false)}>
                    <div className="text-gray-300 space-y-6 max-h-[70vh] overflow-y-auto pr-2 text-sm md:text-base">

                        <section>
                            <h4 className="text-white font-bold text-lg mb-2">1. Çerez Nedir?</h4>
                            <p>Çerezler, bir web sitesini ziyaret ettiğinizde tarayıcınız aracılığıyla cihazınıza kaydedilen küçük metin dosyalarıdır. Bu dosyalar, platformun doğru, güvenli ve size özel (kodlu giriş vb.) şekilde çalışmasını sağlar.</p>
                        </section>

                        <section>
                            <h4 className="text-white font-bold text-lg mb-2">2. Çerezlerin Kullanım Amaçları</h4>
                            <p className="mb-2">Prosektorweb olarak çerezleri aşağıdaki spesifik amaçlarla kullanırız:</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li><strong className="text-white">Kodlu Oturum Yönetimi:</strong> Size özel iletilen giriş kodunun doğrulanması, önizleme alanına güvenli erişim sağlanması ve 7 günlük (168 saat) inceleme süresi boyunca oturumun sürekliliği.</li>
                                <li><strong className="text-white">Hizmet Süreçlerinin İşletilmesi:</strong> Önizleme, sayaç (geri sayım) takibi ve teknik doğrulama süreçlerinin hatasız çalışması.</li>
                                <li><strong className="text-white">Platform Güvenliği:</strong> Yetkisiz erişimlerin önlenmesi, farklı cihazlardan giriş denemelerinin tespiti ve sistem bütünlüğünün korunması.</li>
                            </ul>
                        </section>

                        <section>
                            <h4 className="text-white font-bold text-lg mb-2">3. Kullanılan Çerez Türleri</h4>
                            <div className="space-y-3">
                                <div>
                                    <strong className="text-blue-400 block mb-1">🔹 Zorunlu Çerezler (Teknik Çerezler)</strong>
                                    <p>Bu çerezler, Prosektorweb platformunun temel işlevlerini (kod doğrulama, önizleme alanı erişimi, sayaç takibi) yerine getirebilmesi için teknik olarak zorunludur. Zorunlu çerezler olmadan size özel hazırlanan web sitesi önizlemesine erişim sağlanamaz.</p>
                                </div>
                                <div>
                                    <strong className="text-blue-400 block mb-1">🔹 İşlevsel ve Analitik Çerezler</strong>
                                    <p>Platform performansının ölçülmesi, "Kodunuz Yok mu?" veya "Bize Yazın" formlarının verimliliğinin analizi amacıyla anonim veriler toplanabilir. Bu çerezler, kullanıcı deneyimini iyileştirmek adına yalnızca açık rızanız ile kullanılır.</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h4 className="text-white font-bold text-lg mb-2">4. Çerezlerin Kontrolü ve Süre Yönetimi</h4>
                            <p>Kullanıcılar, tarayıcı ayarları üzerinden çerezleri kontrol edebilir veya silebilir. Ancak;</p>
                            <div className="mt-2 p-3 bg-red-900/20 border-l-4 border-red-500 rounded text-gray-200">
                                <strong className="text-white">Önemli Not:</strong> Zorunlu çerezlerin devre dışı bırakılması durumunda, size özel tanımlanan 168 saatlik inceleme süreci ve önizleme ekranı teknik olarak çalışmayacaktır.
                            </div>
                        </section>

                        <section>
                            <h4 className="text-white font-bold text-lg mb-2">5. Veri Güvenliği ve Gizlilik</h4>
                            <p>Çerezler aracılığıyla elde edilen veriler, KVKK Aydınlatma Metni’nde belirtilen ilkelere uygun olarak işlenir. Bu veriler, 7 günlük inceleme süreci ve aktivasyon işlemleri dışında reklam veya pazarlama amacıyla üçüncü kişilerle paylaşılmaz.</p>
                        </section>

                    </div>
                </Modal>
            )}
        </>
    );
};

export default CookieBanner;
