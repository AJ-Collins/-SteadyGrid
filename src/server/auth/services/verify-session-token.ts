import { jwtVerify } from "jose";
import { getAuthSecret } from "@/server/auth/services/get-auth-secret";
import type { SessionClaims } from "@/server/auth/services/session-claims";

export async function verifySessionToken(token: string): Promise<SessionClaims | null> {
  try {
    const { payload } = await jwtVerify(token, getAuthSecret());
    if (
      typeof payload.sub !== "string" ||
      typeof payload["role"] !== "string" ||
      typeof payload["sid"] !== "string"
    ) {
      return null;
    }
    return { userId: payload.sub, role: payload["role"] as string, sid: payload["sid"] as string };
  } catch {
    return null;
  }
}
