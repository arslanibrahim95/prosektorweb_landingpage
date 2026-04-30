## 2025-03-05 - Vite Define Secret Exposure
**Vulnerability:** API keys exposed via Vite's `define` configuration.
**Learning:** Simply removing the `define` block can break the application if the keys are actively used. It is necessary to verify the keys are completely unused via a codebase search, or refactor the associated frontend API calls to use a secure backend proxy or alternative.
**Prevention:** Do not use `define` in Vite to expose sensitive environment variables unless explicitly required by client-side logic, and prefer proxying to a backend.
