import fs from "node:fs";
import path from "node:path";

export type ImageAsset = { src?: string; alt: string; file: string };

/** Returns a real src only when the file exists in public/images. Server-side only. */
export function resolveImage(file: string, alt: string): ImageAsset {
  const exists = fs.existsSync(path.join(process.cwd(), "public", "images", file));
  return { file, alt, src: exists ? `/images/${file}` : undefined };
}
