## 2025-05-11 - Passive Scroll Listeners
**Learning:** React and vanilla JS scroll listeners can block the main thread and cause jank. The memory guidelines correctly emphasize using passive true for scroll listeners.
**Action:** Always add `{ passive: true }` to scroll/touch event listeners.
