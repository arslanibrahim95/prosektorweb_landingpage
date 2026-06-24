## 2026-06-24 - Prevent API Key Leakage
**Vulnerability:** The Vite configuration exposed sensitive environment variables to the client build via define configuration.
**Learning:** Hardcoding environment variables in a frontend build process embeds them directly into the output JavaScript, exposing secrets to anyone who inspects the client bundle.
**Prevention:** Remove sensitive keys from frontend configuration since the frontend does not actually use them.
