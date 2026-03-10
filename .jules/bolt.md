## 2024-03-10 - React Arrays Creation Inside Components
**Learning:** Static arrays or data structures defined inside React components are re-created on every render cycle, which causes unnecessary overhead and triggers re-renders on child components if passed as props. Moving these static definitions outside the component function (or memoizing them) provides measurable performance improvements.
**Action:** Always move completely static data arrays (e.g., `navLinks`, `testimonials`, `FAQ_DATA`) outside of component function scope if they don't depend on component props or state.
