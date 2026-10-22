## 2024-10-22 - Optimize scroll listener performance
**Learning:** Calling getBoundingClientRect() synchronously inside high-frequency scroll events without requestAnimationFrame or throttling leads to layout thrashing and main thread blocking, which degrades scrolling frame rate.
**Action:** Always wrap scroll-bound DOM measurements (like getBoundingClientRect) in requestAnimationFrame and use { passive: true } on scroll event listeners to maintain 60fps scrolling.
