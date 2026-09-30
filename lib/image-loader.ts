"use client";

import manifest from "./image-manifest.json";

type Entry = { width: number; height: number; widths: number[] };
const images = manifest as Record<string, Entry>;
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/**
 * As imagens são pré-otimizadas em WebP (várias larguras) por scripts/process-images.py.
 * O `src` passado ao <Image> é "/images/<nome>"; aqui escolhemos a menor largura
 * disponível que cobre a pedida pelo navegador.
 */
export default function imageLoader({ src, width }: { src: string; width: number }) {
  const name = src.replace(/^\/images\//, "");
  const entry = images[name];
  if (!entry) return `${basePath}${src}`;
  const w = entry.widths.find((x) => x >= width) ?? entry.widths[entry.widths.length - 1];
  return `${basePath}/images/${name}-${w}.webp`;
}
