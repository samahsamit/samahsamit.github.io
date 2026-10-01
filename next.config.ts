import type { NextConfig } from "next";

// Export statico per GitHub Pages: ogni pagina diventa un file .html in /out
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
