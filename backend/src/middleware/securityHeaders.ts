import { Request, Response, NextFunction } from 'express';

export function securityHeaders(req: Request, res: Response, next: NextFunction) {
  // Prevent clickjacking
  res.setHeader('X-Frame-Options', 'DENY');

  // Prevent MIME type sniffing
  res.setHeader('X-Content-Type-Options', 'nosniff');

  // Enable XSS protection filter (though modern browsers prefer CSP)
  res.setHeader('X-XSS-Protection', '1; mode=block');

  // Enforce HTTPS in production environments for 1 year
  if (process.env.NODE_ENV === 'production') {
    res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
  }

  // Content Security Policy - strictly limit sources
  // Adjust this based on your specific needs (e.g., allow specific CDNs)
  // For now, this is a restrictive default.
  res.setHeader(
    'Content-Security-Policy',
    "default-src 'none'; frame-ancestors 'none'; upgrade-insecure-requests;"
  );

  // Referrer Policy
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');

  next();
}
