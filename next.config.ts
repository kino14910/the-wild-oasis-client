import { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const nextConfig: NextConfig = {
  /* config options here */
  // next.config.js
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nauibeinvgmfuyoneeno.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/cabin-images/**',
      },
    ],
  },
  // output: 'export',
}

const withNextIntl = createNextIntlPlugin()
export default withNextIntl(nextConfig)
