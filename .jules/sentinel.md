## 2024-05-15 - Exposed API Key in Vite Config
**Vulnerability:** A hardcoded API key (`GEMINI_API_KEY`) was being exposed to the client-side frontend bundle through the `define` property in `vite.config.ts`.
**Learning:** Vite's `define` property replaces variables in the code with their stringified values during build time. Including secrets like API keys here exposes them to any user who inspects the frontend bundle. I verified via `grep` that these keys were not even used in the frontend codebase.
**Prevention:** Never use Vite's `define` property (or similar build-time replacement tools) to inject sensitive secrets into the frontend. Ensure that sensitive keys are kept securely on the backend, or use proxy endpoints if the frontend needs to communicate with external APIs securely.
