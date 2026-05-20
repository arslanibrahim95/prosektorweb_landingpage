## 2024-05-20 - Login Form Accessibility Enhancements
**Learning:** The frontend components (like `LoginScreen`) often rely exclusively on placeholder text or simple text hints for validation states, without proper ARIA attributes to guide screen readers or clear visual cues for required fields.
**Action:** Always ensure critical forms have explicit `*` indicators for required fields, link error states directly to inputs using `aria-invalid`, and implement `role="alert"` for error messages so that validation feedback is immediately perceptible to all users.
