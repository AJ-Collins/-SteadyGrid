import { loginAction } from "@/server/auth/controllers/login";
import type { NextResponse } from "next/server";

export function POST(req: Request): Promise<NextResponse> {
  return loginAction(req);
}
