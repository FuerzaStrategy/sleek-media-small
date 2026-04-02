import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Set by the workflow via configure-pages base_path output.
  // Empty string in local dev so paths resolve from root.
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
