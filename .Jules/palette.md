## 2024-05-24 - Repetitive Decorative SVGs Accessibility
**Learning:** Repetitive decorative SVGs (like rating stars) can cause screen readers to read out sequential "image" or unhelpful labels multiple times, degrading the experience.
**Action:** Group repetitive decorative SVGs inside a container with `role="img"` and a descriptive `aria-label`, while adding `aria-hidden="true"` to the individual SVGs to hide them from sequential readouts.
