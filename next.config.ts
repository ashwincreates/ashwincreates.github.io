import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { hostname: "repository-images.githubusercontent.com" },
      { hostname: "opengraph.githubassets.com" },
    ],
  },
};

export default nextConfig;
