## 2024-05-18 - Exposed API Keys in Vite Config
**Vulnerability:** Found `GEMINI_API_KEY` injected into the client bundle via Vite`s `define` configuration.
**Learning:** Even if an environment variable is not explicitly used by the frontend code, injecting it using Vite`s `define` or `process.env` shimming can expose it in the client-side JavaScript bundle, leading to potential secret leakage.
**Prevention:** Avoid defining sensitive server-side secrets in the frontend build tool`s environment injection configuration (like Vite`s `define` or Webpack`s `DefinePlugin`). Only inject variables that are safe to be public (e.g., `VITE_` prefixed variables).
