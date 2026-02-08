
export interface PreviewSession {
  code: string;
  companyName: string;
  expiryDate: number; // timestamp
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface ProcessStep {
  title: string;
  description: string;
  icon: string;
}
