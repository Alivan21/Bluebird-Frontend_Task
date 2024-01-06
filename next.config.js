/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.bluebirdgroup.com",
      },
    ],
  },
};

module.exports = nextConfig;
