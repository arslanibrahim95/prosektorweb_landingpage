import { describe, it } from 'node:test';
import assert from 'node:assert';
import request from 'supertest';
import { app } from '../src/app';

describe('Security Headers', () => {
  it('should have basic security headers', async () => {
    const res = await request(app).get('/api/status');
    assert.strictEqual(res.status, 200);

    // Helmet default headers
    assert.ok(res.headers['x-dns-prefetch-control'], 'Missing X-DNS-Prefetch-Control');
    assert.strictEqual(res.headers['x-frame-options'], 'SAMEORIGIN');
    assert.strictEqual(res.headers['strict-transport-security'], 'max-age=31536000; includeSubDomains');
    assert.strictEqual(res.headers['x-download-options'], 'noopen');
    assert.strictEqual(res.headers['x-content-type-options'], 'nosniff');
    assert.strictEqual(res.headers['referrer-policy'], 'no-referrer');
    assert.strictEqual(res.headers['x-permitted-cross-domain-policies'], 'none');

    // Content-Security-Policy
    assert.ok(res.headers['content-security-policy'], 'Missing Content-Security-Policy');

    // X-Powered-By should be removed
    assert.strictEqual(res.headers['x-powered-by'], undefined);
  });
});
