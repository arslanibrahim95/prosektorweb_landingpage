## 2024-05-17 - Readme Missing
**Learning:** Found that `README.md` and `.jules/bolt.md` did not exist. There is no `src` folder in the frontend.
**Action:** Always create `.jules/bolt.md` as instructed and explore directories correctly.

## 2024-05-18 - Scroll Event Throttling
**Learning:** Found an unthrottled scroll event listener calling `getBoundingClientRect()` on multiple elements, leading to main thread blocking and layout thrashing.
**Action:** Always wrap scroll-bound DOM measurements in `requestAnimationFrame` to sync with browser paints, and use `{ passive: true }` to improve scroll performance.
