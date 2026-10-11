import { requestPasswordResetAction } from "@/server/auth/controllers/request-password-reset";
import type { NextResponse } from "next/server";

export function POST(req: Request): Promise<NextResponse> {
  return requestPasswordResetAction(req);
}
