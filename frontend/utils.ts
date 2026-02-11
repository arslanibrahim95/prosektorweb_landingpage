
/**
 * Formats a phone number string into the format: 05XX XXX XX XX
 * Removes all non-digit characters first.
 *
 * @param value The raw input string
 * @returns The formatted phone number string
 */
export function formatPhoneNumber(value: string): string {
  // Remove all non-digit characters
  const numbers = value.replace(/\D/g, '');

  if (numbers.length === 0) return '';

  // Limit to 11 digits (05XX XXX XX XX is 11 digits)
  const limited = numbers.slice(0, 11);

  let formatted = '';

  // First group: 4 digits (e.g., 0555)
  if (limited.length > 0) {
    formatted += limited.substring(0, 4);
  }

  // Second group: 3 digits
  if (limited.length >= 5) {
    formatted += ' ' + limited.substring(4, 7);
  }

  // Third group: 2 digits
  if (limited.length >= 8) {
    formatted += ' ' + limited.substring(7, 9);
  }

  // Fourth group: 2 digits
  if (limited.length >= 10) {
    formatted += ' ' + limited.substring(9, 11);
  }

  return formatted;
}
