import type { ImageAsset } from "@/lib/images";
import SiteImage from "./SiteImage";

type Props = { title: string; text: string; image: ImageAsset; position?: string };

/** Compact image card. The photo area is omitted when no image file exists. */
export default function ImageCard({ title, text, image, position = "object-center" }: Props) {
  return (
    <article className="flex flex-col border border-gold/40 bg-ivory">
      {image.src && (
        <div className="relative aspect-[4/3]">
          <SiteImage image={image} sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className={position} />
        </div>
      )}
      <div className="border-t-2 border-gold p-5">
        <h3 className="font-serif text-xl md:text-2xl">{title}</h3>
        <p className="mt-2 text-ink/80">{text}</p>
      </div>
    </article>
  );
}
