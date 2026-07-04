## 2026-07-04 - Replace interactive div elements with semantic button elements
**Learning:** Interactive `div` elements used as buttons (e.g., with `onClick` handlers) lack native keyboard accessibility (tabbing and enter/space to activate) and semantic meaning for screen readers. Using them forces manual implementation of keyboard events and ARIA roles.
**Action:** Directly replace interactive `div` elements with semantic `<button>` elements. Tailwind CSS resets `<button>` styles, making it a safe, visually identical drop-in replacement while providing native accessibility out of the box.
