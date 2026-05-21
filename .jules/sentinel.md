## 2025-03-05 - Vite Configuration Secret Leak
**Vulnerability:** API keys (GEMINI_API_KEY) were exposed to the client-side bundle via Vite's `define` configuration.
**Learning:** The `define` block in `vite.config.ts` performs literal string replacement during the build process, embedding any defined environment variables directly into the frontend JavaScript, making sensitive secrets accessible to any user.
**Prevention:** Never use Vite's `define` or `import.meta.env.VITE_*` for sensitive secrets. Keep API keys out of frontend configuration and use a backend proxy for sensitive external API calls.
