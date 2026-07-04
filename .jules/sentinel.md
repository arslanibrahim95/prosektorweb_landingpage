## 2026-07-04 - Removed exposed Gemini API keys in Vite Config
**Vulnerability:** The vite.config.ts globally exposed GEMINI_API_KEY into the frontend source via the define option.
**Learning:** Inadvertently shimming process.env inside Vite's define leaks secrets into the build artifacts or exposes them if accessed on the client.
**Prevention:** Never use Vite's define to inject server-side API keys or secrets into the frontend unless specifically intended for client-side use (e.g. VITE_ prefix). Verify usage before blindly shimming.
