## 2026-05-14 - Exposed API Keys in Vite Config
**Vulnerability:** GEMINI_API_KEY was exposed to the client bundle via Vite's `define` configuration.
**Learning:** Vite's `define` globally replaces string literals in the build. Injecting secrets here embeds them in the public frontend bundle.
**Prevention:** Never use `define` or `import.meta.env.VITE_*` for sensitive keys. Keep secrets in the backend environment only.
