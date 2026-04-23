## 2024-05-30 - Scroll Event Listener Performance
**Learning:** Registering scroll or touch event listeners without the `{ passive: true }` option can cause the browser to wait for JavaScript execution before scrolling, leading to jank.
**Action:** Always include the `{ passive: true }` option when registering scroll or touch event listeners for performance optimizations, as it guarantees the listener will not call `preventDefault()`.
