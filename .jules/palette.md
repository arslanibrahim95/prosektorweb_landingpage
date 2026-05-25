## 2024-05-25 - Form Accessibility Pattern
**Learning:** Custom UI flows (like `LoginScreen`) often miss critical ARIA bindings, leaving screen readers unaware of invalid states and error messages.
**Action:** Always include explicit visual `*` indicators for required fields, provide actionable inline error messages using `role="alert"`, and bind `aria-invalid` and `aria-describedby` to inputs when building or updating forms.
