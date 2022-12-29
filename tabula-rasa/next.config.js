/** @type {import("next").NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Redirect API calls to appropriate host URL:
  async rewrites() {
    return await {
      beforeFiles: [
        {
          source: "/api/:path*",
          destination:
            "https://streaming-titles-api.up.railway.app/api/v1/:path*",
        },
      ],
    }
  },
}

module.exports = nextConfig
