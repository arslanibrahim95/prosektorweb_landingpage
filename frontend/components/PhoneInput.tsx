import React from 'react';

export const formatPhoneNumber = (value: string): string => {
  const digits = value.replace(/\D/g, '').slice(0, 11);
  if (digits.length === 0) return '';
  if (digits.length <= 4) return digits;
  if (digits.length <= 7) return `${digits.slice(0, 4)} ${digits.slice(4)}`;
  if (digits.length <= 9) return `${digits.slice(0, 4)} ${digits.slice(4, 7)} ${digits.slice(7)}`;
  return `${digits.slice(0, 4)} ${digits.slice(4, 7)} ${digits.slice(7, 9)} ${digits.slice(9)}`;
};

interface PhoneInputProps {
  id: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
  required?: boolean;
  label?: string;
  hint?: string;
  invalid?: boolean;
}

const PhoneInput: React.FC<PhoneInputProps> = ({
  id,
  value,
  onChange,
  className = '',
  required = false,
  label,
  hint = 'Örn: 0532 123 45 67',
  invalid = false,
}) => (
  <div className="space-y-2">
    {label && (
      <label htmlFor={id} className="block text-sm font-medium text-gray-300">
        {label} {required && <span className="text-orange-500">*</span>}
      </label>
    )}
    <div className="relative">
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium pointer-events-none text-lg">
        🇹🇷
      </span>
      <input
        id={id}
        required={required}
        value={value}
        onChange={(e) => onChange(formatPhoneNumber(e.target.value))}
        type="tel"
        autoComplete="tel"
        inputMode="tel"
        placeholder="05XX XXX XX XX"
        maxLength={14}
        className={`${className} pl-12`}
        aria-describedby={`${id}-hint`}
        aria-invalid={invalid ? "true" : undefined}
      />
    </div>
    <p id={`${id}-hint`} className="text-xs text-gray-500">
      {hint}
    </p>
  </div>
);

export default PhoneInput;
