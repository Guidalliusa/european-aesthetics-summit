import type { NextConfig } from "next";

/**
 * Exportação estática (pasta `out/`), pronta para GitHub Pages ou qualquer alojamento estático.
 * Se o site ficar num subcaminho (ex.: utilizador.github.io/summit), definir
 * NEXT_PUBLIC_BASE_PATH="/summit" no build.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath || undefined,
  trailingSlash: true,
  images: {
    loader: "custom",
    loaderFile: "./lib/image-loader.ts",
    deviceSizes: [480, 640, 800, 1080, 1280, 1600, 2400],
    imageSizes: [160, 240, 320],
  },
};

export default nextConfig;
