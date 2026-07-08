## 2025-02-28 - Exposed API Keys in Vite Config
**Vulnerability:** The Gemini API keys were injected globally into the frontend application via `define` in `vite.config.ts`, exposing them to any client inspecting the built code.
**Learning:** Hardcoded or globally injected secrets in frontend build tools (like Vite's `define`) bypass environment variable separation and make secrets extractable on the client side.
**Prevention:** Never inject sensitive API keys into the frontend build via `define` unless explicitly intended to be public. Always remove them entirely if unused or route requests requiring secrets through a backend proxy.
