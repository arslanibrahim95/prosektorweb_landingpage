## 2024-05-15 - FAQ Component Accessibility
**Learning:** FAQ accordions need comprehensive ARIA attributes connecting buttons to their content panels (aria-expanded, aria-controls, role="region", aria-labelledby).
**Action:** Enhance the FAQ component to ensure proper screen reader support for expand/collapse states.
## 2024-05-15 - Required Field Indicators in Forms
**Learning:** Required form inputs lacked explicit visual `*` indicators and actionable error messages, violating accessibility guidelines for form validation.
**Action:** Always include an explicit visual `*` indicator on labels for required fields, provide actionable inline error messages using `role="alert"`, and bind `aria-invalid` on inputs to improve accessibility.
