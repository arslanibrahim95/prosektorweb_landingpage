## 2024-06-03 - Added Accessible Loading Spinners
**Learning:** Found multiple submit buttons that only relied on text changes (e.g., "GÖNDERİLİYOR...") to indicate loading state. This is insufficient for accessibility and doesn't provide strong visual feedback.
**Action:** Always include an accessible loading spinner (e.g., SVG with `role="status"` and `aria-label="Loading"`) alongside text updates to ensure screen-reader announcements and clear visual feedback.
