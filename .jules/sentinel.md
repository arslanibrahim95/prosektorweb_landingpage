## 2025-03-01 - Exposed Backend Secret in Frontend Build via Vite config
**Vulnerability:** The backend `GEMINI_API_KEY` was being explicitly injected into the frontend client-side code via the `define` property in `vite.config.ts`.
**Learning:** Using Vite's `define` with `process.env.*` substitutes the expressions with literal string values of the environment variables. If backend secrets from `.env` are referenced here, they become visible in plaintext to any user downloading the frontend bundle.
**Prevention:** Never map sensitive backend API keys or secrets to `process.env` equivalents in `vite.config.ts` or any frontend bundler configuration. Only expose keys starting with `VITE_` if they are explicitly intended to be public, and keep backend secrets strictly on the server-side.
