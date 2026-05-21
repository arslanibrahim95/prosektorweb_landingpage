## 2025-03-05 - Multi-step Form Accessibility
**Learning:** Dynamic inline errors in multi-step overlays lack screen reader focus, making visual color cues insufficient for validation feedback without aria mappings.
**Action:** Always bind `aria-invalid` to inputs and use `role="alert"` for inline error messages in React dynamic form states to ensure screen reader awareness.
