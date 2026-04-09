## 2024-05-18 - Replacing Synchronous DOM Lookups in Scroll Events
**Learning:** Found layout thrashing caused by synchronous `getBoundingClientRect()` calls inside `window` `scroll` event listeners. High-frequency execution leads to scrolling jank because the browser is forced to recalculate layout on every scroll tick.
**Action:** Always prefer `IntersectionObserver` configured with appropriate `rootMargin` thresholds for visibility tracking rather than hooking into `scroll` and performing synchronous layout property readings.
