## 2025-02-23 - Exposed API Keys in Frontend Configuration
**Vulnerability:** The Gemini API key was explicitly stringified and exposed into the frontend client bundle via Vite's `define` configuration.
**Learning:** Passing secret keys using `define` in Vite (e.g., `process.env.GEMINI_API_KEY`) embeds them into the compiled JavaScript bundle, making them trivially accessible to end users and risking unauthorized API usage.
**Prevention:** Never map sensitive backend API keys to the frontend configuration unless the key is specifically designed to be public (like a strictly-scoped map key).
