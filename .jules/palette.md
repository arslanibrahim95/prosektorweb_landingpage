## 2024-06-15 - Adding accessible loading spinners to async submit buttons
**Learning:** Disabling form submit buttons during async operations without an accessible loading spinner (like an SVG with `role="status"` and `aria-label="Loading"`) alongside text updates fails to provide clear visual feedback and screen-reader announcements.
**Action:** When disabling form submit buttons during async operations (e.g., when `isSubmitting` is true), always include an accessible loading spinner alongside text updates.
