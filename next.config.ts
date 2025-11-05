/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "localhost",
        port: "7036",
        pathname: "/uploads/images/**",
      },
      {
        protocol: "https",
        hostname: "blog-q-gvcyhxgqehbrh5b7.canadacentral-01.azurewebsites.net",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
