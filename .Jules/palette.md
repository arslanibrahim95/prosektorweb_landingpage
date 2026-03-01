## 2025-03-01 - Add aria-hidden to decorative SVGs
**Learning:** Found several decorative SVG elements used alongside text in buttons and lists (e.g., Hero CTA, Features) that lacked the `aria-hidden="true"` attribute.
**Action:** Always ensure that decorative `<svg>` icons used merely for visual emphasis have `aria-hidden="true"` to reduce screen reader noise.
