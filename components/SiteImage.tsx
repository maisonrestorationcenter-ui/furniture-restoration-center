import Image from "next/image";
import type { ImageAsset } from "@/lib/images";

type Props = { image: ImageAsset; sizes: string; className?: string; priority?: boolean; overlay?: boolean };

/** Fills a relatively-positioned parent that sets the aspect ratio. Shows a neutral block if the file is missing. */
export default function SiteImage({ image, sizes, className = "", priority = false, overlay = false }: Props) {
  if (!image.src) {
    return (
      <div role="img" aria-label={image.alt} className={`absolute inset-0 flex items-end bg-gradient-to-br from-wood/50 via-cream to-forest/40 p-3 text-[11px] text-ink/50 ${className}`}>
        {process.env.NODE_ENV !== "production" && `Add public/images/${image.file}`}
      </div>
    );
  }
  return (
    <>
      <Image src={image.src} alt={image.alt} fill sizes={sizes} priority={priority} className={`object-cover ${className}`} />
      {overlay && <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-forest-deep/70 via-forest-deep/20 to-transparent" />}
    </>
  );
}
