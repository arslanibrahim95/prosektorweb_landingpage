## 2024-05-11 - Prevent Secret Exposure in Vite Config
**Vulnerability:** API keys injected via Vite's `define` block.
**Learning:** Using `define` in `vite.config.ts` to map environment variables exposes them in the public client bundle, even if unused in code.
**Prevention:** Ensure secrets are never injected via `define` or `import.meta.env` unless they are explicitly meant to be public, and audit the frontend bundle for exposed keys.
