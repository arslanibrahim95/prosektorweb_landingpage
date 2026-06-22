## 2024-06-22 - Layout Thrashing in Scroll Listeners
**Learning:** Unthrottled scroll listeners that perform DOM measurements (like getBoundingClientRect()) cause severe layout thrashing and block the main thread, dropping frames on mobile devices.
**Action:** Always throttle or debounce scroll listeners and use the { passive: true } flag to guarantee smooth scrolling performance in React applications.
