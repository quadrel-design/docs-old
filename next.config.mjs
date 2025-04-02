/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/docs/' : '',  // Hier wird der Repository-Name eingebaut
  basePath: isProd ? '/docs' : '',      // Hier wird der Repository-Name eingebaut
  output: 'export',  // Aktiviert den statischen Export
  trailingSlash: true  // Fügt einen Schrägstrich am Ende der URLs hinzu (nützlich für GitHub Pages)
};

export default nextConfig;
