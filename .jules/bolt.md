## 2026-03-30 - Optimize Static Arrays in React Components
**Learning:** Arrays defined inside functional components are recreated on every re-render. Moving static data (like UI features, nav links) outside the component definition eliminates this overhead.
**Action:** Always place logically stable data arrays outside of React component definitions.
