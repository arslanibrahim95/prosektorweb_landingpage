
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

export const MOCK_CODES: Record<string, string> = {
  "DELTA2025": "Delta OSGB",
  "ALFA77": "Alfa Ortak Sağlık Birimi",
  "PROSEK": "Prosektorweb Deneme"
};
