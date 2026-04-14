## 2024-04-14 - Grouped SVG Accessibility
**Learning:** When grouping visual icons like SVGs (e.g., rating stars) for accessibility, screen readers ignore `aria-label` on plain `<div>` elements.
**Action:** Apply `role="img"`, a descriptive `aria-label`, and `title` to the parent container, and add `aria-hidden="true"` to the individual child SVGs to prevent redundant announcements.
