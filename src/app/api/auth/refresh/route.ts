import { refreshAction } from "@/server/auth/controllers/refresh";
import type { NextResponse } from "next/server";

export function POST(req: Request): Promise<NextResponse> {
  return refreshAction(req);
}
