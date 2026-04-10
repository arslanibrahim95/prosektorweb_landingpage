## 2024-05-18 - Accessible Star Ratings
**Learning:** Grouping visual SVGs (like rating stars) for screen readers is tricky because they ignore `aria-label` on plain `<div>` elements.
**Action:** Add `role="img"`, `aria-label`, and `title` to the parent container, and add `aria-hidden="true"` to the individual child SVGs to prevent redundant announcements. Always write labels in the app's native language (e.g., 'yıldız' for Turkish).
