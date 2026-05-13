## 2025-05-13 - Form Accessibility Indicators and Alerts
**Learning:** Users with screen readers or cognitive disabilities struggle when required fields aren't explicitly marked and inline errors aren't announced dynamically. The `aria-invalid` attribute and `role="alert"` are critical.
**Action:** Always include explicit visual `*` indicators for required fields, provide actionable inline error messages using `role="alert"`, and bind `aria-invalid` to invalid inputs across all forms.
