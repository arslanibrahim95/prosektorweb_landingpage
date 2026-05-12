## 2025-03-09 - Accessible Form Validation
**Learning:** Users with screen readers miss dynamic validation errors unless explicitly tagged, and visually impaired users rely on `aria-invalid` to identify which fields need correction.
**Action:** When building or updating forms in the frontend, always include explicit visual `*` indicators for required fields, provide actionable inline error messages using `role="alert"`, and bind `aria-invalid` to invalid inputs.
