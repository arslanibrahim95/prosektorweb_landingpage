## 2024-10-31 - Scroll Event Throttling
**Learning:** Unthrottled scroll events triggering DOM reads like getBoundingClientRect cause severe layout thrashing.
**Action:** Always throttle scroll handlers using requestAnimationFrame.
