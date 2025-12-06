/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    turbopack: false,  // ✅ FIX: Disable Turbopack for Netlify/Vercel
  },
  images: {
     dangerouslyAllowSVG: true,
    contentSecurityPolicy:
      "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [  // ✅ FIX: Replace deprecated domains
      {
        protocol: "http",
        hostname: "localhost",
        port: "**",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "yourdomain.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
