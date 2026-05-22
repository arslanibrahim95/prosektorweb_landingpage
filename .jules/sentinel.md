## 2025-05-24 - Exposed Secret in Vite Config
**Vulnerability:** GEMINI_API_KEY was exposed to the frontend bundle via Vite's `define` configuration.
**Learning:** Unused secrets were injected into the client-side build process by defining `process.env.GEMINI_API_KEY` in `vite.config.ts`, making it possible for attackers to extract the API key from the frontend bundle.
**Prevention:** Never use Vite's `define` to inject sensitive server-side secrets like API keys into the frontend build. Ensure proper codebase searches are done before injecting or when cleaning up env variables.
