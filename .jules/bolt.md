## 2026-05-08 - Navbar Scroll Performance and Memory Optimization
**Learning:** In React components, attaching scroll event listeners without '{ passive: true }' blocks the main thread, causing scroll jank. Additionally, defining static arrays inside components or frequent event handlers causes unnecessary memory allocation and garbage collection pressure.
**Action:** Always include '{ passive: true }' for scroll and touch event listeners, and hoist static arrays (like navigation links and section lists) outside of the component scope.
