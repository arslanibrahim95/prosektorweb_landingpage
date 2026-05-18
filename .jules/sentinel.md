## 2025-02-24 - Exposed Secrets via Vite Define
**Vulnerability:** Vite configuration injected `GEMINI_API_KEY` into the frontend environment using `define: { 'process.env.API_KEY': ... }`.
**Learning:** Even if the key is unused in first-party code, Vite's global string replacement can inject secrets into third-party dependencies that reference `process.env.API_KEY`, inadvertently leaking backend credentials to the client.
**Prevention:** Never use Vite's `define` to inject sensitive server-side secrets. Verify secrets are not referenced in the frontend codebase before removing the configuration to prevent application breakage.
