## 2024-07-07 - Semantic Buttons for Interactive Divs
**Learning:** Replacing interactive `div` elements with semantic `<button>` elements in a Tailwind CSS project provides out-of-the-box keyboard accessibility (tab index, space/enter activation) without disrupting layout, as Tailwind's preflight resets button styles making them safe drop-in replacements.
**Action:** Always prefer `<button>` elements over `div` elements with `onClick` handlers and `cursor-pointer` classes for custom UI actions.
