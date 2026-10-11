import { confirmPasswordResetAction } from "@/server/auth/controllers/confirm-password-reset";
import type { NextResponse } from "next/server";

export function POST(req: Request): Promise<NextResponse> {
  return confirmPasswordResetAction(req);
}
