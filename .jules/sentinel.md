## 2025-02-27 - Exposed Gemini API Key in Vite Config
**Vulnerability:** A Gemini API key was inadvertently exposed to the client bundle via Vite's `define` property mapping `process.env.GEMINI_API_KEY`.
**Learning:** Build tools like Vite perform static string replacement on `define` properties. Any sensitive keys mapped here are baked into the final client-side JavaScript, leading to potential abuse.
**Prevention:** Never include sensitive backend keys in the frontend's build configuration. Always keep secrets on the server and use server-side routes or APIs for tasks requiring them.
