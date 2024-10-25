import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  webpack: (webpackConfig, { isServer }) => {
    if (!isServer) {
      // Exclude the package from the client-side bundle
      webpackConfig.externals = webpackConfig.externals || []
      webpackConfig.externals.push({
        pspdfkit: 'pspdfkit',
      })
    }

    return webpackConfig
  },
}

export default nextConfig
