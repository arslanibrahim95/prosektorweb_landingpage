## 2024-04-10 - Throttling Scroll Events via requestAnimationFrame
**Learning:** Naive timestamp-based throttling (`Date.now() - lastExec`) on scroll events can drop the final trailing event, causing the UI state (e.g., active section highlighting) to fall out of sync when the user stops scrolling.
**Action:** Always prefer using `requestAnimationFrame` with a boolean tracking flag (e.g., `ticking`) to decouple heavy layout recalculations (`getBoundingClientRect`) from rapid scroll events. This ensures 60fps smoothness and guarantees the final scroll position is processed.
