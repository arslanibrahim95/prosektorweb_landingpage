## 2023-10-27 - [Scroll Event Optimization]
**Learning:** React components attaching scroll event listeners directly to the window can cause unnecessary re-renders or performance drops, especially if state updates occur on every scroll tick. Debouncing, throttling, or using requestAnimationFrame can mitigate this. The Navbar component updates state on scroll synchronously.
**Action:** Optimize scroll listeners in the future by adding `requestAnimationFrame` or simple throttling logic, or only updating state if the new state differs from the current one.
