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
      use: ['raw-loader']
    });
    return config;
  },
};

export default nextConfig;
