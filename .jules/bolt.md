## 2024-05-27 - Initial Setup
**Learning:** Initialized Bolt journal.
**Action:** Ready to journal critical learnings.

## 2024-05-27 - Passive Event Listeners
**Learning:** Found that the React component `Navbar` registered a global `window` scroll event listener without the `{ passive: true }` option, which can cause main-thread jank during scrolling on some devices as the browser waits to see if `preventDefault()` is called.
**Action:** When registering global or frequent event listeners like `scroll`, `wheel`, `touchstart`, or `touchmove` that do not need to cancel the default browser behavior, always explicitly pass `{ passive: true }` to improve scroll performance.
