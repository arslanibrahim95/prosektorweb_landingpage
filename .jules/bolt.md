## 2025-02-18 - [Scroll Handler Optimization]
**Learning:** React scroll handlers attached to `window` must be throttled, ideally with `requestAnimationFrame`, especially when they perform DOM reads like `getBoundingClientRect()`.
**Action:** Always wrap scroll listeners in a `ticking` mechanism or use `IntersectionObserver` where possible to avoid main-thread layout thrashing.
