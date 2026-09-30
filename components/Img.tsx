import Image, { type ImageProps } from "next/image";
import manifest from "@/lib/image-manifest.json";

type Entry = { width: number; height: number; widths: number[] };
const images = manifest as Record<string, Entry>;

type Props = Omit<ImageProps, "src" | "width" | "height" | "alt"> & { name: string; alt: string };

/** <Image> com dimensões intrínsecas lidas do manifest (evita layout shift). */
export default function Img({ name, alt, fill, ...rest }: Props) {
  const entry = images[name];
  if (fill) return <Image src={`/images/${name}`} alt={alt} fill {...rest} />;
  return <Image src={`/images/${name}`} alt={alt} width={entry.width} height={entry.height} {...rest} />;
}
