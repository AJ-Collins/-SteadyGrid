import { randomBytes } from "node:crypto";

// Opaque refresh tokens: 256 bits of randomness, hex-encoded. Only the
// sha256 hash is ever stored — a DB read yields nothing replayable.
export function generateRefreshToken(): string {
  return randomBytes(32).toString("hex");
}
