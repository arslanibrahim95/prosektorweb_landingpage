## 2024-06-15 - Exposed API Key in Vite Config
**Vulnerability:** The Gemini API key was exposed to the public frontend bundle via Vite's `define` configuration.
**Learning:** Using Vite's `define` configuration with `process.env` variables injects them into the client-side bundle, making secrets publicly accessible even if they are not used in the application code.
**Prevention:** Never use Vite's `define` configuration for secrets or API keys. Always keep sensitive keys on the server and use a secure backend proxy for API requests.
