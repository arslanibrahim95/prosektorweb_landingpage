## 2024-05-01 - Interactive Elements Inside Labels
**Learning:** Using a `<button>` inside a `<label>` is invalid HTML and can cause accessibility issues. However, placing interactive elements (like modal triggers) inside labels requires proper keyboard support.
**Action:** When a clickable element must be nested inside a `<label>`, use a `<span>` with `role="button"`, `tabIndex={0}`, and an `onKeyDown` handler (supporting Space and Enter) to preserve accessibility and semantics.
