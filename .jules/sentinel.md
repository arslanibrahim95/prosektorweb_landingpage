## 2025-02-28 - Vite Exposed Secrets Fix
**Vulnerability:** GEMINI_API_KEY was exposed to the frontend build via `vite.config.ts` define block.
**Learning:** Removing the define block without refactoring frontend API calls proxying through the backend can break the app if the key is actually used. However, I correctly verified via grep that the key was completely unused, making it safe to remove the block without side effects.
**Prevention:** Always check if the exposed secret is being actively used in the frontend codebase before just removing the definition. If used, the implementation must be refactored to a backend proxy. Also, avoid committing generated lockfiles like `pnpm-lock.yaml` unless explicitly instructed.
