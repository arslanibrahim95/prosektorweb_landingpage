## 2025-02-28 - Removed Exposed API Key from Vite Config
**Vulnerability:** The Vite configuration exposed `GEMINI_API_KEY` and `API_KEY` environment variables to the frontend via the `define` object. This allows any user inspecting the client-side code to access the key.
**Learning:** Exposing environment variables directly in `vite.config.ts` using `define` injects them into the global `process.env` object on the client side, leaking secrets.
**Prevention:** Avoid defining sensitive environment variables in the Vite `define` block. Use backend endpoints or secure proxies for operations requiring API keys.
