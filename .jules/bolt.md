## 2024-05-14 - React Navbar Active Section Bug
**Learning:** Found an unnecessary scroll event listener inside the `Navbar` component that tracks the active section for navigation highlighting. This causes frequent re-renders of the entire `Navbar` (including the logo and buttons) on every scroll tick.
**Action:** Move static data arrays like `navLinks` outside the component scope to prevent memory reallocation on every scroll-triggered re-render, and adding `{ passive: true }` to the scroll event listener as a standard web performance best practice to prevent scroll jank on the main thread.
