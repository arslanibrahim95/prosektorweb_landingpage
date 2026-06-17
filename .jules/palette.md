## 2024-06-17 - Async Form Loading Feedback
**Learning:** This app's async form components relied solely on text changes and disabled states, which lacks clear visual feedback and fails to explicitly announce the loading state to screen readers.
**Action:** Always include an accessible SVG spinner with `role="status"` and `aria-label="Loading"` alongside the text change whenever an async submit button is disabled.
