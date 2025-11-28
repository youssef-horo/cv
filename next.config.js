/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  // Security: Disable source maps in production
  productionBrowserSourceMaps: false,
  // Security: Disable powered-by header
  poweredByHeader: false,
  // Security: Compress responses
  compress: true,
};

module.exports = nextConfig;
