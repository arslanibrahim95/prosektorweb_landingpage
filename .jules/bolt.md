## 2026-07-01 - Prevent Layout Thrashing on Scroll
**Learning:** Using `getBoundingClientRect()` inside an unthrottled `scroll` event listener causes severe layout thrashing because it forces synchronous layout calculations multiple times per frame.
**Action:** Always throttle DOM-reading scroll handlers using `requestAnimationFrame` and apply `{ passive: true }` to the event listener to unblock browser scroll compositing.
