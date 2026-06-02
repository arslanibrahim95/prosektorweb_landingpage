## 2024-06-02 - Throttling Scroll Event Listeners
**Learning:** Found a scroll event listener in `Navbar.tsx` that queries layout properties (`getBoundingClientRect()`) on every single scroll tick synchronously, which leads to layout thrashing and blocks the main thread. Adding `requestAnimationFrame` for throttling reduces CPU usage significantly.
**Action:** Always throttle scroll/resize event handlers when querying layout properties using `requestAnimationFrame`, and add `{ passive: true }` when adding scroll listeners unless `preventDefault` is strictly needed.
