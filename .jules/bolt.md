## 2023-10-25 - Passive Scroll Listeners and RequestAnimationFrame
**Learning:** Performing synchronous layout queries (`getBoundingClientRect`) directly inside a `scroll` event handler causes layout thrashing and blocks the main thread, resulting in scroll jank. Passive event listeners ensure the browser doesn't wait for JavaScript execution before scrolling.
**Action:** Always throttle layout queries inside frequent events like `scroll` using `requestAnimationFrame`, and attach event listeners with `{ passive: true }` to maintain smooth 60fps scrolling.
