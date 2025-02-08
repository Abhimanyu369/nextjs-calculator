/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static export
  basePath: "/nextjs-calculator", // Change to your GitHub repo name
  images: {
    unoptimized: true, // Required for GitHub Pages
  },
};

export default nextConfig;
