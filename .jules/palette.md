## 2024-06-02 - Accessible Loading States Pattern
**Learning:** Found a recurring accessibility pattern where form submit buttons in the app's multi-step flow (`App.tsx`) update text during async operations but lack accessible loading spinners (`role="status"`, `aria-label="Yükleniyor"`). Screen readers may miss these transient state changes, and visual feedback is limited.
**Action:** When implementing async form submissions, always provide an SVG spinner with `role="status"` and an `aria-label` alongside the text update to ensure clear visual feedback and screen-reader announcements.
