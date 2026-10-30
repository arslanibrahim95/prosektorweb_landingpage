## 2024-03-24 - Exposed Secret in Vite Config
**Vulnerability:** The frontend `vite.config.ts` was exposing the `GEMINI_API_KEY` to the client side via the `define` block.
**Learning:** `process.env` replacements in Vite's `define` config are statically replaced during build time, meaning any secrets stringified here will be fully exposed in the final JS bundle.
**Prevention:** Never inject raw API keys or secrets into the frontend client build. Always keep sensitive keys on the backend and make API calls from the client to the backend instead.
