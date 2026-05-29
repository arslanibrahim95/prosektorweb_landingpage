## 2024-05-29 - Add loading spinner to async submit buttons
**Learning:** Found that long-running async requests like form submissions lacked clear visual feedback beyond text changes, and lacked screen-reader announcements (role="status").
**Action:** Always include an accessible loading spinner (SVG with role="status" and aria-label) alongside text updates when disabling submit buttons during async operations.
