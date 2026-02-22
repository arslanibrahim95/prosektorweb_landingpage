## 2024-05-23 - Landing Page Modal Re-renders
**Learning:** The root App component manages modal state (`currentStep`), causing the entire landing page (Hero, Features, etc.) to re-render whenever a modal opens. Since these components are heavy (images, particles), this impacts performance unnecessarily.
**Action:** Always wrap heavy static landing page sections in `React.memo` and ensure parent event handlers are memoized with `useCallback`.
