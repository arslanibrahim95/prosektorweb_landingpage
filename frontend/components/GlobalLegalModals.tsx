import React from 'react';
import Modal from './Modal';
import { TermsAndRefundContent, SalesAgreementContent, PrivacyPolicyContent, CookiePolicyContent } from './LegalDocs';

export type LegalModalType = 'TERMS' | 'SALES' | 'PRIVACY' | 'COOKIES' | null;

interface GlobalLegalModalsProps {
    activeModal: LegalModalType;
    onClose: () => void;
}

const GlobalLegalModals: React.FC<GlobalLegalModalsProps> = ({ activeModal, onClose }) => {
    if (!activeModal) return null;

    let title = '';
    let content = null;

    switch (activeModal) {
        case 'TERMS':
            title = 'Kullanım Koşulları ve İptal/İade Şartları';
            content = <TermsAndRefundContent />;
            break;
        case 'SALES':
            title = 'Mesafeli Satış Sözleşmesi';
            content = <SalesAgreementContent />;
            break;
        case 'PRIVACY':
            title = 'Gizlilik Politikası ve KVKK';
            content = <PrivacyPolicyContent />;
            break;
        case 'COOKIES':
            title = 'Çerez Politikası ve Aydınlatma Metni';
            content = <CookiePolicyContent />;
            break;
    }

    return (
        <Modal title={title} onClose={onClose}>
            <div className="text-gray-300 space-y-6 max-h-[60vh] overflow-y-auto pr-2 text-sm md:text-base">
                {content}
            </div>
        </Modal>
    );
};

export default GlobalLegalModals;
