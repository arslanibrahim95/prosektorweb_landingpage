## 2024-10-24 - Exposed API Key in Vite Config
**Vulnerability:** The `GEMINI_API_KEY` from the environment was being injected directly into the frontend bundle via Vite's `define` configuration.
**Learning:** Even if a secret is properly stored in `.env`, using `define` in frontend build tools will embed that secret into the client-side JavaScript, exposing it to all users and potentially allowing unauthorized API usage.
**Prevention:** Never pass server-side secrets or API keys to frontend build configurations. Use backend proxies to authenticate and route requests to third-party services. When removing exposed variables, shim them to prevent ReferenceErrors in dependencies.
