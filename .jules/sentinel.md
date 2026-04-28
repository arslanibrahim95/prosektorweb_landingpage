## 2025-02-12 - Prevent Secrets in Vite Define
**Vulnerability:** The `GEMINI_API_KEY` secret was explicitly injected into the frontend client bundle via Vite's `define` configuration.
**Learning:** Explicitly exposing sensitive environment variables using Vite's `define` or `import.meta.env` bakes the secret into the public JavaScript bundle, exposing it to all end-users.
**Prevention:** Never use Vite's `define` property to inject secrets into the frontend. Use a secure backend proxy or server-side integration when interacting with sensitive third-party APIs.
