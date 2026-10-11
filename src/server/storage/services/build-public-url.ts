import { minioConfigFromEnv } from "@/server/storage/services/minio-config";
import { minioPublicBaseUrl } from "@/server/storage/services/minio-public-base-url";

// Builds the public URL the UI stores (e.g. Product.imageUrl).
// MinIO → http(s)://endpoint:port/bucket/<key> (or MINIO_PUBLIC_BASE_URL).
// Local → served by /api/files/<key>.
export function buildPublicUrl(key: string): string {
  const normalized = key.replace(/^\/+/, "");
  const driver = process.env.STORAGE_DRIVER ?? "minio";
  if (driver === "local") {
    const base = (process.env.STORAGE_PUBLIC_BASE_URL ?? "").replace(/\/+$/, "");
    return `${base}/api/files/${normalized}`;
  }
  if (driver === "minio" || driver === "s3") {
    return `${minioPublicBaseUrl(minioConfigFromEnv())}/${normalized}`;
  }
  throw new Error(`Unknown STORAGE_DRIVER: ${driver}`);
}
