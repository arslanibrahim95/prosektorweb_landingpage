## 2026-03-20 - Repetitive SVGs in components like Testimonials
**Learning:** Screen readers announce each decorative SVG (like 5 separate star icons) sequentially, which is annoying and redundant.
**Action:** Group these repetitive decorative elements inside a container with `role="img"` and a descriptive `aria-label`, while adding `aria-hidden="true"` to the individual SVGs to hide them.
