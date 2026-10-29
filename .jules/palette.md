## 2025-01-23 - Interactive Div Elements to Semantic Buttons
**Learning:** Using `div` with `onClick` for interactive elements lacks keyboard accessibility and semantic meaning. Replacing them with semantic `button` elements is an easy win for accessibility, especially when using Tailwind CSS which applies a CSS reset to buttons, making it a safe visual drop-in replacement.
**Action:** When fixing accessibility issues for interactive `div` elements, directly replace them with semantic `<button>` elements rather than adding `role='button'` and manual keyboard event listeners.
