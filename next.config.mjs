/** @type {import('next').NextConfig} */
const nextConfig = {
  // Borra la línea de output: 'export' y la de basePath
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig