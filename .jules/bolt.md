## 2024-05-24 - Optimized Scroll Listener
**Learning:** `requestAnimationFrame` + `passive: true` is crucial for preventing unneeded reflows on high-frequency scroll events, especially since `getBoundingClientRect` requires layout reads.
**Action:** Use `requestAnimationFrame` with a `ticking` flag to throttle expensive DOM read operations when setting scroll listeners, and include `{ passive: true }` to keep the main thread unblocked. Additionally, always clean up `rafId` in the `useEffect` destructor.
