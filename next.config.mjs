/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      beforeFiles: [{
        source: '/',
        destination: '/site.html'
      }],
      afterFiles: [],
      fallback: []
    };
  }
};

export default nextConfig;
