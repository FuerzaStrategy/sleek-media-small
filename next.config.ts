import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // BASE_PATH is injected by the GitHub Actions configure-pages step.
  // Falls back to '' for local dev.
  basePath: process.env.BASE_PATH ?? "",
  images: {
    // next/image optimization requires a server; disable for static export.
    unoptimized: true,
  },
};

export default nextConfig;
