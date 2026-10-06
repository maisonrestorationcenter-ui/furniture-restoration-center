import Link from "next/link";
import type { ReactNode } from "react";
import type { ImageAsset } from "@/lib/images";
import SiteImage from "./SiteImage";
import WhatsAppLink from "./WhatsAppLink";

type Crumb = { label: string; href?: string };
type Props = { crumbs: Crumb[]; label: string; title: ReactNode; text: string; image: ImageAsset; position?: string; ctaId: string; ctaLabel?: string };

/** Compact inner-page hero: breadcrumb, label, single H1, copy, WhatsApp CTA. */
export default function PageHero({ crumbs, label, title, text, image, position = "object-center", ctaId, ctaLabel = "Get a Free Quotation" }: Props) {
  return (
    <section className="relative overflow-hidden bg-forest-deep text-ivory">
      <div className="absolute inset-0">
        <SiteImage image={image} sizes="100vw" priority className={position} />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-forest-deep/90 via-forest-deep/65 to-forest-deep/20 max-md:bg-forest-deep/40" />
      </div>
      <div className="wrap relative flex min-h-[460px] flex-col justify-center py-14 md:min-h-[520px]">
        <nav aria-label="Breadcrumb" className="text-sm text-ivory/85">
          <ol className="flex flex-wrap items-center gap-x-2">
            {crumbs.map((c, i) => (
              <li key={c.label} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden="true">&gt;</span>}
                {c.href ? <Link href={c.href} className="inline-flex min-h-[44px] items-center underline-offset-4 hover:text-gold-light hover:underline">{c.label}</Link> : <span aria-current={i === crumbs.length - 1 ? "page" : undefined}>{c.label}</span>}
              </li>
            ))}
          </ol>
        </nav>
        <p className="mt-4 text-sm tracking-wide text-gold-light">{label}</p>
        <h1 className="hero-title">{title}</h1>
        <p className="mt-5 max-w-xl text-lg text-ivory/90">{text}</p>
        <div className="mt-8"><WhatsAppLink cta={ctaId} icon className="btn-gold">{ctaLabel}</WhatsAppLink></div>
      </div>
    </section>
  );
}
