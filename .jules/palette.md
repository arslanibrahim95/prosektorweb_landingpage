## 2024-06-29 - Semantic buttons over divs
**Learning:** When fixing accessibility issues for interactive `div` elements, replacing them with semantic `<button>` elements is highly effective. Because the project uses Tailwind CSS (which applies a CSS reset to buttons), this serves as a safe, visually identical drop-in replacement that natively handles keyboard events and focus.
**Action:** Always prefer replacing interactive `div`s directly with `<button>` elements in Tailwind-based codebases rather than manually applying `role="button"` and `tabIndex`.
