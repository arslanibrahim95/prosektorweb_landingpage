## 2024-05-24 - Exposed Backend Secrets in Frontend Build
**Vulnerability:** The `vite.config.ts` was injecting `GEMINI_API_KEY` directly into the client-side code using `define`.
**Learning:** Vite's `define` replaces environment variables with string literals during the build process, exposing backend secrets to the frontend.
**Prevention:** Never inject backend secrets into the frontend build. Only use `VITE_` prefixed variables for frontend environment variables.
