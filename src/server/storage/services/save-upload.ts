import { db } from "@/server/db/client";
import type { FileAsset } from "@prisma/client";
import { getStorage } from "@/server/storage/services/get-storage";
import { buildPublicUrl } from "@/server/storage/services/build-public-url";
import { UploadRejectedError } from "@/server/storage/services/upload-rejected-error";

const MAX_UPLOAD_BYTES = 10 * 1024 * 1024; // 10 MB
const ALLOWED_MIME_PREFIXES = ["image/"];

// Validates an upload, stores bytes in object storage, persists ONLY
// the key + URL metadata in Postgres, and returns the public URL the
// UI saves/displays (e.g. as Product.imageUrl).
export async function saveUpload(file: File, prefix = "uploads"): Promise<FileAsset> {
  if (file.size === 0) throw new UploadRejectedError("Empty file");
  if (file.size > MAX_UPLOAD_BYTES) throw new UploadRejectedError("File too large (max 10 MB)");
  if (!ALLOWED_MIME_PREFIXES.some((p) => file.type.startsWith(p))) {
    throw new UploadRejectedError("Only image uploads are allowed");
  }

  const storage = getStorage();
  const bytes = new Uint8Array(await file.arrayBuffer());
  const stored = await storage.put(bytes, { mimeType: file.type, prefix });
  const url = buildPublicUrl(stored.key);

  return db.fileAsset.create({
    data: { key: stored.key, url, mimeType: stored.mimeType, sizeBytes: stored.sizeBytes },
  });
}
