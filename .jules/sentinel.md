## 2025-06-01 - Prevented Unencrypted Sensitive Data Transmission
**Vulnerability:** The application fell back to plaintext HTTP when communicating with the Oztek SMS API because the provider's legacy TLS setup failed with modern OpenSSL defaults.
**Learning:** Defaulting to HTTP to bypass TLS errors exposes sensitive PII (phone numbers, names, emails) to network eavesdropping. This is a common pitfall when integrating with legacy third-party systems.
**Prevention:** Instead of falling back to HTTP, explicitly configure the TLS agent to support legacy handshakes (e.g., using `crypto.constants.SSL_OP_LEGACY_SERVER_CONNECT`) while strictly enforcing the HTTPS protocol.
