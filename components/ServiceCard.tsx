import Link from "next/link";
import SiteImage from "./SiteImage";
import type { ImageAsset } from "@/lib/images";

type Props = { title: string; text: string; href: string; cta: string; image: ImageAsset };

export default function ServiceCard({ title, text, href, cta, image }: Props) {
  return (
    <article className="border border-gold/40 bg-ivory">
      <div className="relative aspect-[16/10]">
        <SiteImage image={image} sizes="(min-width: 768px) 50vw, 100vw" />
      </div>
      <div className="p-6 md:p-8">
        <h3 className="font-serif text-2xl md:text-3xl">{title}</h3>
        <p className="mt-3 text-ink/80">{text}</p>
        <Link href={href} className="btn-line mt-5">{cta}</Link>
      </div>
    </article>
  );
}
