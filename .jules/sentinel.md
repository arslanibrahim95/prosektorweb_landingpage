## 2026-03-08 - Exposure of Backend Secrets via Vite Define

**Vulnerability:** The `GEMINI_API_KEY` was being injected into the client-side bundle via the `define` configuration in `vite.config.ts`.
**Learning:** Vite's `define` directive directly replaces environment variable references with string literals during the build process, exposing backend secrets to the frontend bundle if misused.
**Prevention:** Never inject backend secrets into the frontend build via `vite.config.ts` defines. Use API routes or backend proxies (e.g., Express server) to handle interactions requiring sensitive keys, keeping secrets strictly server-side.
