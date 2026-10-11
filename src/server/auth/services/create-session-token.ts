import { SignJWT } from "jose";
import { getAuthSecret } from "@/server/auth/services/get-auth-secret";
import { ACCESS_TTL_SECONDS } from "@/server/auth/services/token-ttl";
import type { SessionClaims } from "@/server/auth/services/session-claims";

export function createSessionToken(claims: SessionClaims): Promise<string> {
  return new SignJWT({ role: claims.role, sid: claims.sid })
    .setProtectedHeader({ alg: "HS256" })
    .setSubject(claims.userId)
    .setIssuedAt()
    .setExpirationTime(`${ACCESS_TTL_SECONDS}s`)
    .sign(getAuthSecret());
}
