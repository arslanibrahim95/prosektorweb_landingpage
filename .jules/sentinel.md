## 2025-03-01 - Unencrypted API Credentials Transmission
**Vulnerability:** API credentials (username and password) were transmitted in plaintext over HTTP to a third-party SMS provider.
**Learning:** The fallback to HTTP was implemented because the third-party provider's legacy TLS configuration failed under Node's modern OpenSSL defaults, leading to encryption bypass instead of proper configuration.
**Prevention:** Use Node's native `https` module with `secureOptions: crypto.constants.SSL_OP_LEGACY_SERVER_CONNECT` to allow legacy server connections while maintaining TLS encryption, rather than falling back to HTTP.
