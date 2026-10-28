## 2025-02-28 - Removed Hardcoded API Key Exposure in Vite Config
**Vulnerability:** The Vite configuration (`vite.config.ts`) was explicitly exposing `GEMINI_API_KEY` to the client-side bundle via the `define` block, which could lead to unauthorized API access if an attacker inspects the frontend build.
**Learning:** Even if a secret key is unused in the application code, defining it in the build tool's static replacement configuration (like Vite's `define` or Webpack's `DefinePlugin`) injects the secret's value directly into the frontend artifacts, creating a severe exposure risk.
**Prevention:** Never map sensitive environment variables to the frontend bundle configuration unless absolutely necessary, and prefer server-side proxying for all API calls requiring authentication.
