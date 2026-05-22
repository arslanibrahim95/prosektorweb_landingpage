## 2025-05-22 - Add accessible error states to forms
**Learning:** React form dynamic error messages need `role="alert"` and `aria-invalid` bound to inputs for screen readers to properly announce invalid states upon submission.
**Action:** Always add `role="alert"` to error feedback containers and `aria-invalid={true/false}` to corresponding form inputs to ensure accessibility for assistive technologies.
