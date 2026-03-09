## 2024-05-19 - Optimize Navbar scroll listener
**Learning:** High-frequency scroll event listeners that read DOM measurements (like `getBoundingClientRect()`) and write state (like React `setState`) can cause layout thrashing and block the main thread, leading to janky scrolling experiences.
**Action:** Always wrap state updates inside scroll/resize event listeners with `requestAnimationFrame` and a throttling flag (`ticking`), and use `{ passive: true }` when attaching the listener to avoid blocking browser scrolling.
