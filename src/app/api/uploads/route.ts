import { uploadFileAction } from "@/server/storage/controllers/upload-file";
import type { NextResponse } from "next/server";

export function POST(req: Request): Promise<NextResponse> {
  return uploadFileAction(req);
}
