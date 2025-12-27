import { Redis } from '@upstash/redis';
import { Ratelimit } from '@upstash/ratelimit';

// Initialize Redis client
// Store credentials in env vars for security
const redis = new Redis({
    url: process.env.UPSTASH_REDIS_URL || 'https://sterling-man-55195.upstash.io',
    token: process.env.UPSTASH_REDIS_TOKEN || 'AdebAAIncDFlYjg0NWU3YjNjYjQ0MjE0OGNjNjhmYWNmM2E4MzEwOHAxNTUxOTU',
});

// Rate limiters for different endpoint types
// Using sliding window algorithm for smooth rate limiting

// Strict: For sensitive operations (verify, admin)
export const strictRateLimit = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(5, '1 m'),  // 5 requests per minute
    analytics: true,
    prefix: 'ratelimit:strict',
});

// Normal: For regular API calls (challenge, mission)
export const normalRateLimit = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(20, '1 m'),  // 20 requests per minute
    analytics: true,
    prefix: 'ratelimit:normal',
});

// Relaxed: For less sensitive endpoints (user profile)
export const relaxedRateLimit = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(60, '1 m'),  // 60 requests per minute
    analytics: true,
    prefix: 'ratelimit:relaxed',
});

// Auth: For login/signup attempts
export const authRateLimit = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(10, '1 m'),  // 10 attempts per minute
    analytics: true,
    prefix: 'ratelimit:auth',
});

// Rate limit configuration by endpoint pattern
export const RATE_LIMIT_CONFIG: Record<string, Ratelimit> = {
    '/api/verify': strictRateLimit,
    '/api/admin': strictRateLimit,
    '/api/challenge': normalRateLimit,
    '/api/mission': normalRateLimit,
    '/api/user': relaxedRateLimit,
    '/api/auth': authRateLimit,
};

// Get the appropriate rate limiter for a path
export function getRateLimiter(path: string): Ratelimit {
    for (const [pattern, limiter] of Object.entries(RATE_LIMIT_CONFIG)) {
        if (path.startsWith(pattern)) {
            return limiter;
        }
    }
    return normalRateLimit; // Default
}

// Helper to get client IP from request
export function getClientIP(request: Request): string {
    const forwarded = request.headers.get('x-forwarded-for');
    if (forwarded) {
        return forwarded.split(',')[0].trim();
    }

    const realIP = request.headers.get('x-real-ip');
    if (realIP) {
        return realIP;
    }

    // Vercel specific
    const vercelIP = request.headers.get('x-vercel-forwarded-for');
    if (vercelIP) {
        return vercelIP.split(',')[0].trim();
    }

    return '127.0.0.1';
}

// Main rate limit check function
export async function checkRateLimit(
    request: Request,
    path: string
): Promise<{ success: boolean; limit: number; remaining: number; reset: number }> {
    const ip = getClientIP(request);
    const limiter = getRateLimiter(path);

    const identifier = `${ip}:${path.split('/').slice(0, 3).join('/')}`;
    const result = await limiter.limit(identifier);

    return {
        success: result.success,
        limit: result.limit,
        remaining: result.remaining,
        reset: result.reset,
    };
}

// Helper to create rate limit response headers
export function rateLimitHeaders(result: { limit: number; remaining: number; reset: number }): Headers {
    const headers = new Headers();
    headers.set('X-RateLimit-Limit', result.limit.toString());
    headers.set('X-RateLimit-Remaining', result.remaining.toString());
    headers.set('X-RateLimit-Reset', result.reset.toString());
    return headers;
}

// Export redis client for other uses
export { redis };
