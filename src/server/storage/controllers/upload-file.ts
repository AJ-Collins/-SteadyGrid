import { jsonError } from "@/server/http/json-error";
import { ok } from "@/server/http/ok-response";
import { requireUser } from "@/server/auth/services/require-user";
import { UnauthorizedError } from "@/server/auth/services/unauthorized-error";
import { requirePermission } from "@/server/access/require-permission";
import { ForbiddenError } from "@/server/auth/services/forbidden-error";
import { saveUpload } from "@/server/storage/services/save-upload";
import { UploadRejectedError } from "@/server/storage/services/upload-rejected-error";
import { readUploadForm } from "@/server/storage/requests/read-upload-form";
import { applyRateHeaders } from "@/server/rate-limit/apply-rate-headers";
import { enforceRateLimit } from "@/server/rate-limit/enforce-rate-limit";
import type { NextResponse } from "next/server";

export async function uploadFileAction(req: Request): Promise<NextResponse> {
  try {
    const user = await requireUser();
    requirePermission(user, "uploads:create");
    const limit = await enforceRateLimit(req, "uploads", { userId: user.id });
    if (limit.blocked) return limit.blocked;
    const form = await readUploadForm(req);
    if ("error" in form) return jsonError(form.error, 400);
    const asset = await saveUpload(form.file, form.prefix);
    const res = ok({ id: asset.id, key: asset.key, url: asset.url }, { status: 201 });
    applyRateHeaders(res, limit.headers);
    return res;
  } catch (err) {
    if (err instanceof UnauthorizedError) return jsonError(err.message, err.status);
    if (err instanceof ForbiddenError) return jsonError(err.message, err.status);
    if (err instanceof UploadRejectedError) return jsonError(err.message, err.status);
    throw err;
  }
}
