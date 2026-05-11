## 2024-05-11 - Form Accessibility Validation
**Learning:** Form inputs across the app lack explicit required indicators and aria-invalid bindings for error states, making it hard for screen reader users to identify validation failures.
**Action:** Always include visual `*` indicators, `role="alert"` for error text, and bind `aria-invalid` to the error state when building or updating forms.
