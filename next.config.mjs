const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/docs/' : '',
  basePath: isProd ? '/docs' : '',
  output: 'export'
};

export default nextConfig;
