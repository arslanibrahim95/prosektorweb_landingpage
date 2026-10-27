## 2025-02-27 - Memoizing Static Sections in Multi-Step Landing Pages
**Learning:** Landing pages with full-page modal states (like `currentStep` in App.tsx) cause large static sections (Features, Testimonials, FAQ) to re-render unnecessarily on every modal toggle.
**Action:** Always use `React.memo()` on static or constant-prop sections in root components that manage frequent UI state changes.
