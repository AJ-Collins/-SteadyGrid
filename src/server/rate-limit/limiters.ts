import { emailKey } from "@/server/rate-limit/email-key";
import { ipKey } from "@/server/rate-limit/ip-key";
import { phoneKey } from "@/server/rate-limit/phone-key";
import { userKey } from "@/server/rate-limit/user-key";

export interface LimiterSpec {
  limit: number;
  windowMs: number;
  // Builds the bucket suffix. Receives the resolved request context;
  // fall back to IP so anonymous traffic is still bounded.
  key: (ctx: LimitContext) => string;
}

export interface LimitContext {
  ip: string;
  userId?: string;
  email?: string;
  phone?: string;
  tokenHash?: string;
}

const MIN = 60 * 1000;
const HOUR = 60 * MIN;

// ALL app limiters live here — one table, reused by every route.
// Email/phone identity buckets sit beside IP budgets (CGNAT-tolerant:
// one device farm behind NAT can't burn a single shared bucket, and one
// address can't rotate identities to escape).
export const LIMITERS = {
  // Login: 5/15min per email, plus a looser per-IP backstop.
  "auth-login": { limit: 5, windowMs: 15 * MIN, key: (c) => `auth-login:${emailKey(c.email ?? c.ip)}` },
  "auth-login-ip": { limit: 20, windowMs: 15 * MIN, key: (c) => `auth-login-ip:${ipKey(c.ip)}` },
  "auth-register": { limit: 5, windowMs: 15 * MIN, key: (c) => `auth-register:${emailKey(c.email ?? c.ip)}` },
  // Password reset: separate counters per step (anti-enumeration).
  "password-request": { limit: 3, windowMs: 15 * MIN, key: (c) => `pwd-req:${emailKey(c.email ?? c.ip)}` },
  "password-reset": { limit: 5, windowMs: 15 * MIN, key: (c) => `pwd-reset:${ipKey(c.ip)}` },
  // Refresh is split from login so passive session restores don't burn
  // the login budget. Keyed by session (token hash) with IP fallback.
  "auth-refresh": { limit: 20, windowMs: 15 * MIN, key: (c) => `auth-refresh:${c.tokenHash ?? ipKey(c.ip)}` },
  // Authenticated general API: user bucket, IP fallback.
  api: { limit: 60, windowMs: MIN, key: (c) => `api:${c.userId ? userKey(c.userId) : ipKey(c.ip)}` },
  // Admin reads: generous, still per-admin.
  admin: { limit: 120, windowMs: MIN, key: (c) => `admin:${c.userId ? userKey(c.userId) : ipKey(c.ip)}` },
  // Admin/CMS writes.
  "admin-write": { limit: 60, windowMs: MIN, key: (c) => `admin-write:${c.userId ? userKey(c.userId) : ipKey(c.ip)}` },
  // Public contact form: IP budget + per-email budget (dual).
  "contact-ip": { limit: 10, windowMs: MIN, key: (c) => `contact-ip:${ipKey(c.ip)}` },
  "contact-email": { limit: 3, windowMs: HOUR, key: (c) => `contact-email:${emailKey(c.email ?? c.ip)}` },
  // Order creation.
  "order-create": { limit: 10, windowMs: MIN, key: (c) => `order:${c.userId ? userKey(c.userId) : ipKey(c.ip)}` },
  // Uploads: coarse transport guard (per-user), domain rules live in save-upload.
  uploads: { limit: 30, windowMs: MIN, key: (c) => `uploads:${c.userId ? userKey(c.userId) : ipKey(c.ip)}` },
  // Phone-keyed example (OTP-style flows): normalised E.164 + IP budget.
  "phone-code": { limit: 3, windowMs: 15 * MIN, key: (c) => `phone:${phoneKey(c.phone ?? c.ip)}` },
  "phone-code-ip": { limit: 20, windowMs: 15 * MIN, key: (c) => `phone-ip:${ipKey(c.ip)}` },
} satisfies Record<string, LimiterSpec>;

export type LimiterName = keyof typeof LIMITERS;
