## 2025-01-20 - Vite define secret exposure
**Vulnerability:** Exposed GEMINI_API_KEY to the client via Vite's `define` configuration block.
**Learning:** Vite's `define` replaces variables statically during the build process, meaning any secrets added here will be embedded in the client-side JavaScript, exposing them to anyone.
**Prevention:** Never pass secrets through Vite's `define` block or `VITE_` prefixed environment variables unless they are meant to be public.
