## 2025-06-07 - Insecure External API Communications
**Vulnerability:** The application was transmitting sensitive credentials (SMS API username and password) over unencrypted HTTP due to compatibility issues with the third-party's legacy TLS setup.
**Learning:** Modern OpenSSL defaults can sometimes reject legacy TLS servers, leading developers to fallback to plaintext HTTP rather than securely configuring the TLS connection.
**Prevention:** When encountering legacy TLS connection errors, developers must use native `https` options like `crypto.constants.SSL_OP_LEGACY_SERVER_CONNECT` instead of downgrading the entire connection to plaintext HTTP, ensuring credentials remain encrypted in transit.
