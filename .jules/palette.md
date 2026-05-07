## 2024-03-20 - Modal Links inside Checkbox Labels Accessibility
**Learning:** Placing interactive elements like modal triggers inside a `<label>` element requires special care. Standard `<button>` elements are invalid HTML inside a `<label>` and will break form semantics or trigger the checkbox unintentionally.
**Action:** When an interactive link/button must be nested inside a `<label>`, use a semantic `<span>` with `role="button"`, `tabIndex={0}`, and an `onKeyDown` handler (supporting 'Enter' and 'Space') to ensure it is keyboard accessible without producing invalid HTML.
