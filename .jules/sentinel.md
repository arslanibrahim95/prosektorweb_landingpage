## 2024-05-24 - Exposed API Key via Vite define
**Vulnerability:** The Vite configuration (`vite.config.ts`) was using `define` to inject `process.env.GEMINI_API_KEY` into the client-side bundle.
**Learning:** Vite's `define` directive replaces environment variable references with actual string literals at build time, exposing sensitive backend secrets directly to the client side.
**Prevention:** Never use Vite `define` to inject server-side or API keys into the frontend code. If the frontend must call the API directly (which it shouldn't for sensitive APIs), use a proxy backend or handle it server-side.
