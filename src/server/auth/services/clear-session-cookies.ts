import { NextResponse } from "next/server";
import { REFRESH_COOKIE, SESSION_COOKIE } from "@/server/hosts/session-names";

export function clearSessionCookies(res: NextResponse): void {
  res.cookies.delete(SESSION_COOKIE);
  res.cookies.delete(REFRESH_COOKIE);
}
