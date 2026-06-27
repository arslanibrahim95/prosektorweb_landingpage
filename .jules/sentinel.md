## 2024-05-18 - Hardcoded API Key Exposure via Vite Config
**Vulnerability:** Exposed GEMINI_API_KEY environment variable injected directly into frontend build via Vite define config.
**Learning:** Just because a key is configured for a tool in the backend or an external runner, blindly passing all API keys into the frontend build via config files can lead to secret exposure in browser bundles, even if the frontend code does not reference them directly.
**Prevention:** Only define required, safe public variables in Vite define config, and thoroughly grep the frontend codebase before doing so.
