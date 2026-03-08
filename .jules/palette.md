## 2024-05-24 - Accessible Conditional Form Errors in Overlays
**Learning:** Forms rendered conditionally inside overlay components (like LoginScreen, LeadRequestFormScreen) often fail to announce their dynamically rendered error messages to screen readers. Relying solely on visual cues (red text) alienates visually impaired users.
**Action:** Always link conditional error messages to their corresponding inputs using `aria-invalid`, `aria-describedby`, and use `role="alert"` on the error container to ensure screen readers immediately announce validation failures when they occur.
