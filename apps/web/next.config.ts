import "@uin-samata/env/web";
import { withNextVideo } from "next-video/process";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typedRoutes: true,
  reactCompiler: true,
};

export default withNextVideo(nextConfig, {
  provider: "vercel-blob",
});
