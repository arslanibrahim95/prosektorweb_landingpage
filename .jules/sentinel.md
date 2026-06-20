## 2025-06-20 - API Key Exposure in Vite Config
**Vulnerability:** GEMINI_API_KEY from .env was being injected directly into the client-side bundle via vite.config.ts `define` block.
**Learning:** Using Vite's `define` with environment variables exposes them in plaintext to anyone who views the client source code, bypassing any server-side protections.
**Prevention:** Never inject secret API keys into client bundles. Secrets should only be accessed server-side, and the client should proxy requests through the backend.
