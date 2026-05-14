## 2024-05-18 - Missing passive flag on scroll listeners
**Learning:** Found a missing `{ passive: true }` flag in `window.addEventListener('scroll')` inside `Navbar.tsx`. This missing flag forces the browser to wait for JS execution before scrolling, which can lead to scroll jank on slow devices.
**Action:** Always include `{ passive: true }` when adding scroll or touch event listeners, as documented in memory.
