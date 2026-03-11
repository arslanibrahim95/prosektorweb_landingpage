## 2024-03-11 - Add aria-hidden to Decorative SVGs in Hero Component
**Learning:** Decorative SVGs (such as icons inside text buttons or feature grids) in the `Hero` component were missing the `aria-hidden="true"` attribute, which could cause screen readers to announce redundant elements.
**Action:** When adding decorative icons alongside text, especially in prominent sections like the Hero, always explicitly include the `aria-hidden="true"` attribute to prevent screen readers from announcing them.
