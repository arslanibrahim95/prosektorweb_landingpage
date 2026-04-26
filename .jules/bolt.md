## 2024-05-19 - Add passive option to scroll event listener
**Learning:** Found a scroll event listener without the `passive: true` option in `frontend/components/Navbar.tsx`. This causes the browser to wait for JavaScript execution before scrolling, leading to main-thread jank and decreased scrolling performance.
**Action:** When registering scroll or touch event listeners, always include the `{ passive: true }` option to ensure smooth scrolling and avoid main-thread jank.
