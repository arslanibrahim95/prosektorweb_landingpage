## 2024-07-05 - Throttling Scroll Event Listeners
**Learning:** Synchronous scroll event listeners that perform DOM reads (like `getBoundingClientRect`) can cause severe layout thrashing and block the main thread, especially on mobile devices.
**Action:** Always wrap expensive operations within scroll handlers using `requestAnimationFrame` to throttle execution to the display refresh rate, and attach listeners with `{ passive: true }` to prevent scroll blocking.
