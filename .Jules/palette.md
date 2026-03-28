## 2024-05-24 - Repetitive Decorative SVGs Accessibility
**Learning:** Screen readers announce repetitive decorative SVGs (like a loop of rating stars) sequentially, which can be confusing and hide the overall meaning (e.g. reading 5 individual "star" graphics instead of "5 stars").
**Action:** Group decorative repeating icons in a container with `role="img"` and a descriptive `aria-label` (e.g., `aria-label="5 yıldız"`). Apply `aria-hidden="true"` to the individual `<svg>` elements so they are ignored by the sequential readout.
