## 2024-06-19 - Scroll Event Performance
**Learning:** The Navbar was using an unthrottled scroll event listener calling `getBoundingClientRect` on multiple elements on every pixel scrolled, causing severe layout thrashing.
**Action:** Always throttle scroll events using `requestAnimationFrame` and `passive: true` when reacting to scroll position to prevent main thread blocking.
