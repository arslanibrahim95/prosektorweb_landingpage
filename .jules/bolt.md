## 2025-03-09 - Scroll Event Layout Thrashing
**Learning:** Attaching expensive DOM layout reads (like `getBoundingClientRect`) directly to the `scroll` event without throttling causes layout thrashing and blocks the main thread, leading to noticeable scroll jank on lower-end devices.
**Action:** Always wrap `scroll` event handlers that read layout properties in `requestAnimationFrame` and mark the listener as `{ passive: true }` to decouple execution from the browser's scroll rendering cycle.
