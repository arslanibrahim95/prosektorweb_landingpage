## 2024-05-15 - ARIA attributes for star rating icons
**Learning:** When rendering repeated SVGs like rating stars, screen readers might announce them multiple times if they lack context. Using `aria-hidden="true"` on individual icons and a descriptive `aria-label` on the parent container improves accessibility.
**Action:** Applied grouping and `aria-hidden` attributes to star rating icons in Testimonials component.
