## 2024-06-14 - Exposed Secrets via Vite Define
**Vulnerability:** The GEMINI_API_KEY was hardcoded into the frontend bundle via Vite's `define` configuration.
**Learning:** Using `define` or `process.env` replacements in Vite for sensitive keys exposes them to the client. A secure backend proxy alternative must always be implemented to handle sensitive external API calls.
**Prevention:** Avoid injecting sensitive environment variables into the frontend build. Always route sensitive API calls through a backend proxy.
