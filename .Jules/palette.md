## 2024-05-24 - Interactive Spans in Labels
**Learning:** Using `<button>` inside `<label>` is invalid HTML. Using `<span>` with `onClick` breaks keyboard accessibility for users trying to tab to and activate modal links within checkboxes.
**Action:** When a clickable element must be nested inside a label (like terms links), use a `<span>` with `role="button"`, `tabIndex={0}`, and an `onKeyDown` handler (for Space/Enter) to ensure it's accessible without violating HTML validation rules.
