## 2025-03-05 - Remove exposed API keys in Vite define
**Vulnerability:** Exposed `GEMINI_API_KEY` via `define` in Vite config.
**Learning:** Vite's `define` feature directly replaces strings in the code and exposes environment variables to the client bundle.
**Prevention:** Never use Vite `define` to inject secrets; handle them server-side or ensure they are genuinely safe to be public.
