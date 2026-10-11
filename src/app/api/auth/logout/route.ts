import { logoutAction } from "@/server/auth/controllers/logout";
import type { NextResponse } from "next/server";

export function POST(): Promise<NextResponse> {
  return logoutAction();
}
