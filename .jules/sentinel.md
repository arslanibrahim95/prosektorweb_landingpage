## 2024-05-18 - Vite Define Secret Injection
**Vulnerability:** The Gemini API key (from process.env) was being explicitly injected into the client bundle via Vite's `define` configuration.
**Learning:** Using `define` in Vite config directly replaces occurrences of the key in the code with the literal string value, causing secrets to be exposed to all frontend users regardless of how they are used.
**Prevention:** Never map backend secrets into frontend configurations using Vite's `define`. Ensure frontend only holds safe, public configuration keys.
