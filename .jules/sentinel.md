## 2025-04-29 - Exposed Secrets in Vite Configuration
**Vulnerability:** The `frontend/vite.config.ts` file injected the `GEMINI_API_KEY` environment variable into the client bundle using the `define` property.
**Learning:** Using Vite's `define` for sensitive keys exposes them to the browser, as they are statically replaced in the frontend code during the build process. Even if unused, this creates a risk if developers later use the defined variables without realizing they will be exposed.
**Prevention:** Never use Vite's `define` to inject sensitive API keys or secrets. If frontend components require API access, proxy the requests through a secure backend that holds the secrets.
