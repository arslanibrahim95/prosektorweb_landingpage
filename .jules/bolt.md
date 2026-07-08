## 2025-02-14 - Throttle scroll events and use passive listeners
**Learning:** Frequent scroll events without throttling can cause UI jank due to multiple rapid DOM recalcs (e.g., getBoundingClientRect). Adding `{ passive: true }` doesn't help with rapid consecutive recalcs but improves scroll smoothness.
**Action:** Always throttle scroll listeners manipulating states or querying DOM geometry (e.g., via `requestAnimationFrame`), and use `{ passive: true }` to prevent blocking the main thread.
