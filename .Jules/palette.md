## 2024-05-24 - Grouping visual icons for screen readers
**Learning:** When grouping multiple visual icons (like rating stars), placing aria-label on the individual SVGs causes redundant or broken announcements. Furthermore, screen readers ignore aria-label on plain divs.
**Action:** Apply role="img", aria-label, and title to the parent container, and add aria-hidden="true" to the child SVGs to present the group as a single, accessible visual element.
