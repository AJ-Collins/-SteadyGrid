import { listUsersAction } from "@/server/admin/controllers/list-users";
import type { NextResponse } from "next/server";

export function GET(req: Request): Promise<NextResponse> {
  return listUsersAction(req);
}
