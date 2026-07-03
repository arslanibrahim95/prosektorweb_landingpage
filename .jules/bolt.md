## 2024-07-03 - [Throttling Scroll Events in Navbar]
**Learning:** Found a performance bottleneck in `frontend/components/Navbar.tsx` where a scroll event listener triggers a synchronous `handleScroll` function on every scroll event frame without throttling. This calculates layout thrashing (`getBoundingClientRect()` multiple times) directly on the main thread for active section detection, causing unnecessary re-renders.
**Action:** Implemented a throttling mechanism using a timeout to reduce the frequency of execution, saving CPU cycles during scrolling.
