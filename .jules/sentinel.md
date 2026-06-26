## 2024-06-26 - Exposed Secrets in Vite Config
**Vulnerability:** Vite configuration exposed `process.env.API_KEY` and `process.env.GEMINI_API_KEY` directly to the frontend bundle via `define`, which effectively hardcodes secrets into the client-side code where anyone can read them.
**Learning:** Secrets should never be passed to the frontend via `define` unless they are explicitly meant to be public keys. The frontend currently doesn't even use this API key, meaning it was accidentally left in the boilerplate.
**Prevention:** Remove unused API key definitions from frontend configurations and enforce secret management entirely on the backend.
