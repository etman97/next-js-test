
// Note: removed `output: 'export'` so Next.js can run server-side API routes
// If you intentionally want a static HTML export, you must remove API routes
// or rework them to fetch from an external API during export.
const nextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: '', 
}

module.exports = nextConfig