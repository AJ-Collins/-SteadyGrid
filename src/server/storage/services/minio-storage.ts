import * as Minio from "minio";
import {
  type ObjectStorage,
  type PutOptions,
  type StoredObject,
} from "@/server/storage/services/storage-port";
import { buildObjectKey } from "@/server/storage/services/build-object-key";
import { extensionForMime } from "@/server/storage/services/extension-for-mime";
import type { MinioConfig } from "@/server/storage/services/minio-config";
import { minioConfigFromEnv } from "@/server/storage/services/minio-config";
import { publicReadPolicy } from "@/server/storage/services/minio-public-policy";
import { isNotFoundError } from "@/server/storage/services/s3-error";
import { streamToBytes } from "@/server/storage/services/stream-to-bytes";

// MinIO driver (S3-compatible). Talks to MinIO — or any S3-compatible
// endpoint — over the S3 API. Bucket is created on first use and given a
// public-read policy so stored URLs are directly servable.
export class MinioObjectStorage implements ObjectStorage {
  readonly name = "minio" as const;
  private readonly client: Minio.Client;
  private readonly bucket: string;
  private readonly region: string;
  private ensured = false;

  constructor(config: MinioConfig = minioConfigFromEnv(), client?: Minio.Client) {
    this.client =
      client ??
      new Minio.Client({
        endPoint: config.endPoint,
        port: config.port,
        useSSL: config.useSSL,
        accessKey: config.accessKey,
        secretKey: config.secretKey,
        region: config.region,
      });
    this.bucket = config.bucket;
    this.region = config.region;
  }

  private async ensureBucket(): Promise<void> {
    if (this.ensured) return;
    const exists = await this.client.bucketExists(this.bucket);
    if (!exists) {
      await this.client.makeBucket(this.bucket, this.region);
    }
    try {
      await this.client.setBucketPolicy(this.bucket, publicReadPolicy(this.bucket));
    } catch {
      // Non-fatal: some S3-compatible test doubles don't implement policies.
    }
    this.ensured = true;
  }

  async put(data: Uint8Array, options: PutOptions): Promise<StoredObject> {
    await this.ensureBucket();
    const key = buildObjectKey(options.prefix ?? "uploads", extensionForMime(options.mimeType));
    await this.client.putObject(
      this.bucket,
      key,
      Buffer.from(data.buffer, data.byteOffset, data.byteLength),
      data.byteLength,
      { "Content-Type": options.mimeType },
    );
    return { key, sizeBytes: data.byteLength, mimeType: options.mimeType };
  }

  async get(key: string): Promise<{ data: Uint8Array; mimeType: string } | null> {
    try {
      const stat = await this.client.statObject(this.bucket, key);
      const stream = await this.client.getObject(this.bucket, key);
      const data = await streamToBytes(stream);
      const mime = stat.metaData["content-type"] ?? stat.metaData["Content-Type"];
      return { data, mimeType: typeof mime === "string" ? mime : "application/octet-stream" };
    } catch (err) {
      if (isNotFoundError(err)) return null;
      throw err;
    }
  }

  async delete(key: string): Promise<void> {
    await this.client.removeObject(this.bucket, key);
  }

  async exists(key: string): Promise<boolean> {
    try {
      await this.client.statObject(this.bucket, key);
      return true;
    } catch (err) {
      if (isNotFoundError(err)) return false;
      throw err;
    }
  }
}
