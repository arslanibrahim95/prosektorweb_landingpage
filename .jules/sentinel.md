## 2026-05-01 - Exposed Secrets in Vite config
**Vulnerability:** GEMINI_API_KEY was exposed to the client via Vite's 'define' configuration.
**Learning:** Using 'define' for API keys in Vite configs directly embeds the plaintext secret into the final frontend JS bundle, leading to critical secret exposure.
**Prevention:** Remove 'define' blocks that inject secrets. If the client needs to use an API, create a proxy endpoint on the backend and have the backend securely communicate with the API.
