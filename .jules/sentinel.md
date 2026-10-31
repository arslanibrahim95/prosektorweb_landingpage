## 2025-02-27 - Remove Exposed API Keys in Vite Config
**Vulnerability:** The Vite configuration exposed GEMINI_API_KEY to the frontend client via the `define` property.
**Learning:** Using `define` in Vite statically replaces variables with their stringified values, meaning backend secrets injected this way become visible in the compiled frontend bundle, even if unused by the application logic. This pattern often remains from boilerplates like Google AI Studio.
**Prevention:** Thoroughly verify that no sensitive server-side variables or API keys are passed to Vite's `define` or `env` configurations. If `process.env` properties are completely unused by the frontend codebase and dependencies, the definitions should be safely removed to prevent leakage.
