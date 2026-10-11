import { meAction } from "@/server/auth/controllers/me";
import type { NextResponse } from "next/server";

export function GET(req: Request): Promise<NextResponse> {
  return meAction(req);
}
