
## 2025-02-27 - Scroll Listener Passive Option and Static Array Extraction
**Learning:** In React components like `Navbar.tsx`, defining static arrays (like `navLinks` or `sections`) inside the component body or the render logic forces unnecessary memory allocations and garbage collection pressure on every single render or scroll event. Additionally, scroll listeners without `{ passive: true }` can block the main thread and cause UI jank.
**Action:** Always extract constant configuration objects and arrays to the module level outside the component scope. When adding `scroll` or touch event listeners, consistently include `{ passive: true }` to ensure smooth scrolling performance.
