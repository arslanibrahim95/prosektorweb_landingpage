## 2025-02-27 - Remove Exposed API Keys in Vite Config
**Vulnerability:** Found `process.env.API_KEY` and `process.env.GEMINI_API_KEY` populated with `env.GEMINI_API_KEY` inside `frontend/vite.config.ts`. This would embed the API key into the client-side JavaScript bundle.
**Learning:** Hardcoding or embedding secrets in frontend configurations, even if unused by the application code itself, can expose them through the build tool's static replacement process or source maps.
**Prevention:** Never include sensitive backend keys in frontend build configurations. Use environment variables explicitly meant for public consumption (e.g., `VITE_...`) only when the key is safe to be public. Avoid using `define` for secrets.
