## 2025-06-28 - Removed Exposed Gemini API Key
**Vulnerability:** The Gemini API key was exposed to the frontend bundle via Vite's `define` configuration.
**Learning:** Including API keys in the frontend build configuration (like `define`) bakes them into the client-side code, creating a critical vulnerability, even if obfuscated.
**Prevention:** Never use Vite's `define` for sensitive keys; backend proxying should be used for all secure API communication instead.
