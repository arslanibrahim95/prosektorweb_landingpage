## 2025-03-09 - Remove Exposed API Key from Frontend Config
**Vulnerability:** GEMINI_API_KEY was exposed to the frontend via the `define` block in `vite.config.ts`.
**Learning:** Build configs often mistakenly inject backend API keys into frontend environments during setup.
**Prevention:** Always verify if a secret needs to be known by the client. Remove unused env var definitions from `vite.config.ts` to prevent accidental inclusion in client-side bundles.
