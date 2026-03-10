## 2026-02-14 - Client-Side Authentication with Hardcoded Secrets
**Vulnerability:** The application used hardcoded access codes (`MOCK_CODES`) in the frontend bundle to restrict access to a "preview" feature.
**Learning:** This is a classic example of "Client-Side Trust". Even though the codes were "mock", treating them as secrets in client-side code exposes the entire list to anyone inspecting the source.
**Prevention:** Always perform authentication and authorization checks on the server. Never trust client-side logic for access control.
