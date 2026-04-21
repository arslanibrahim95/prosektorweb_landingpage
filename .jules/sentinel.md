## 2024-05-18 - Exposing Secrets to Client Side

**Vulnerability:** The Vite configuration file (`frontend/vite.config.ts`) was injecting environment variables (`GEMINI_API_KEY`) directly into the client-side bundle using the `define` property (`process.env.API_KEY`).

**Learning:** Vite's `define` config replaces occurrences of the variable in the code with the literal value. Exposing API keys or secrets this way makes them visible to anyone who inspects the client-side JavaScript bundle, leading to potential abuse.

**Prevention:** Never inject secrets or sensitive API keys into client-side bundles via Vite's `define` config or `import.meta.env`. All sensitive API interactions must be proxied through a secure backend server.