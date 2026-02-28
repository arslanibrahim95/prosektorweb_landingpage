## 2024-05-18 - Remove exposed Gemini API Key from Vite config
**Vulnerability:** The `GEMINI_API_KEY` is exposed to the frontend via `vite.config.ts` `define`. This means the secret key could be leaked in the client-side bundle.
**Learning:** Vite's `define` directive directly replaces instances of `process.env.GEMINI_API_KEY` with the actual string value of the key during the build process, exposing it to anyone who inspects the compiled JavaScript.
**Prevention:** Never use Vite's `define` or `import.meta.env` for secrets. Any code requiring sensitive keys should be moved to a secure backend service, and the frontend should interact with that service instead.
