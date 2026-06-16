import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  // Pin the workspace root so a parent lockfile never hijacks resolution.
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
