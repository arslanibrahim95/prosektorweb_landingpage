
## 2024-03-14 - Optimize Navbar Scroll Event
**Learning:** Recreating arrays inside high-frequency event listeners like `handleScroll` in React components (e.g., `Navbar.tsx`) causes unnecessary memory allocation and garbage collection overhead.
**Action:** Always pre-allocate static arrays outside of event handlers (and outside the component body or inside `useEffect` if they don't depend on state) and use `requestAnimationFrame` to throttle scroll event execution.
