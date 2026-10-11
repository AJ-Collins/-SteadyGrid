declare module "s3rver" {
  export interface S3rverOptions {
    port?: number;
    address?: string;
    silent?: boolean;
    directory?: string;
    resetOnClose?: boolean;
    allowMismatchedSignatures?: boolean;
  }

  export interface S3rverInstance {
    run(): Promise<void>;
    close(): Promise<void>;
  }

  const S3rver: new (options?: S3rverOptions) => S3rverInstance;
  export default S3rver;
}
