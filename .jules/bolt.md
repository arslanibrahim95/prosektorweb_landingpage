## 2024-05-10 - React static data & passive event listeners
**Learning:** Moving static arrays/objects out of React component scopes prevents redundant memory allocations and garbage collection on every render cycle. Additionally, passing `{ passive: true }` to window/document scroll listeners prevents the browser from waiting for JS execution before scrolling, improving main-thread performance.
**Action:** Always declare static data (like navigation links or feature lists) outside of functional components and use passive event listeners for scroll events.
