## 2025-06-23 - Removed Exposed API Keys in Vite Config
**Vulnerability:** The Gemini API key was exposed to the public client-side bundle via the `define` property in `vite.config.ts` (`process.env.API_KEY` and `process.env.GEMINI_API_KEY`).
**Learning:** Using `define` in Vite statically replaces matching strings in the code with the provided value (like a secret key), inadvertently baking backend secrets into frontend static files.
**Prevention:** Never use Vite's `define` to expose secrets. Instead, store them in environment variables strictly loaded by the backend API and never shipped to the browser.
