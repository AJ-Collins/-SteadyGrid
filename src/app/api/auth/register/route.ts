import { registerAction } from "@/server/auth/controllers/register";
import type { NextResponse } from "next/server";

export function POST(req: Request): Promise<NextResponse> {
  return registerAction(req);
}
