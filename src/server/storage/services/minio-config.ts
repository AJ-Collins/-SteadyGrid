export interface MinioConfig {
  endPoint: string;
  port: number;
  useSSL: boolean;
  accessKey: string;
  secretKey: string;
  bucket: string;
  region: string;
}

export function minioConfigFromEnv(): MinioConfig {
  const accessKey = process.env.MINIO_ACCESS_KEY;
  const secretKey = process.env.MINIO_SECRET_KEY;
  if (!accessKey || !secretKey) {
    throw new Error("MINIO_ACCESS_KEY and MINIO_SECRET_KEY must be set");
  }
  return {
    endPoint: process.env.MINIO_ENDPOINT ?? "127.0.0.1",
    port: Number(process.env.MINIO_PORT ?? 9000),
    useSSL: (process.env.MINIO_USE_SSL ?? "false") === "true",
    accessKey,
    secretKey,
    bucket: process.env.MINIO_BUCKET ?? "steadygrid",
    region: process.env.MINIO_REGION ?? "us-east-1",
  };
}
