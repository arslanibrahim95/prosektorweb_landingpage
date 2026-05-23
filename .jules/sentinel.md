## 2024-05-23 - Vite Config Exposes Secrets
**Vulnerability:** Found `GEMINI_API_KEY` directly exposed to the frontend via the `define` block in `vite.config.ts`.
**Learning:** Adding secrets in Vite's `define` section directly injects those secrets into the static, client-side build files, making them publicly readable by anyone accessing the site.
**Prevention:** Never use Vite `define` for API keys, passwords, or other secrets. Always retrieve secrets on the backend and use secure, authenticated endpoints if the frontend needs to trigger sensitive operations.
