import { getContentBlockAction } from "@/server/cms/controllers/get-content-block";
import { upsertContentBlockAction } from "@/server/cms/controllers/upsert-content-block";
import type { NextResponse } from "next/server";

export function GET(req: Request): Promise<NextResponse> {
  return getContentBlockAction(req);
}

export function PUT(req: Request): Promise<NextResponse> {
  return upsertContentBlockAction(req);
}
