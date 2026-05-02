## 2024-03-24 - Interactive Elements Inside Labels
**Learning:** Using `<button>` inside a `<label>` is invalid HTML and can cause accessibility tree issues. When an interactive element (like a modal trigger) must be placed inside a checkbox label, it should be implemented as a `<span>` to maintain valid HTML.
**Action:** Use `role="button"`, `tabIndex={0}`, and `onKeyDown` handlers (for Enter/Space) on `<span>` elements inside labels instead of semantic `<button>` tags.
