import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // basePath is injected by actions/configure-pages (static_site_generator: next)
  // during the GitHub Actions build. Not set locally so dev works from root.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
