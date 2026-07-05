## 2025-05-18 - Exposed API Keys in Vite Config
**Vulnerability:** Found `process.env.API_KEY` and `process.env.GEMINI_API_KEY` exposed in `frontend/vite.config.ts` via the `define` block. This passes secrets directly to the client bundle.
**Learning:** Development configurations often mistakenly expose server-side environment variables to the frontend.
**Prevention:** Never map sensitive backend variables to the client using `define` in Vite or Webpack unless absolutely required and strictly public. Always verify usage before removing to ensure it doesn't break functionality.
