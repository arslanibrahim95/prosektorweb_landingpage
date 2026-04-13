## 2024-05-24 - Accessible Rating Stars
**Learning:** Screen readers ignore `aria-label` on plain `<div>` elements. When grouping multiple SVGs (like rating stars) that represent a single value, the container needs `role="img"`, `aria-label`, and `title`. The individual SVGs must have `aria-hidden="true"` to prevent redundant/confusing announcements.
**Action:** Always apply `role="img"` along with descriptive `aria-label` and `title` to the container of grouped rating SVGs, and hide the child SVGs using `aria-hidden="true"`.
