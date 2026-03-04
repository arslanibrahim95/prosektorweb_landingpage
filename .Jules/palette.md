
## 2024-05-15 - [Added Skip-to-Content Link]
**Learning:** Adding a skip-to-content link is critical for keyboard accessibility. When adding one, it's not enough to just add the link; the target element (`<main>`) must also have `tabIndex={-1}` and an outline style (like `outline-none`) to programmatically receive focus correctly without visual artifacts.
**Action:** When adding skip-to-content functionality, ensure both the source link and the target container are configured correctly for keyboard focus management.
