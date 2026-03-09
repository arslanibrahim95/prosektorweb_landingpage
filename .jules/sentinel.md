## 2024-03-09 - [CRITICAL] Fix API Key Exposure in Vite Config
**Vulnerability:** The Vite configuration file (`frontend/vite.config.ts`) was injecting `GEMINI_API_KEY` directly into the frontend build output via the `define` property.
**Learning:** Vite's `define` property replaces variables globally with string constants at build time. Including backend secrets like API keys directly exposes them in the clear to the client-side browser, compromising the key.
**Prevention:** Never include sensitive backend environment variables in Vite's `define` configuration. Sensitive API calls must be proxied through a secure backend server where keys can be safely managed.
