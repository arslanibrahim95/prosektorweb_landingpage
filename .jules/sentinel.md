## 2024-03-10 - Exposing Backend Secrets to Frontend
**Vulnerability:** GEMINI_API_KEY is being exposed to the client-side via Vite's `define` configuration.
**Learning:** Never inject backend secrets into the frontend build via Vite's `define` directive, as Vite directly replaces environment variable references with string literals, exposing secrets to the client-side bundle. This has been noted in the global memory context.
**Prevention:** Remove backend secrets from frontend build configuration (`vite.config.ts`) and ensure secrets are only used on the backend. Proxy requests requiring these secrets through the backend instead.
