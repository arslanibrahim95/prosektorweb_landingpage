## 2024-03-14 - Exposing secrets via Vite define
**Vulnerability:** GEMINI_API_KEY was injected into the frontend build using Vite's `define` config.
**Learning:** Vite's `define` directly replaces environment variables with string literals, embedding backend secrets into the client-side bundle where anyone can read them.
**Prevention:** Never use `define` in `vite.config.ts` to inject backend secrets or sensitive API keys into the frontend bundle.
