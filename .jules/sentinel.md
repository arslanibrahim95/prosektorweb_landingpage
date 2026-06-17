## 2025-02-26 - API Key Leak in Vite Config
**Vulnerability:** GEMINI_API_KEY was exposed to the frontend build via Vite's `define` configuration.
**Learning:** Using `define` in Vite config replaces all occurrences of the key in the source code with the actual stringified value, effectively hardcoding secrets into the client-side bundle.
**Prevention:** Never pass sensitive backend API keys to Vite's `define` or prefix them with `VITE_`. Keep secrets strictly on the backend.
