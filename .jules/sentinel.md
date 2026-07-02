## 2025-07-02 - Removed exposed API key from Vite config
**Vulnerability:** GEMINI_API_KEY was exposed to the client-side via Vite's `define` configuration.
**Learning:** Exposing backend API keys in client-side configuration files bakes them into the JavaScript bundle, making them accessible to any user.
**Prevention:** Avoid putting sensitive API keys in the frontend build configuration. If the client needs access to third-party services that require secrets, the calls should be routed through a backend proxy.
