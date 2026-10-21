## 2024-10-21 - Scroll Event Main Thread Blocking
**Learning:** Frequent scroll events calling `getBoundingClientRect()` synchronously block the main thread and can cause jank, especially when not using `passive: true` listeners, as the browser waits for the JS to execute before rendering the scroll.
**Action:** Always throttle scroll handlers using `requestAnimationFrame` and add `{ passive: true }` to `addEventListener` when the handler does not call `preventDefault()`.
