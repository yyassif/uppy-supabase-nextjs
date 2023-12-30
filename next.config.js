/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "avatars.githubusercontent.com",
        protocol: "https",
      },
      {
        hostname: "images.pexels.com",
        protocol: "https",
      },
      // rest here
    ],
  },
};

module.exports = nextConfig;
