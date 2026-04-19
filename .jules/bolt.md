## 2024-04-19 - Scroll Event Performance
**Learning:** Naive scroll event listeners calling `getBoundingClientRect` synchronously on multiple elements block the main thread and cause layout thrashing, hurting performance.
**Action:** When registering high-frequency event listeners like `scroll` in React components, prefer using `window.requestAnimationFrame` with a boolean tracking flag (`ticking`) and always include the `{ passive: true }` option.
