import React from 'react';

export const TermsAndRefundContent: React.FC = () => (
    <div className="space-y-6">
        {/* KULLANIM KOŞULLARI */}
        <div className="space-y-4">
            <h3 className="text-xl font-bold text-white border-b border-white/20 pb-2">KULLANIM KOŞULLARI</h3>
            <p>Bu metin, Prosektorweb platformu üzerinden sunulan web sitesi önizleme ve yayına alma hizmetlerinin kullanım şartlarını düzenler. Platforma erişim sağlayan gerçek veya tüzel kişiler (“Kullanıcı”), aşağıda belirtilen koşulları kabul etmiş sayılır.</p>

            <section>
                <h4 className="text-white font-bold mb-1">1. Hizmetin Kapsamı</h4>
                <p>Prosektorweb, OSGB’lere özel olarak kurgulanmış "Lansman Paketi" tam çözümünü web sitesi önizlemesi olarak sunar. Sunulan önizlemeler, kullanıcının satın alma kararı vermesini kolaylaştırmak amacıyla oluşturulmuş, tüm sayfalarıyla fonksiyonel gerçek web siteleridir.</p>
            </section>

            <section>
                <h4 className="text-white font-bold mb-1">2. Önizleme Süresi ve Erişim</h4>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Önizleme alanı, kullanıcıya özel iletilen kodun ilk doğrulanma anından itibaren 7 gün (168 saat) süreyle aktiftir.</li>
                    <li>Bu süre içerisinde kullanıcı web sitesini inceleyebilir, belirlenen kapsamda düzenleme talebinde bulunabilir ve yayına alma kararını verebilir.</li>
                    <li>Önizleme süresi sonunda erişim otomatik olarak sona erer ve tasarım sistem tarafından arşivlenir.</li>
                </ul>
            </section>

            <section>
                <h4 className="text-white font-bold mb-1">3. Yeniden Aktifleştirme</h4>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Önizleme süresi sona eren tasarımlar, talep edilmesi hâlinde arşivden geri çıkartılarak yeniden aktifleştirilebilir.</li>
                    <li>Yeniden aktifleştirme işlemleri, lansman fiyatı avantajını kaybederek güncel aktivasyon bedeli (12.500 TL) ve güncel hizmet koşulları üzerinden gerçekleştirilir.</li>
                </ul>
            </section>

            <section>
                <h4 className="text-white font-bold mb-1">4. Yayına Alma ve Teknik Koşullar</h4>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Kullanıcı, önizleme süresi içerisinde tasarımı satın alarak yayına alma talebinde bulunur.</li>
                    <li>Ödeme tamamlandıktan sonra alan adı (domain) bağlantıları ve temel teknik ayarlar yapılarak site yayına alınır.</li>
                    <li>Alan adı ve hosting bilgileri kullanıcı tarafından eksiksiz iletildikten sonra teknik hazırlıklar en geç 24 saat içerisinde tamamlanır.</li>
                    <li>Alan adı ve hosting hizmetleri, web sitesi hizmet bedeline dahil değildir; bu hizmetler kullanıcı tarafından temin edilir.</li>
                </ul>
            </section>

            <section>
                <h4 className="text-white font-bold mb-1">5. Revize ve Değişiklikler</h4>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Önizleme süresi boyunca; metin düzenlemeleri, görsel değişiklikler ve içerik hizalamalarını kapsayan 3 (üç) adet revize hakkı tanınır.</li>
                    <li>Web sitesinin yayına alınmasının ardından talep edilen yeni sayfalar, yapısal değişiklikler veya ek fonksiyonlar ek hizmet kapsamında ayrıca ücretlendirilir.</li>
                </ul>
            </section>

            <section>
                <h4 className="text-white font-bold mb-1">6. Fikri Mülkiyet ve Güvenlik</h4>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Önizleme süresi boyunca sunulan tüm tasarım, içerik ve yazılımların fikri mülkiyeti Prosektorweb’e aittir.</li>
                    <li>Kullanıcı, ödeme tamamlanmadan önce bu içerikleri kopyalayamaz veya üçüncü kişilerle paylaşamaz.</li>
                    <li>Erişim kodunun üçüncü kişilerle paylaşılması yasaktır; güvenlik ihlali durumunda erişim askıya alınabilir.</li>
                </ul>
            </section>
        </div>

        {/* İPTAL VE İADE ŞARTLARI */}
        <div className="space-y-4 pt-4">
            <h3 className="text-xl font-bold text-white border-b border-white/20 pb-2">PROSEKTORWEB İPTAL VE İADE ŞARTLARI</h3>

            <section>
                <h4 className="text-white font-bold mb-1">1. Ön İzleme Süreci ve Vazgeçme Hakkı</h4>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Kullanıcıya, web sitesini satın almadan önce tüm fonksiyonlarını test edebilmesi için kullanıcıya özel iletilen kodun doğrulanmasından itibaren 7 gün (168 saat) sürecek ücretsiz bir ön izleme periyodu tanınır.</li>
                    <li>Bu 168 saatlik süre içerisinde kullanıcı, herhangi bir ödeme yapmaksızın ve hiçbir yasal yükümlülük altına girmeksizin hizmetten yararlanmaktan vazgeçebilir.</li>
                    <li>Ön izleme süresi sonunda satın alma onayı verilmezse, hazırlanan çalışma sistem tarafından otomatik olarak arşivlenir ve kullanıcıya herhangi bir borç tahakkuk ettirilmez.</li>
                </ul>
            </section>

            <section>
                <h4 className="text-white font-bold mb-1">2. Cayma Hakkı İstisnası ve İade Kısıtlaması</h4>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Prosektorweb tarafından sunulan hizmet, 6502 sayılı Tüketicinin Korunması Hakkında Kanun uyarınca "tüketicinin istekleri veya kişisel ihtiyaçları doğrultusunda hazırlanan ve elektronik ortamda anında ifa edilen dijital hizmetler" kapsamındadır.</li>
                    <li>Kullanıcının ödeme işlemini tamamlayarak yayına alma sürecini başlatmasıyla birlikte hizmet ifası gerçekleşmiş sayılır.</li>
                    <li>Mevzuat gereği, elektronik ortamda anında teslim edilen bu tür kişiye özel dijital içeriklerde cayma hakkı bulunmamaktadır.</li>
                    <li>Bu nedenle, ödeme işlemi tamamlandıktan ve teknik aktivasyon süreci başladıktan sonra hizmetin iptali veya ücret iadesi mümkün değildir.</li>
                </ul>
            </section>

            <section>
                <h4 className="text-white font-bold mb-1">3. Yeniden Aktivasyon Bedeli ve Fiyatlandırma</h4>
                <ul className="list-disc pl-5 space-y-1">
                    <li>7 günlük (168 saat) ön izleme süresi dolan projelerin arşivden geri çağrılması için ödenen 12.500 TL (veya güncel aktivasyon bedeli), teknik bir yeniden kurulum maliyeti olup iade kapsamında değerlendirilmez.</li>
                    <li>İlk ön izleme süresindeki 7.000 TL + KDV tutarındaki lansman fiyatı avantajı, sürenin dolmasıyla geçerliliğini yitirir ve bu durum bir iade veya indirim gerekçesi oluşturmaz.</li>
                </ul>
            </section>

            <section>
                <h4 className="text-white font-bold mb-1">4. Teknik Sorumluluk ve Revize Hakları</h4>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Ön izleme süresi içerisinde tanınan revize hakları kullanılarak onay verilen tasarım, satın alma anında olduğu haliyle yayına alınır.</li>
                    <li>Yayına alma onayından sonra talep edilen yapısal değişiklikler, yeni sayfa eklemeleri veya ek fonksiyonlar "ek hizmet" kapsamına girdiğinden ayrıca ücretlendirilir ve ana hizmet bedelinin iadesine konu edilemez.</li>
                </ul>
            </section>
        </div>

        <div className="mt-4 text-sm border-l-2 border-red-500 pl-3 bg-white/5 p-2 rounded">
            <span className="text-red-500 font-bold">Kritik Bilgi:</span> Bu hizmet 168 saatlik inceleme süresinden sonra ALICI onayıyla başlatıldığı ve kişiye özel dijital içerik olduğu için cayma hakkı kapsamı dışındadır.
        </div>
    </div>
);

export const SalesAgreementContent: React.FC = () => (
    <div className="space-y-6">
        <h3 className="text-xl font-bold text-white border-b border-white/20 pb-2">MESAFELİ SATIŞ SÖZLEŞMESİ – REVİZE METİN</h3>

        <section>
            <h4 className="text-white font-bold mb-1">1. Taraflar</h4>
            <p>İşbu Mesafeli Satış Sözleşmesi (“Sözleşme”);</p>
            <ul className="list-disc pl-5 space-y-1">
                <li><strong className="text-white">SATICI:</strong> Prosektorweb Dijital Teknoloji Merkezi (E-posta: hello@prosektorweb.com)</li>
                <li><strong className="text-white">ALICI:</strong> Prosektorweb platformu üzerinden hizmet satın alan gerçek veya tüzel kişi arasında, elektronik ortamda akdedilmiştir.</li>
            </ul>
        </section>

        <section>
            <h4 className="text-white font-bold mb-1">2. Sözleşmenin Konusu</h4>
            <p>İşbu sözleşmenin konusu; ALICI’nın, Prosektorweb tarafından sunulan OSGB’ye özel tam kapsamlı web sitesi yayına alma hizmetini satın almasına ilişkin tarafların hak ve yükümlülüklerinin belirlenmesidir.</p>
        </section>

        <section>
            <h4 className="text-white font-bold mb-1">3. Hizmetin Tanımı ve Kapsamı</h4>
            <ul className="list-disc pl-5 space-y-1">
                <li>Sunulan hizmet; ALICI için 168 saatlik (7 gün) önizleme süreci tamamlanmış olan "Lansman Paketi" tam çözümünün yayına alınmasını kapsayan kişiye özel dijital hizmettir.</li>
                <li>Önizleme sürecinde sunulan web sitesi, satın alma kararı verilmesi hâlinde aynı yapı ve içerikle yayına alınır.</li>
                <li>Hizmet kapsamında sunulan "Tek Paket", OSGB mevzuatına uygun sektörel içerik yapısını ve teknik altyapıyı bir bütün olarak içerir.</li>
            </ul>
        </section>

        <section>
            <h4 className="text-white font-bold mb-1">4. Fiyatlandırma ve Geçerlilik Koşulları</h4>
            <ul className="list-disc pl-5 space-y-1">
                <li><strong className="text-white">Lansman Fiyatı:</strong> 7.000 TL + KDV tutarındaki bedel, yalnızca kullanıcıya özel tanımlanan 168 saatlik (7 gün) ücretsiz önizleme süresi içerisinde yapılan satın alımlarda geçerlidir.</li>
                <li><strong className="text-white">Yeniden Aktivasyon Bedeli:</strong> Önizleme süresi sona eren ve arşive kaldırılan tasarımların yeniden aktifleştirilmesi talebinde, lansman avantajı sona ererek 12.500 TL tutarındaki güncel aktivasyon bedeli uygulanır.</li>
                <li>ALICI, ödeme işlemini tamamlamadan önce güncel fiyat ve süre koşullarını bildiğini kabul eder.</li>
            </ul>
        </section>

        <section>
            <h4 className="text-white font-bold mb-1">5. İfa ve Teslim Koşulları</h4>
            <ul className="list-disc pl-5 space-y-1">
                <li>ALICI’nın, “Bu tasarımı yayına al” adımı ile ödeme işlemini tamamlamasıyla hizmet ifasına başlanır.</li>
                <li>ALICI tarafından alan adı (domain) ve hosting bilgilerinin eksiksiz iletilmesini takiben, teknik hazırlıkların tamamlanmasıyla web sitesi en geç 24 saat içerisinde yayına alınır.</li>
                <li>Alan adı ve hosting hizmetleri hizmet bedeline dahil değildir; bu hizmetler bulunmaması hâlinde ALICI tarafından temin edilir.</li>
            </ul>
        </section>

        <section>
            <h4 className="text-white font-bold mb-1">6. Cayma Hakkı İstisnası</h4>
            <ul className="list-disc pl-5 space-y-1">
                <li>6502 sayılı Tüketicinin Korunması Hakkında Kanun uyarınca; ALICI’ya özel olarak kurgulanan ve elektronik ortamda anında ifa edilen dijital hizmetlerde cayma hakkı bulunmamaktadır.</li>
                <li>7 günlük ücretsiz inceleme süreci, ALICI’ya satın alma öncesi tanınan bir deneyimleme hakkı olup, ödeme sonrası dijital içerik teslimatı gerçekleştiğinden iade mümkün değildir.</li>
            </ul>
        </section>

        <section>
            <h4 className="text-white font-bold mb-1">7. Revize ve Ek Hizmet Sınırları</h4>
            <ul className="list-disc pl-5 space-y-1">
                <li>Önizleme süreci kapsamında tanınan 3 adet revize hakkı, yalnızca inceleme süresi (168 saat) ile sınırlıdır.</li>
                <li>Yayına alma onayından sonra talep edilen yeni sayfa eklemeleri, yapısal değişiklikler veya ek fonksiyonlar ek hizmet kapsamında ayrıca ücretlendirilir.</li>
            </ul>
        </section>

        <section>
            <h4 className="text-white font-bold mb-1">8. Fikri Mülkiyet Hakları</h4>
            <ul className="list-disc pl-5 space-y-1">
                <li>Önizleme süreci boyunca sunulan tüm tasarım, içerik ve yazılımların fikri mülkiyeti Prosektorweb’e aittir.</li>
                <li>Ödeme tamamlanmadan önce içeriklerin kopyalanması, çoğaltılması veya paylaşılması yasaktır.</li>
                <li>Kullanım hakkı, ödemenin tam olarak gerçekleşmesiyle ALICI’ya devredilir.</li>
            </ul>
        </section>

        <section>
            <h4 className="text-white font-bold mb-1">9. Yürürlük</h4>
            <p>İşbu sözleşme, ALICI’nın satın alma ekranındaki onay kutusunu işaretleyerek elektronik ortamda onaylamasıyla yürürlüğe girer.</p>
        </section>

        <div className="mt-4 text-sm border-l-2 border-blue-500 pl-3 bg-white/5 p-2 rounded">
            <span className="text-blue-500 font-bold">Bilgi:</span> Seçilen tasarım, ödeme sonrası 24 saat içinde teknik aktivasyon sürecine alınır.
        </div>
    </div>
);

export const PrivacyPolicyContent: React.FC = () => (
    <div className="space-y-6">
        <div className="space-y-4">
            <h3 className="text-xl font-bold text-white border-b border-white/20 pb-2">BÖLÜM 1 – GİZLİLİK POLİTİKASI</h3>

            <section>
                <h4 className="text-white font-bold mb-1">1. Gizliliğe Yaklaşımımız</h4>
                <p>Prosektorweb olarak, platformumuzu kullanan kişi ve kurumların gizliliğine önem veririz. Kullanıcılara ait kişisel veriler, firma bilgileri ve hizmet kapsamında paylaşılan içerikler gizli kabul edilir. Bu bilgiler; izinsiz şekilde üçüncü kişilerle paylaşılmaz, ticari amaçlarla satılmaz ve hizmet kapsamı dışında kullanılmaz.</p>
            </section>

            <section>
                <h4 className="text-white font-bold mb-1">2. Bilgilerin Kullanımı</h4>
                <p className="mb-2">Platform üzerinden paylaşılan bilgiler yalnızca aşağıdaki amaçlarla kullanılır:</p>
                <ul className="list-disc pl-5 space-y-1">
                    <li>OSGB’ye özel web sitesi önizlemesinin oluşturulması.</li>
                    <li>Önizleme erişim kodunun üretilmesi, WhatsApp veya e-posta yoluyla iletilmesi.</li>
                    <li>168 saatlik (7 günlük) inceleme süresinin ve sayaç takibinin yönetilmesi.</li>
                    <li>Hizmet süreçlerinin yürütülmesi ve kullanıcı ile iletişim kurulması.</li>
                    <li>Teknik güvenliğin sağlanması ve yetkisiz erişimlerin önlenmesi.</li>
                </ul>
            </section>

            <section>
                <h4 className="text-white font-bold mb-1">3. Veri Güvenliği</h4>
                <p>Kullanıcı verilerinin korunması amacıyla teknik ve idari güvenlik önlemleri uygulanır. Sistem erişimleri yetkilendirme (kod doğrulama) esasına dayanır ve veriler güvenli altyapılar üzerinde saklanır.</p>
            </section>

            <section>
                <h4 className="text-white font-bold mb-1">4. Ödeme Güvenliği</h4>
                <p>Lansman paketi (7.000 TL + KDV) veya Yeniden Aktivasyon bedeli (12.500 TL) ödemeleri sırasında kullanılan kart bilgileri Prosektorweb tarafından görüntülenmez veya saklanmaz. Tüm işlemler, güvenli ödeme altyapıları üzerinden gerçekleştirilir.</p>
            </section>
        </div>

        <div className="space-y-4 pt-4">
            <h3 className="text-xl font-bold text-white border-b border-white/20 pb-2">BÖLÜM 2 – KVKK AYDINLATMA METNİ</h3>
            <p className="font-bold text-white">Veri Sorumlusu: Prosektorweb Dijital Teknoloji Merkezi.</p>

            <section>
                <h4 className="text-white font-bold mb-1">1. İşlenen Kişisel Veriler</h4>
                <p className="mb-2">Platform ve önizleme alanı üzerinden aşağıdaki veriler işlenmektedir:</p>
                <ul className="list-disc pl-5 space-y-1">
                    <li><strong className="text-gray-400">Kimlik ve İletişim:</strong> Ad, soyad, telefon numarası ve e-posta adresi.</li>
                    <li><strong className="text-gray-400">Kullanıcı İşlem:</strong> Önizleme erişim kodu, oturum kayıtları ve sayaç üzerindeki süre takibi hareketleri.</li>
                    <li><strong className="text-gray-400">Firma Bilgileri:</strong> OSGB adı ve hizmet kapsamında sağlanan sektörel bilgiler.</li>
                </ul>
            </section>

            <section>
                <h4 className="text-white font-bold mb-1">2. Kişisel Verilerin İşlenme Amaçları</h4>
                <p className="mb-2">Kişisel verileriniz, KVKK’nın 5. maddesi uyarınca şu amaçlarla işlenir:</p>
                <ul className="list-disc pl-5 space-y-1">
                    <li>OSGB’ye özel hazırlanan "Lansman Paketi" önizlemesinin sunulması.</li>
                    <li>7 günlük (168 saat) ücretsiz inceleme sürecinin yönetilmesi.</li>
                    <li>Satın alma gerçekleşmezse tasarımın arşivlenmesi; satın alma durumunda teknik aktivasyonun tamamlanması.</li>
                    <li>Platform güvenliğinin ve kod doğrulama sisteminin işletilmesi.</li>
                </ul>
            </section>

            <section>
                <h4 className="text-white font-bold mb-1">3. Kişisel Verilerin Aktarılması</h4>
                <p>Kişisel verileriniz; yasal yükümlülükler kapsamında yetkili kamu kurumlarına veya teknik altyapı hizmeti sağlayan sınırlı iş ortaklarına aktarılabilir. Verileriniz reklam veya pazarlama amacıyla üçüncü kişilerle paylaşılmaz.</p>
            </section>

            <section>
                <h4 className="text-white font-bold mb-1">4. Kişisel Verilerin Saklanma Süresi</h4>
                <ul className="list-disc pl-5 space-y-1">
                    <li><strong className="text-gray-400">İnceleme Sürecinde:</strong> Veriler, 168 saatlik önizleme süresi boyunca aktif olarak işlenir.</li>
                    <li><strong className="text-gray-400">Satın Alma Gerçekleşmezse:</strong> 7 günlük süre sonunda web sitesi arşivlenir. Yeniden aktivasyon talebi gelmezse veriler yasal süreler sonunda silinir.</li>
                    <li><strong className="text-gray-400">Satın Alma Gerçekleşirse:</strong> Veriler, yasal yükümlülükler ve ticari zamanaşımı süreleri boyunca saklanır.</li>
                </ul>
            </section>

            <section>
                <h4 className="text-white font-bold mb-1">5. Veri Sahibi Hakları</h4>
                <p>KVKK’nın 11. maddesi uyarınca verilerinizin işlenip işlenmediğini öğrenme, düzeltme veya silme talebinde bulunma haklarına sahipsiniz. Taleplerinizi <a href="mailto:hello@prosektorweb.com" className="text-blue-400 hover:underline">hello@prosektorweb.com</a> adresi üzerinden iletebilirsiniz.</p>
            </section>
        </div>
    </div>
);


export const CookiePolicyContent: React.FC = () => (
    <div className="space-y-6">
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
);

