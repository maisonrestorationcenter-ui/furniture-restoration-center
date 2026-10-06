import type { Metadata } from "next";
import { resolveImage, type ImageAsset } from "@/lib/images";
import { portfolioProjects, showTemporaryNotice } from "@/lib/portfolio";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import PortfolioGallery from "@/components/PortfolioGallery";
import WhatsAppLink from "@/components/WhatsAppLink";

const route = "/portfolio";
const title = "Furniture Restoration Portfolio Malaysia | Furniture Restoration Center";
const description = "Explore furniture upholstery, wood restoration and commercial seating possibilities from Furniture Restoration Center in Malaysia.";
const og = resolveImage("og-home.jpg", "Furniture Restoration Center").src;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: route },
  openGraph: { type: "website", siteName: "Furniture Restoration Center", locale: "en_MY", url: route, title, description, ...(og ? { images: [og] } : {}) },
};

/** First existing candidate wins; otherwise the image area is omitted. */
function firstAvailable(files: string[], alt: string): ImageAsset {
  for (const file of files) {
    const image = resolveImage(file, alt);
    if (image.src) return image;
  }
  return resolveImage(files[0], alt);
}

export default function PortfolioPage() {
  const items = portfolioProjects.map(({ files, alt, pair: _pair, ...rest }) => ({ ...rest, image: firstAvailable(files, alt) }));

  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Portfolio" }]}
        label="Our portfolio"
        title={<>Furniture Renewed. <br className="hidden sm:block" />Craftsmanship Preserved.</>}
        text="Explore the possibilities of thoughtful upholstery, repair, refinishing and restoration."
        image={firstAvailable(["portfolio-hero.jpg", "furniture-upholstery.jpg"], "Green upholstered armchair with a timber frame (illustrative image)")}
        position="object-center"
        ctaId="portfolio-hero"
      />

      <section className="sec">
        <div className="wrap">
          <SectionHeading
            title="Our Work"
            intro="From sofas and dining chairs to leather seating, wooden furniture and commercial projects, every piece deserves an approach suited to its materials, condition and character."
          />
          {showTemporaryNotice && <p className="mt-3 max-w-2xl text-sm text-ink/70">Images shown are illustrative while our project photography is prepared.</p>}
          <div className="mt-10"><PortfolioGallery items={items} /></div>
        </div>
      </section>

      <section className="sec bg-forest text-ivory">
        <div className="wrap text-center">
          <h2 className="h2 !text-ivory">Have a Similar Piece to Restore?</h2>
          <p className="mx-auto mt-4 max-w-xl text-ivory/85">Send us photos of your furniture and tell us what you would like restored.</p>
          <WhatsAppLink cta="portfolio" icon className="btn-gold mt-8">Get a Similar Restoration →</WhatsAppLink>
        </div>
      </section>
    </>
  );
}
