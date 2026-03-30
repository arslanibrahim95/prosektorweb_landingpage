
## 2024-05-19 - Improved Interactive Elements Keyboard Accessibility
**Learning:** Found critical action targets (like the "Web Sitemi Önizle" and "Bu tasarımı yayına al" buttons) implemented as purely visual `div` elements with `onClick` handlers. These are inaccessible to keyboard and screen reader users, violating WCAG standards.
**Action:** Always replace interactive `div` or `span` elements acting as buttons with semantic `<button type="button">` elements. Apply utility classes like `text-left` if the button defaults to center alignment and breaks the original design.
