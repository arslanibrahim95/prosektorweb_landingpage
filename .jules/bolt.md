## 2025-10-25 - Unthrottled Synchronous Layouts in Scroll Events
**Learning:** Calling `getBoundingClientRect` inside an unthrottled scroll event handler causes significant performance degradation because it forces the browser to synchronously recalculate layout on every scroll frame.
**Action:** Always throttle scroll events, especially those reading layout properties, using `requestAnimationFrame` to ensure work is only done once per frame.
