## 2023-10-27 - Extracted static data outside component body and added React.memo
**Learning:** Extracting static arrays or objects (especially ones holding JSX elements or large configurations) outside of a functional component's body prevents memory reallocation and GC overhead on every render, and allows `React.memo()` to effectively short-circuit rendering for purely static components.
**Action:** Always place purely static data structures outside the functional component definition, and wrap static presentation components with `React.memo()`.
