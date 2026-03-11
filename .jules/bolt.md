## 2024-03-XX - [Static arrays defined inside components]
**Learning:** Re-defining arrays or objects like `navLinks` inside functional components on each render causes unnecessary allocation and can trigger re-renders for child components if passed down. Same for `features` in Pricing.tsx and `data` in Features.tsx
**Action:** Extract static data to module scope (outside component functions) or memoize them if they use hooks.
