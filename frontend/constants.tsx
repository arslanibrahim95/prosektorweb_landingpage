
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
    id: 7,
    question: "Fiyat neden AKSİYON ve VİZYON paketlerinde aynı?",
    answer: "Çünkü biz emeği değil, sonucu fiyatlandırıyoruz. Paketler yapı olarak farklıdır ancak süreç, kalite ve hizmet standardı aynıdır."
  },
  {
    id: 8,
    question: "Satın alma sonrası neler oluyor?",
    answer: "Satın alma tamamlandığında web siteniz yayına alınır. Alan adı bağlantıları ve temel teknik ayarlar yapılır, süreç kapanır."
  },
  {
    id: 9,
    question: "Bu hizmet kimler için uygun?",
    answer: "Bu sistem yalnızca OSGB'ler için tasarlanmıştır. Önizleme erişimi, OSGB yetkililerine açılır ve doğrulama yapılır."
  },
  {
    id: 10,
    question: "Ödeme nasıl yapılıyor?",
    answer: "Web sitesini inceledikten sonra satın alma kararı verirsiniz. Ödeme tamamlandığında web siteniz yayına alınır."
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

export const WHATSAPP_NUMBER = "905517038599";
export const WHATSAPP_MESSAGE = "Merhaba, Prosektorweb üzerinden ulaşıyorum. OSGB'miz için dijital çözümler hakkında bilgi almak istiyorum.";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
export const DASHBOARD_URL = "https://panel.prosektorweb.com";
