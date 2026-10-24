## 2025-03-09 - Remove Hardcoded Secrets from Frontend Config
**Vulnerability:** The Gemini API key is exposed in the frontend through the Vite configuration `define` block, which injects `process.env.API_KEY` into the client-side bundle.
**Learning:** Adding secrets to the Vite `define` config directly exposes them to the client. The frontend appears to not even use this API key, which makes this an unnecessary exposure of secrets.
**Prevention:** Never include sensitive API keys in the Vite configuration or inject them into client code using `define`. Always verify if frontends actually use the secrets and if so, refactor the application to handle API requests securely through the backend.
