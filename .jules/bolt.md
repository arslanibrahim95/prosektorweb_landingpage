## 2024-03-24 - React passive scroll listeners
**Learning:** Adding `{ passive: true }` to scroll event listeners is crucial for performance to prevent main-thread blocking, which can cause jank while scrolling.
**Action:** When adding scroll event listeners, especially globally on `window`, I will always include the `{ passive: true }` option.
