## 2024-05-10 - Form Feedback Accessibility
**Learning:** Forms managing sensitive or gated access like `LeadRequestFormScreen` and `LoginScreen` need explicit visual `*` indicators and actionable inline error messages mapped with `aria-invalid` to help users recover.
**Action:** Always map generic form-level errors to explicit inline alerts (`role="alert"`) and bind `aria-invalid` to specific fields during failed submission states.
