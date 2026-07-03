## 2025-03-08 - Unused Secret Definitions
**Vulnerability:** The Vite configuration exposed `process.env.API_KEY` and `process.env.GEMINI_API_KEY` in the build via `define`, even though they were completely unused by the frontend codebase.
**Learning:** Hardcoding or shimming API keys globally in frontend bundles risks exposing sensitive values if the environment variables are accidentally set on the build machine. Since the variables weren't used by the app, it was an unnecessary risk.
**Prevention:** Always verify if a `define` block for secrets is genuinely needed in frontend code. If a secret is required, prefer fetching it from a backend rather than statically injecting it.
