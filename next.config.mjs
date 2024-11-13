/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "repository-images.githubusercontent.com" },
      { hostname: "opengraph.githubassets.com" },
    ],
  },
};

export default nextConfig;
