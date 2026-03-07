## 2026-03-07 - [Skip to Content Implementation]
**Learning:** Adding a visible-on-focus 'Skip to Content' link is crucial for keyboard accessibility, but it requires the target element to have an id and `tabIndex={-1}` to explicitly capture focus without becoming part of the natural tab sequence, especially when routing past a fixed navigation bar.
**Action:** Always verify that 'Skip to' targets have `tabIndex={-1}` and `outline-none` (or similar) to avoid unsightly focus rings on non-interactive containers while successfully moving keyboard focus to the main content.
