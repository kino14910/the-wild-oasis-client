/** @type {import('next').NextConfig} */
const nextConfig = {
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

export default nextConfig
