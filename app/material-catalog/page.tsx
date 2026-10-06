import type { Metadata } from "next";
import { resolveImage, type ImageAsset } from "@/lib/images";
import { considerations, materials, showTemporaryMaterialNotice, temporaryMaterialNotice } from "@/lib/materials";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import MaterialCatalog from "@/components/MaterialCatalog";
import WhatsAppLink from "@/components/WhatsAppLink";

const route = "/material-catalog";
const title = "Furniture Upholstery Material Catalog Malaysia | Furniture Restoration Center";
const description = "Explore upholstery fabrics, leather, PU leather, colours, textures, patterns and wood finishes for furniture restoration in Malaysia.";
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

export default function MaterialCatalogPage() {
  const items = materials.map(({ files, alt, ...rest }) => ({ ...rest, image: firstAvailable(files, alt) }));

  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Material Catalog" }]}
        label="Material catalog"
        title={<>Find the Right Material <br className="hidden sm:block" />for Your Furniture.</>}
        text="Explore upholstery materials, colours, textures, patterns and wood finishes for your furniture-restoration project."
        image={firstAvailable(["catalog-hero.jpg", "material-textures.jpg"], "Layered upholstery fabrics in cream, grey, green and brown (illustrative image)")}
        position="object-center"
        ctaId="material-catalog-hero"
        ctaLabel="Ask About Materials"
      />

      <section className="sec">
        <div className="wrap">
          <SectionHeading
            title="Explore Our Material Categories"
            intro="The right material affects the appearance, comfort, durability and character of restored furniture. Browse the main categories below, then send us your preferred colour, texture or reference through WhatsApp."
          />
          {showTemporaryMaterialNotice && <p className="mt-3 max-w-2xl text-sm text-ink/70">{temporaryMaterialNotice}</p>}
          <div className="mt-10"><MaterialCatalog items={items} /></div>
        </div>
      </section>

      <section className="sec bg-cream/60">
        <div className="wrap">
          <SectionHeading title="Choosing the Right Material" />
          <ul className="mt-10 grid gap-6 md:grid-cols-3">
            {considerations.map((c) => (
              <li key={c.title} className="border-t-2 border-gold pt-4">
                <h3 className="font-serif text-2xl">{c.title}</h3>
                <p className="mt-2 text-ink/80">{c.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="sec bg-forest text-ivory">
        <div className="wrap text-center">
          <h2 className="h2 !text-ivory">Found a Material Direction You Like?</h2>
          <p className="mx-auto mt-4 max-w-xl text-ivory/85">Send us a screenshot, colour reference or material inspiration through WhatsApp. Our team can advise based on the available selections and your furniture.</p>
          <WhatsAppLink cta="material-catalog" icon className="btn-gold mt-8">Ask About This Material →</WhatsAppLink>
        </div>
      </section>
    </>
  );
}
