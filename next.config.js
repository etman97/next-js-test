/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'blog-q-gvcyhxgqehbrh5b7.canadacentral-01.azurewebsites.net',
        pathname: '/**'
      }
    ]
  },
  
  // Enable build caching
  distDir: process.env.NODE_ENV === 'development' ? '.next' : 'dist',
  
  // Enable React strict mode for better development
  reactStrictMode: true
}

module.exports = nextConfig