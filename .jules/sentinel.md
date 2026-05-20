## 2025-02-27 - Unencrypted Oztek SMS Credentials
**Vulnerability:** Sending third-party API credentials (Oztek SMS) in plaintext over HTTP.
**Learning:** Modern OpenSSL 3.0+ rejects legacy TLS renegotiation by default, causing standard HTTPS requests to old servers to fail. Developers bypassed this by downgrading to HTTP instead of configuring legacy TLS support, resulting in exposed credentials over the network.
**Prevention:** Use Node's native `https` module with `secureOptions: crypto.constants.SSL_OP_LEGACY_SERVER_CONNECT` when dealing with legacy TLS servers. Never downgrade to unencrypted HTTP.
