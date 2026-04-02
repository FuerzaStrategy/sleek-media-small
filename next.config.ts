import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // NEXT_PUBLIC_BASE_PATH is set by the GitHub Actions workflow via
  // actions/configure-pages base_path output (e.g. /sleek-media-small).
  // Falls back to '' for local dev.
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? "",
  images: {
    // Use a custom loader so next/image prepends basePath to public image
    // paths — the default unoptimized loader skips this step.
    loader: "custom",
    loaderFile: "./src/lib/image-loader.ts",
  },
};

export default nextConfig;
