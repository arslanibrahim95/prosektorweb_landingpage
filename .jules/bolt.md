## 2025-02-27 - Throttle Scroll Events with requestAnimationFrame
**Learning:** Attaching heavy logic (like DOM querying and layout calculations) directly to the scroll event causes layout thrashing and negatively impacts scrolling performance.
**Action:** Use `requestAnimationFrame` and a ticking flag to throttle scroll handlers, ensuring they only run once per visual frame.
