## 2025-04-25 - Focus Visible Rings for Interactive Elements
**Learning:** Essential interactive elements like the Hero CTA and Floating WhatsApp button lacked distinct visual focus indicators, creating severe accessibility barriers for keyboard users who rely on visible focus states to navigate the page.
**Action:** Always ensure `focus-visible:ring-*` utility classes are added to custom interactive components, particularly those using semantic `<a>` or `<button>` tags without default browser styling, to preserve keyboard navigation accessibility.
