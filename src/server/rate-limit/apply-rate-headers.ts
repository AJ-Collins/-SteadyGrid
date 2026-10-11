import { NextResponse } from "next/server";

export function applyRateHeaders(res: NextResponse, headers: Record<string, string>): void {
  for (const [k, v] of Object.entries(headers)) res.headers.set(k, v);
}
