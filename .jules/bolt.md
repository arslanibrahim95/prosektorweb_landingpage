## 2026-06-27 - Throttle Scroll Event Listner
**Learning:** High-frequency events like scroll can cause performance issues if not throttled. `requestAnimationFrame` helps synchronize updates to browser paints. Using `{ passive: true }` prevents scrolling blocks.
**Action:** Always throttle high-frequency DOM events such as `scroll` or `mousemove` and use passive listeners where `preventDefault` isn't used.
