// Simple in-memory rate limiting for API routes
// Production should use Redis or similar

interface RateLimitEntry {
    count: number;
    resetTime: number;
}

const rateLimitStore = new Map<string, RateLimitEntry>();

// Clean up old entries periodically
setInterval(() => {
    const now = Date.now();
    for (const [key, entry] of rateLimitStore.entries()) {
        if (entry.resetTime < now) {
            rateLimitStore.delete(key);
        }
    }
}, 60000); // Clean every minute

export interface RateLimitConfig {
    maxRequests: number;  // Max requests per window
    windowMs: number;     // Time window in milliseconds
}

// Default limits per endpoint pattern
export const RATE_LIMITS: Record<string, RateLimitConfig> = {
    '/api/challenge': { maxRequests: 10, windowMs: 60000 },  // 10/min
    '/api/verify': { maxRequests: 5, windowMs: 60000 },      // 5/min
    '/api/mission': { maxRequests: 30, windowMs: 60000 },    // 30/min
    '/api/admin': { maxRequests: 5, windowMs: 60000 },       // 5/min
    '/api/user': { maxRequests: 20, windowMs: 60000 },       // 20/min
    'default': { maxRequests: 100, windowMs: 60000 },        // 100/min fallback
};

export function getRateLimitForPath(path: string): RateLimitConfig {
    for (const [pattern, config] of Object.entries(RATE_LIMITS)) {
        if (pattern !== 'default' && path.startsWith(pattern)) {
            return config;
        }
    }
    return RATE_LIMITS.default;
}

export interface RateLimitResult {
    allowed: boolean;
    remaining: number;
    resetTime: number;
}

export function checkRateLimit(identifier: string, path: string): RateLimitResult {
    const config = getRateLimitForPath(path);
    const key = `${identifier}:${path.split('/').slice(0, 3).join('/')}`;
    const now = Date.now();

    const entry = rateLimitStore.get(key);

    if (!entry || entry.resetTime < now) {
        // New window
        const newEntry: RateLimitEntry = {
            count: 1,
            resetTime: now + config.windowMs,
        };
        rateLimitStore.set(key, newEntry);

        return {
            allowed: true,
            remaining: config.maxRequests - 1,
            resetTime: newEntry.resetTime,
        };
    }

    if (entry.count >= config.maxRequests) {
        return {
            allowed: false,
            remaining: 0,
            resetTime: entry.resetTime,
        };
    }

    entry.count++;
    return {
        allowed: true,
        remaining: config.maxRequests - entry.count,
        resetTime: entry.resetTime,
    };
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

    // Fallback for development
    return '127.0.0.1';
}
