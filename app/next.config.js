/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["ipfs.io"],

    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
