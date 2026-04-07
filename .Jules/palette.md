## 2024-03-24 - Initial Memory\n**Learning:** Accessibility and UX focus.\n**Action:** Apply UX principles.

## 2024-05-24 - Grouped SVG Accessibility
**Learning:** Screen readers often ignore `aria-label` on plain `<div>` elements containing SVGs, leading to poor or redundant announcements of star ratings.
**Action:** Apply `role="img"`, `aria-label`, and `title` to the parent container of grouped icons (like stars) and add `aria-hidden="true"` to the individual child SVGs.
