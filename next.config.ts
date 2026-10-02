import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/defrente_web_2",
  assetPrefix: "/defrente_web_2/",
};

export default nextConfig;