## 2024-05-18 - Exposed Vite Environment Variable
**Vulnerability:** The GEMINI_API_KEY is injected into the frontend build via Vite's `define` configuration.
**Learning:** Exposing AI API keys in the frontend allows attackers to extract them. The key was injected but not directly used in visible code, suggesting a dependency requirement or legacy pattern that breaks if removed without a backend proxy.
**Prevention:** Always implement a secure backend proxy for sensitive third-party API calls instead of injecting secrets directly into the frontend build.
