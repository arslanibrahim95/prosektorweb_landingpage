## 2025-04-19 - Semantic Buttons for Interactive Elements
**Learning:** Using `<div>` elements with `onClick` handlers for custom interactive components breaks built-in keyboard navigation (Space/Enter) and screen-reader accessibility.
**Action:** Always use semantic `<button>` elements for custom interactive components, combined with `focus-visible:ring-2 focus-visible:outline-none` for accessible keyboard focus states without affecting mouse interactions.
