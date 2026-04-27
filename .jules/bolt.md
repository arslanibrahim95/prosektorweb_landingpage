## 2024-04-27 - Add passive listener to scroll events
**Learning:** Adding `{ passive: true }` to scroll and touch event listeners is critical because it tells the browser that the listener will not call `preventDefault()`, allowing the browser to scroll the page immediately without waiting for JavaScript execution, which prevents main-thread jank.
**Action:** Always include `{ passive: true }` when registering `scroll` or touch event listeners.
