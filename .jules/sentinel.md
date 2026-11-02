## 2025-03-05 - Fix Exposed Secrets in Vite Config
**Vulnerability:** Hardcoded API key injections via `define` block in `vite.config.ts`.
**Learning:** Exposing environment variables directly into the client bundle via Vite's `define` config leaks sensitive credentials to the browser, even if unused directly in source files.
**Prevention:** Avoid injecting server-side secrets like `GEMINI_API_KEY` into client builds. Remove unused definitions completely to ensure they are never bundled.
