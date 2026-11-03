## 2025-02-12 - Extract Static Data and Memoize Components
**Learning:** Defining static arrays containing JSX elements inside a functional component causes unnecessary garbage collection overhead and object recreation on every render.
**Action:** Always extract static arrays/objects outside the functional component body and wrap static presentation components with `React.memo()` to prevent unnecessary re-renders.
