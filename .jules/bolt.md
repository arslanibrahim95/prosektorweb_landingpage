## 2026-07-04 - Throttling scroll events
**Learning:** Scroll event listeners that calculate layout (like `getBoundingClientRect`) can cause severe layout thrashing and drop frames if not throttled. Passive event listeners are also crucial for scroll performance.
**Action:** Always wrap expensive scroll calculations in `requestAnimationFrame` with a ticking flag, and use `{ passive: true }` on scroll event listeners.
