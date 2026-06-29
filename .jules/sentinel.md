## 2025-02-27 - Exposed API Key in Frontend Vite Config
**Vulnerability:** The Gemini API key was exposed in the frontend via Vite's `define` configuration, allowing it to be bundled and accessed by clients.
**Learning:** Hardcoded or globally injected secrets in frontend build tools (like `define` in `vite.config.ts`) bypass environment separation, directly leaking sensitive keys to the public build.
**Prevention:** Avoid injecting server-side or sensitive environment variables into frontend bundles unless explicitly designed for public access (e.g., `VITE_PUBLIC_*`). If a key is unused, remove it completely to minimize risk.
