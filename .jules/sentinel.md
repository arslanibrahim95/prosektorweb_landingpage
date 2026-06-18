## 2024-06-18 - Leaking Secrets via Frontend Build Config
**Vulnerability:** Vite's `define` configuration was injecting `GEMINI_API_KEY` from the environment into the client-side JavaScript bundle as plain text via `process.env.API_KEY`.
**Learning:** Build tools that replace environment variables at compile-time (like Vite's `define` or Webpack's `DefinePlugin`) will permanently bake sensitive secrets into publicly accessible static assets if not carefully restricted.
**Prevention:** Never pass server-side API keys, database credentials, or secret tokens into client build configurations. Always verify that only safe, public variables (like `VITE_API_BASE_URL`) are exposed to the frontend.
## 2024-06-18 - Missing Security Headers
**Vulnerability:** The Express backend was missing standard security headers, leaving clients vulnerable to MIME-sniffing, Clickjacking, and basic XSS attacks.
**Learning:** Even when serving mostly API endpoints, setting baseline security headers (like `X-Content-Type-Options` and `X-Frame-Options`) is critical for defense-in-depth against client-side exploitation.
**Prevention:** Always implement security headers in Express apps, either manually via middleware or by using established libraries like `helmet` when permitted.
