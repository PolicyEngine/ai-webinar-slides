/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/ai-webinar-slides' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/ai-webinar-slides/' : '',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
