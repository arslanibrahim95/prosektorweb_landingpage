## 2025-02-17 - Hardcoded Secrets in Frontend
**Vulnerability:** Found hardcoded access codes (`DELTA2025`, etc.) directly in the frontend `constants.tsx` file, allowing anyone to bypass access controls by inspecting the source code.
**Learning:** Client-side validation for access control is insecure because all client-side code is visible to the user. Even "mock" data can be a risk if it grants real access.
**Prevention:** Always perform access control and secret verification on the backend. Move sensitive data to backend storage (env vars or DB) and expose only a verification endpoint.
