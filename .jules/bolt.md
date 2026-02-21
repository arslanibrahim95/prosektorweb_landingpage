## 2026-02-21 - React Component Memoization
**Learning:** The landing page structure in `App.tsx` renders all sections (`Hero`, `Features`, etc.) simultaneously. Since `App` manages global state like `currentStep` (for modals), any modal interaction caused the entire landing page to re-render.
**Action:** Applied `React.memo` to all heavy, static landing page sections and wrapped their event handlers in `useCallback` in `App.tsx` to ensure stable props, preventing unnecessary re-renders during modal interactions.
