## 2025-06-28 - Optimize Scroll Event Listener with requestAnimationFrame
**Learning:** Frequent scroll events trigger numerous state updates and expensive DOM operations (`getBoundingClientRect`), degrading performance.
**Action:** Use `requestAnimationFrame` with a ticking lock to throttle scroll handlers and `passive: true` to prevent scroll blocking.
