## 2024-10-30 - Replace interactive divs with buttons
**Learning:** When replacing interactive `div` elements with `<button>` elements for keyboard accessibility, it serves as a safe and visually identical drop-in replacement because this project uses Tailwind CSS (which applies a CSS reset to buttons).
**Action:** Always replace interactive `div` elements directly with semantic `<button>` elements instead of manually adding `role='button'` and keyboard event listeners.
