## 2024-03-20 - Unthrottled DOM Queries in Scroll Handlers
**Learning:** Frequent scroll events triggering synchronous `getBoundingClientRect()` calls without throttling lead to significant layout thrashing and main thread blocking, severely degrading scrolling performance.
**Action:** Always wrap scroll-triggered DOM queries and layout recalculations in `requestAnimationFrame` and use `{ passive: true }` to keep scrolling buttery smooth.
