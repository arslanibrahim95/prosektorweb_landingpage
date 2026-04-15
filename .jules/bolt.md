## 2026-04-15 - Scroll Event Throttling with requestAnimationFrame
**Learning:** Naive timestamp difference checks for high-frequency events like scroll can drop the final trailing event state. Using window.requestAnimationFrame with a boolean tracking flag ensures smooth main thread execution and guarantees the final state is captured.
**Action:** Always prefer window.requestAnimationFrame with a ticking flag and { passive: true } for scroll/touch events to optimize performance and prevent dropped updates.
