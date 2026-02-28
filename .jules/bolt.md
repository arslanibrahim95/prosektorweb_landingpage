
## 2025-02-28 - [Frontend Event Optimization]
**Learning:** Attaching `window.addEventListener('scroll')` without throttling and performing DOM queries (`getBoundingClientRect()`) causes massive layout thrashing and executes synchronously on the main thread, especially when a static array is re-initialized on every single scroll tick.
**Action:** Always extract static configuration arrays out of event handlers, use `requestAnimationFrame` with a `ticking` boolean flag to throttle high-frequency events, and attach `{ passive: true }` to the event listener to ensure smooth browser scrolling.
