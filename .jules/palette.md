## 2024-05-24 - Accessibility: Missing Skip to Content Link
**Learning:** The application was missing a "Skip to Content" link, which forces keyboard users to navigate through all menu items before reaching the main content. This is a common accessibility oversight.
**Action:** When auditing accessibility, always check for the presence of a skip link in the Navbar or global layout. Use `sr-only` and `focus:not-sr-only` pattern to implement it unobtrusively.
