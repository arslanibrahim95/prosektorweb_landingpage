
import React from 'react';
import { FAQItem, ProcessStep } from './types';

export const FAQ_DATA: FAQItem[] = [
  {
    id: 1,
    question: "Bu web sitesini gerçekten ücretsiz mi görebiliyorum?",
    answer: "Evet. OSGB'niz için hazırlanan web sitesini 7 gün boyunca ücretsiz olarak inceleyebilirsiniz. Satın almadan önce ne alacağınızı net şekilde görmeniz amaçlanır."
  },
  {
    id: 2,
    question: "Web sitesi hazır mı, yoksa taslak mı gösteriyorsunuz?",
    answer: "Hazır. Gösterilen site bir taslak değildir. Tüm sayfaları oluşturulmuş, yayına alınabilecek gerçek bir web sitesidir."
  },
  {
    id: 3,
    question: "İnceleme sürecinde düzenleme (revize) isteyebilir miyim?",
    answer: "Evet. İnceleme süresi boyunca düzenleme talebinde bulunabilirsiniz. Toplam 3 revize hakkınız bulunur. Metin düzenlemeleri, görsel değişiklikleri ve içerik hizalamaları bu kapsamdadır."
  },
  {
    id: 4,
    question: "Fiyata neler dahil?",
    answer: "Pakete OSGB web sitesi, alan adı (1 yıl), hosting (1 yıl), SEO optimizasyonu, mobil uyumluluk ve 3 revize hakkı dahildir. Gizli ücret yok, şeffaf fiyatlandırma."
  },
  {
    id: 5,
    question: "Satın alma sonrası neler oluyor?",
    answer: "Satın alma tamamlandığında web siteniz yayına alınır. Alan adı bağlantıları ve temel teknik ayarlar yapılır, süreç kapanır."
  },
  {
    id: 6,
    question: "Bu hizmet kimler için uygun?",
    answer: "Bu sistem yalnızca OSGB'ler için tasarlanmıştır. Önizleme erişimi, OSGB yetkililerine açılır ve doğrulama yapılır."
  },
  {
    id: 7,
    question: "Ödeme nasıl yapılıyor?",
    answer: "Web sitesini inceledikten sonra satın alma kararı verirsiniz. Ödeme tamamlandığında web siteniz yayına alınır."
  },
  {
    id: 8,
    question: "Alan adı (domain) dahil mi?",
    answer: "Evet, pakete alan adı tescili 1 yıl dahildir. İstediğiniz domain müsait olduğunda tarafımızca tescil edilir ve web sitenize bağlanır."
  },
  {
    id: 9,
    question: "Hosting ve bakım ücreti var mı?",
    answer: "İlk yıl hosting dahildir. İkinci yıldan itibaren yıllık hosting ve bakım bedeli 2.500 TL'dir. Bu bedel, güvenlik güncellemeleri, yedekleme ve teknik desteği kapsar."
  },
  {
    id: 10,
    question: "Mobil cihazlarda düzgün görünüyor mu?",
    answer: "Evet. Tüm web sitelerimiz responsive (mobil uyumlu) olarak tasarlanır. Telefon, tablet ve masaüstü cihazlarda mükemmel görünüm sağlanır."
  },
  {
    id: 11,
    question: "SEO (Arama Motoru Optimizasyonu) yapılıyor mu?",
    answer: "Evet. Tüm sitelerimiz SEO uyumlu yapıda hazırlanır. Meta etiketler, hız optimizasyonları ve Google Search Console entegrasyonu dahildir."
  },
  {
    id: 12,
    question: "Ne kadar sürede teslim alırım?",
    answer: "İlk önizleme için en kısa sürede hazırız. Revizeler dahil toplam süre, taleplerinize bağlı olarak değişebilir."
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    title: "Analiz",
    description: "OSGB'nizin faaliyet alanını, hizmet verdiği bölgeleri ve sektörel ihtiyaçlarını veri odaklı analiz ederiz.",
    icon: "🔍"
  },
  {
    title: "Tasarım",
    description: "Sektörel dinamiklere tam uyumlu, tek bir 'Tam Çözüm' web sitesi hazırlarız.",
    icon: "🎨"
  },
  {
    title: "Önizleme Kodu",
    description: "Hazırlanan web sitesini inceleyebilmeniz için size özel bir erişim kodu oluşturur ve iletiriz.",
    icon: "🔑"
  },
  {
    title: "İnceleme (7 Gün)",
    description: "Web sitenizi 7 gün boyunca ücretsiz inceler, gerekirse revize taleplerinizi iletirsiniz.",
    icon: "⏱️"
  },
  {
    title: "Yayına Alma",
    description: "Karar verdiğinizde alan adı bağlantılarını ve teknik ayarları tamamlayıp yayına alırız.",
    icon: "🚀"
  }
];

// API URL helper
const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL ?? '').trim();

export function apiUrl(path: string) {
  if (!API_BASE_URL) return path;
  const base = API_BASE_URL.endsWith('/') ? API_BASE_URL.slice(0, -1) : API_BASE_URL;
  if (path.startsWith('/')) return `${base}${path}`;
  return `${base}/${path}`;
}

export const DASHBOARD_URL = "https://panel.prosektorweb.com";

export const PHONE_NUMBER = "+90 (545) 788 36 60";
export const PHONE_LINK = "tel:+905457883660";
export const WHATSAPP_LINK = "https://wa.me/905457883660";
export const INSTAGRAM_LINK = "https://www.instagram.com/prosektorweb?igsh=MTY0cHVnN2JscDc3NQ==";
