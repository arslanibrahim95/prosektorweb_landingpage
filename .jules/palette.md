## 2024-05-18 - Interactive Divs Accessibility
**Learning:** Found interactive `div` elements with `onClick` handlers used for primary actions. This breaks keyboard accessibility and screen reader support since divs lack semantic meaning and native focusability.
**Action:** Always replace interactive `div` elements with semantic `<button type="button">` tags. In Tailwind, this is visually identical due to CSS resets but provides built-in focus management and correct accessibility semantics.
