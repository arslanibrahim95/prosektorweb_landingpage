/**
 * Formats a phone number string to the Turkish mobile format: 05XX XXX XX XX.
 * Handles partial inputs gracefully.
 */
export const formatPhoneNumber = (value: string): string => {
  if (!value) return value;

  // Remove all non-digit characters
  const phoneNumber = value.replace(/[^\d]/g, '');
  const len = phoneNumber.length;

  if (len < 4) return phoneNumber;

  if (len < 7) {
    return `${phoneNumber.slice(0, 4)} ${phoneNumber.slice(4)}`.trim();
  }

  if (len < 9) {
    return `${phoneNumber.slice(0, 4)} ${phoneNumber.slice(4, 7)} ${phoneNumber.slice(7)}`.trim();
  }

  return `${phoneNumber.slice(0, 4)} ${phoneNumber.slice(4, 7)} ${phoneNumber.slice(7, 9)} ${phoneNumber.slice(9, 11)}`.trim();
};
