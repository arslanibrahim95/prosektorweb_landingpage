import { Request, Response, NextFunction } from 'express';

export function securityHeaders(req: Request, res: Response, next: NextFunction) {
  // Prevent clickjacking
  res.setHeader('X-Frame-Options', 'DENY');

  // Prevent MIME type sniffing
  res.setHeader('X-Content-Type-Options', 'nosniff');

  // Control referrer information
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');

  // HTTP Strict Transport Security (HSTS)
  // 63072000 seconds = 2 years
  // Only apply if connection is secure
  if (req.secure || req.get('x-forwarded-proto') === 'https') {
    res.setHeader('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
  }

  // Content Security Policy (CSP)
  // Restrict all resources since this is a pure API
  res.setHeader('Content-Security-Policy', "default-src 'none'; frame-ancestors 'none'; upgrade-insecure-requests");

  // Permissions Policy
  // Disable sensitive features
  res.setHeader('Permissions-Policy', 'geolocation=(), camera=(), microphone=()');

  next();
}
