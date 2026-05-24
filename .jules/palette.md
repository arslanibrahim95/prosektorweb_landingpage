## 2025-02-28 - Missing Form Error Accessibility
**Learning:** Custom forms lack proper `role="alert"` for inline error messages and missing visual indicators for required fields, reducing screen reader friendliness.
**Action:** Always include explicit visual `*` indicators for required fields, provide actionable inline error messages using `role="alert"`, and bind `aria-invalid` to invalid inputs to ensure accessibility.
