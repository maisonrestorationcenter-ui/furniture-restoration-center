import type { Metadata } from "next";
import { resolveImage } from "@/lib/images";
import { corporateBenefits, corporateSectors, corporateSteps } from "@/lib/corporate";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import ImageCard from "@/components/ImageCard";
import ProcessSteps from "@/components/ProcessSteps";
import SiteImage from "@/components/SiteImage";
import WhatsAppLink from "@/components/WhatsAppLink";

const route = "/corporate";
const title = "Corporate Furniture Restoration Malaysia | Furniture Restoration Center";
const description = "Furniture upholstery, repair and restoration for offices, hotels, restaurants, retail and commercial spaces in Malaysia.";
const og = resolveImage("og-home.jpg", "Furniture Restoration Center").src;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: route },
  openGraph: { type: "website", siteName: "Furniture Restoration Center", locale: "en_MY", url: route, title, description, ...(og ? { images: [og] } : {}) },
};

export default function CorporatePage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Corporate & Commercial" }]}
        label="Corporate & commercial"
        title={<>Furniture Restoration for <br className="hidden sm:block" />Business Spaces.</>}
        text="Upholstery, repair and restoration support for commercial furniture—from individual pieces to larger project requirements."
        image={resolveImage("corporate-commercial.jpg", "Commercial lounge furniture (temporary illustrative image)")}
        position="object-center"
        ctaId="corporate-hero"
        ctaLabel="Discuss Your Project"
      />

      <section className="sec">
        <div className="wrap">
          <SectionHeading
            title="Commercial Furniture We Can Help Restore"
            intro="Give existing furniture a considered new life while keeping the look of your space consistent. Every project begins with an assessment of the furniture and required work."
          />
          <p className="mt-3 max-w-2xl text-sm text-ink/70">Images shown are illustrative while genuine commercial project photography is prepared.</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {corporateSectors.map((sector) => (
              <ImageCard key={sector.title} title={sector.title} text={sector.text} image={resolveImage(sector.file, sector.alt)} />
            ))}
          </div>
        </div>
      </section>

      <section className="sec bg-cream/60">
        <div className="wrap grid items-center gap-10 md:grid-cols-2">
          <div>
            <SectionHeading
              title="A Practical Approach for Business Projects"
              intro="Whether you are refreshing a customer-facing space or restoring furniture for continued use, we keep the discussion focused on scope, material direction and the needs of your site."
            />
            <ul className="mt-8 grid gap-6 sm:grid-cols-2">
              {corporateBenefits.map((benefit) => (
                <li key={benefit.title} className="border-t-2 border-gold pt-4">
                  <h3 className="font-serif text-2xl">{benefit.title}</h3>
                  <p className="mt-2 text-ink/80">{benefit.text}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <SiteImage image={resolveImage("corporate-commercial.jpg", "Commercial furniture restoration direction (temporary illustrative image)")} sizes="(min-width: 768px) 50vw, 100vw" className="object-center" />
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <SectionHeading title="How a Commercial Project Starts" intro="A clear process from the first enquiry to handover." />
          <ProcessSteps steps={corporateSteps} />
        </div>
      </section>

      <section className="sec bg-forest text-ivory">
        <div className="wrap text-center">
          <h2 className="h2 !text-ivory">Planning a Furniture Refresh?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-ivory/85">Send us photos, estimated quantities, your location and the type of furniture involved. We&apos;ll review the information before discussing the next step.</p>
          <WhatsAppLink cta="corporate-project" icon className="btn-gold mt-8">Discuss Your Corporate Project →</WhatsAppLink>
        </div>
      </section>
    </>
  );
}
