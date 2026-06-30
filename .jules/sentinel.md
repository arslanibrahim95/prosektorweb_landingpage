## 2025-03-05 - Remove Exposed Gemini API Key in Frontend Config
**Vulnerability:** The Gemini API key (GEMINI_API_KEY) was being exposed to the client-side code via Vite's `define` configuration.
**Learning:** Hardcoding or exposing server-side secrets in the frontend build configuration (like Vite's `define`) allows them to be bundled into the client-side JavaScript, leading to potential unauthorized access and quota abuse. It existed because of leftover AI code generation artifacts.
**Prevention:** Always verify that API keys defined in frontend config files are strictly public (e.g., prefixed with `VITE_` and not containing sensitive privileges) and that sensitive keys are kept securely on the backend.
