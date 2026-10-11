import type { MinioConfig } from "@/server/storage/services/minio-config";

// Public base URL for stored objects. Override with MINIO_PUBLIC_BASE_URL
// (e.g. a CDN in front of MinIO); otherwise path-style endpoint/bucket URL.
export function minioPublicBaseUrl(config: MinioConfig): string {
  const override = (process.env.MINIO_PUBLIC_BASE_URL ?? "").replace(/\/+$/, "");
  if (override) return override;
  const scheme = config.useSSL ? "https" : "http";
  const defaultPort = config.useSSL ? 443 : 80;
  const portPart = config.port === defaultPort ? "" : `:${config.port}`;
  return `${scheme}://${config.endPoint}${portPart}/${config.bucket}`;
}
