## 2026-06-21 - Scroll Event Layout Thrashing
**Learning:** `Navbar.tsx` was executing `getBoundingClientRect()` on multiple DOM elements on every single scroll event. This forces synchronous layout calculation (layout thrashing) and blocks the main thread during scrolling.
**Action:** Always throttle scroll event listeners (e.g., using `requestAnimationFrame`) and mark them as `{ passive: true }` to prevent main thread blocking.
