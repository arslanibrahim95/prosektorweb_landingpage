## 2024-04-20 - Layout Thrashing in Scroll Listeners
**Learning:** Calling `getBoundingClientRect()` synchronously within an unthrottled `scroll` event listener causes severe layout thrashing, as it forces the browser to recalculate styles repeatedly on the main thread.
**Action:** Always throttle scroll listeners using `requestAnimationFrame`, capture the frame ID for cleanup, and pass `{ passive: true }` to the event listener to prevent scrolling performance degradation.
