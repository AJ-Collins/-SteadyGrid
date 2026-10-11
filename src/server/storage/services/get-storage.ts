import type { ObjectStorage } from "@/server/storage/services/storage-port";
import { LocalObjectStorage } from "@/server/storage/services/local-storage";
import { MinioObjectStorage } from "@/server/storage/services/minio-storage";

let cached: ObjectStorage | null = null;

// Driver factory. "minio" (default) talks to MinIO — or any S3-compatible
// endpoint — configured via MINIO_*. "local" keeps the same key/URL
// semantics on disk for dependency-free development. "s3" is an alias
// of "minio" (generic S3 endpoint via the same MINIO_* vars).
export function getStorage(): ObjectStorage {
  if (cached) return cached;
  const driver = process.env.STORAGE_DRIVER ?? "minio";
  if (driver === "local") {
    cached = new LocalObjectStorage();
    return cached;
  }
  if (driver === "minio" || driver === "s3") {
    cached = new MinioObjectStorage();
    return cached;
  }
  throw new Error(`Unknown STORAGE_DRIVER: ${driver}`);
}

// Test-only: drop the cached driver so env changes take effect.
export function resetStorageCache(): void {
  cached = null;
}
