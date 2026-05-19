## 2024-05-19 - Optimizing React Components and Event Listeners
**Learning:** Re-allocating static arrays on every React component render increases garbage collection overhead. Additionally, binding global scroll events without `passive: true` blocks the main thread, leading to potential scrolling jank.
**Action:** Extract static arrays and config objects outside React components. Always append `{ passive: true }` when registering `scroll` or `touch` event listeners in React or vanilla JS.
