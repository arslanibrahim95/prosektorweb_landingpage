## 2024-06-03 - Avoid Layout Thrashing in Scroll Listeners
**Learning:** The application uses manual `getBoundingClientRect` queries in unthrottled scroll event listeners to track active sections in the Navbar. This is a severe anti-pattern for this codebase that causes main thread blocking and layout thrashing during fast scrolling.
**Action:** Always wrap expensive DOM reads (like `getBoundingClientRect`) in `requestAnimationFrame` or throttle them when responding to high-frequency events like scrolling, or better yet, prefer `IntersectionObserver` for visibility checks.
