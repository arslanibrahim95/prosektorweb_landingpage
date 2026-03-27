
## 2025-03-27 - Throttle scroll events properly in Navbar.tsx
**Learning:** Performing multiple DOM element queries (`document.getElementById`) and invoking synchronous layout updates via `getBoundingClientRect` on every `scroll` event can cause severe jank and block the main thread. Caching DOM nodes inside the React `useEffect` closure can lead to stale references and bugs. The true bottleneck is `getBoundingClientRect()`.
**Action:** When utilizing `useEffect` to listen to high-frequency events like `scroll`, avoid excessive DOM querying and wrap layout-triggering properties (like `getBoundingClientRect()`) within `window.requestAnimationFrame()` using a `ticking` flag to throttle updates. Additionally, using `{ passive: true }` helps browser optimize scroll performance.
