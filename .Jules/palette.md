## 2024-04-06 - Accessible Rating Stars
**Learning:** Grouping multiple visual SVG icons (like rating stars) without wrapping them in an accessible container causes screen readers to redundantly announce each icon or ignore them entirely.
**Action:** Apply `role="img"`, a descriptive `aria-label`, and `title` to the parent container, and add `aria-hidden="true"` to the individual child SVGs.
