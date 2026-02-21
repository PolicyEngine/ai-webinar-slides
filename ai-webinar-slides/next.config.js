/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.GITHUB_PAGES === 'true' ? '/ai-webinar-slides' : '',
  assetPrefix: process.env.GITHUB_PAGES === 'true' ? '/ai-webinar-slides/' : '',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
