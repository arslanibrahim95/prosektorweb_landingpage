# Palette's Journal

This journal documents critical UX/accessibility learnings.

## 2024-05-22 - Skip to Content Implementation
**Learning:** Adding a hidden "Skip to Content" link that becomes visible on focus is crucial for keyboard navigation, especially for users bypassing repetitive navigation menus.
**Action:** Ensure all new projects include a skip link as a standard accessibility feature.

## 2024-05-22 - Semantic HTML for Logos
**Learning:** Using `div` with `onClick` for logos makes them inaccessible to keyboard users. Using `a href="/"` is semantic and naturally focusable.
**Action:** Always wrap logos in anchor tags.
