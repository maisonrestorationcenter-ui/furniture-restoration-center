import type { Metadata } from "next";
import { resolveImage } from "@/lib/images";
import { woodServices, woodSteps } from "@/lib/wood-restoration";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import ImageCard from "@/components/ImageCard";
import ProcessSteps from "@/components/ProcessSteps";
import SiteImage from "@/components/SiteImage";
import CTASection from "@/components/CTASection";

const route = "/services/wood-furniture-restoration";
const title = "Wood Furniture Restoration Malaysia | Furniture Restoration Center";
const description = "Professional wood furniture restoration, refinishing and repair services for tables, chairs, cabinets and vintage furniture in Malaysia.";
const og = resolveImage("og-home.jpg", "Furniture Restoration Center").src;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: route },
  openGraph: { type: "website", siteName: "Furniture Restoration Center", locale: "en_MY", url: route, title, description, ...(og ? { images: [og] } : {}) },
};

export default function WoodFurnitureRestorationPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Services" }, { label: "Wood Furniture Restoration" }]}
        label="Wood furniture restoration"
        title={<>Restore the Beauty and Character <br className="hidden sm:block" />of Your Wood Furniture.</>}
        text="Professional repair, refinishing and restoration to preserve well-made wooden furniture for years to come."
        image={resolveImage("wood-restoration.jpg", "Wooden dining table and chairs in a warm room (temporary image)")}
        position="object-[38%_center]"
        ctaId="wood-hero"
      />

      <section className="sec">
        <div className="wrap">
          <SectionHeading title="Our Wood Furniture Restoration Services" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {woodServices.map((s) => (
              <ImageCard key={s.title} title={s.title} text={s.text} image={resolveImage(s.file, s.alt)} />
            ))}
          </div>
        </div>
      </section>

      <section className="sec bg-cream/60">
        <div className="wrap">
          <SectionHeading title="Our Restoration Process" intro="Careful, Practical and Made to Last." />
          <ProcessSteps steps={woodSteps} />
        </div>
      </section>

      <section className="sec">
        <div className="wrap grid items-center gap-10 md:grid-cols-2">
          <div className="relative aspect-[4/3]">
            <SiteImage image={resolveImage("wood-restoration.jpg", "Wooden dining furniture worth preserving (temporary image)")} sizes="(min-width: 768px) 50vw, 100vw" className="object-[80%_center]" />
          </div>
          <div>
            <SectionHeading title="Preserve Furniture Worth Keeping." intro="Well-made wooden furniture often carries quality, character and memories that are difficult to replace. Thoughtful restoration can extend its life while retaining the details that make it unique." />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
