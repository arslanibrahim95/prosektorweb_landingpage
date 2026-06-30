## 2025-03-09 - Scroll Listener Optimization
**Learning:** Using `getBoundingClientRect()` within a synchronous scroll event handler causes severe layout thrashing and main thread blocking, as scroll events can fire dozens of times per second.
**Action:** Always throttle scroll event handlers using `window.requestAnimationFrame` and `ticking` flags to decouple layout recalculations from the raw scroll events. Additionally, always use `{ passive: true }` when adding scroll listeners to avoid blocking scrolling performance.
