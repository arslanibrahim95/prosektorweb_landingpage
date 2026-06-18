
## 2024-05-15 - Inconsistent Accessible Loading States
**Learning:** Discovered that while some form components (like ContactSection) had accessible loading spinners with ARIA roles, other newer flow screens (ContactFormScreen, LeadRequestFormScreen) only updated text during submission. This creates an inconsistent experience where screen readers aren't reliably notified of the loading state across the application.
**Action:** When reviewing forms for async operations, don't just check one form; verify all variations of form submission flows across different modal states for consistent ARIA status announcements.
