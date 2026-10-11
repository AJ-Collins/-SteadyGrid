import type { Surface } from "@/server/hosts/surface";

export interface SurfaceConfig {
  surface: Surface;
  prefix: string;
  publicPaths: Set<string>;
  loginPath: string;
  otherPrefix: string;
  otherHost: string;
}
