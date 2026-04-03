## 2025-02-28 - Rating Stars Accessibility
**Learning:** Visual rating stars (SVG icons) lack context for screen readers and can be confusing if not grouped properly.
**Action:** Always add a descriptive `aria-label` and `title` (e.g., `5 yıldız`) to the container, and use `aria-hidden="true"` on the individual SVGs to hide them from screen readers.