import nextMdx from '@next/mdx';
const withMDX = nextMdx();

/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/docs/' : '', // Replace 'docs' with your repository name
  basePath: isProd ? '/docs' : '', // Same as above
  output: 'export',  // No need for `next export` here
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  trailingSlash: true, // Add trailing slashes to URLs for compatibility with GitHub Pages
};

export default withMDX(nextConfig);
