## 2025-06-03 - Navbar Scroll Optimization
**Learning:** High frequency DOM reads in scroll handlers (e.g. `getBoundingClientRect`) without throttling can cause significant main thread work. Using `requestAnimationFrame` combined with a `ticking` flag effectively throttles updates to the refresh rate.
**Action:** Always inspect scroll event listeners for expensive operations and apply `requestAnimationFrame` throttling and `{ passive: true }`.
