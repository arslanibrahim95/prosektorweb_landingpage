## 2024-05-18 - Optimize Navbar scroll listener and static navLinks array
**Learning:** Moving static arrays like `navLinks` outside of the React component prevents redundant memory allocation on every render, and adding `{ passive: true }` to the `window.addEventListener('scroll', ...)` call prevents main-thread jank during scrolling.
**Action:** When working on components with static data arrays or scroll listeners, always extract the static data outside the component scope and ensure `passive: true` is passed to scroll event listeners.
