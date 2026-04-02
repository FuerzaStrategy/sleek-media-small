import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    // next/image optimization requires a server; disable for static export.
    unoptimized: true,
  },
};

export default nextConfig;
