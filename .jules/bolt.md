## 2024-05-22 - [React Memoization for Modal Flows]
**Learning:** In a single-page application heavily relying on modal overlays (like `App.tsx` here), the background components (Hero, Features, etc.) re-render unnecessarily every time the modal state changes if they are not memoized.
**Action:** Always wrap heavy, static-ish background sections in `React.memo` and ensure their props (especially event handlers) are stable using `useCallback`. This is critical for perceived performance when opening/closing modals.
