import { getDashboardStatsAction } from "@/server/admin/controllers/get-dashboard-stats";
import type { NextResponse } from "next/server";

export function GET(req: Request): Promise<NextResponse> {
  return getDashboardStatsAction(req);
}
