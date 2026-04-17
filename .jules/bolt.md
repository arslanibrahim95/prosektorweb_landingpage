## 2024-05-24 - Throttling High-Frequency Scroll Events in React
**Learning:** Using `requestAnimationFrame` with a boolean tracking flag is more effective than timestamp difference checks for throttling high-frequency scroll events in React, as it ensures smooth main thread execution and correctly captures the final trailing event.
**Action:** Always wrap `scroll` or `touch` event handlers with `requestAnimationFrame` throttling and include `{ passive: true }` when adding the listener.
