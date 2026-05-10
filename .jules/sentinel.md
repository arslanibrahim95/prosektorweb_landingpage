## 2026-05-10 - Exposed API Key in Vite Config
**Vulnerability:** GEMINI_API_KEY was exposed to the client bundle via Vite's `define` configuration.
**Learning:** When remediating exposed secrets in Vite's `define` configuration, verify the keys are completely unused before removing them to prevent breaking the application.
**Prevention:** Avoid passing sensitive environment variables directly to Vite's `define` option without filtering.
