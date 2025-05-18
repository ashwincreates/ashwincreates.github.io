import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { hostname: "repository-images.githubusercontent.com" },
      { hostname: "opengraph.githubassets.com" },
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.glsl/,
      type: 'asset/source',
    });
    return config;
  },
};

export default nextConfig;
