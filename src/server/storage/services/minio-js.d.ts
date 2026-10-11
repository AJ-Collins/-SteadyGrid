declare module "minio" {
  import type { Readable } from "node:stream";

  export interface ClientOptions {
    endPoint: string;
    port?: number;
    useSSL?: boolean;
    accessKey: string;
    secretKey: string;
    region?: string;
  }

  export type ItemMetaData = Record<string, string | number | string[]>;

  export interface ItemStat {
    size: number;
    metaData: ItemMetaData;
    lastModified: Date;
    etag: string;
  }

  export interface UploadedObjectInfo {
    etag: string;
    versionId: string | null;
  }

  export class Client {
    constructor(options: ClientOptions);
    putObject(
      bucketName: string,
      objectName: string,
      stream: Buffer | Readable | string,
      size?: number,
      metaData?: ItemMetaData,
    ): Promise<UploadedObjectInfo>;
    getObject(bucketName: string, objectName: string): Promise<Readable>;
    statObject(bucketName: string, objectName: string): Promise<ItemStat>;
    removeObject(bucketName: string, objectName: string): Promise<void>;
    bucketExists(bucketName: string): Promise<boolean>;
    makeBucket(bucketName: string, region?: string): Promise<void>;
    setBucketPolicy(bucketName: string, policy: string): Promise<void>;
  }
}
