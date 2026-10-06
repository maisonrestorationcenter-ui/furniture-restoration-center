import type { Metadata } from "next";
import Link from "next/link";
import { resolveImage } from "@/lib/images";
import { approachPoints, values } from "@/lib/about";
import { serviceLinks } from "@/lib/site";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import SiteImage from "@/components/SiteImage";
import WhatsAppLink from "@/components/WhatsAppLink";

const route = "/about";
const title = "About Furniture Restoration Center Malaysia";
const description = "Learn about Furniture Restoration Center, our approach to upholstery and wood-furniture restoration, and our focus on renewing, restoring and preserving furniture.";
const og = resolveImage("og-home.jpg", "Furniture Restoration Center").src;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: route },
  openGraph: { type: "website", siteName: "Furniture Restoration Center", locale: "en_MY", url: route, title, description, ...(og ? { images: [og] } : {}) },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
        label="About Furniture Restoration Center"
        title={<>Restoring Furniture <br className="hidden sm:block" />Worth Keeping.</>}
        text="A furniture-restoration specialist serving homes and businesses through upholstery, repair, refinishing and practical restoration guidance."
        image={resolveImage("our-story.jpg", "Furniture restoration workshop scene (temporary illustrative image)")}
        position="object-center"
        ctaId="about-hero"
      />

      <section className="sec">
        <div className="wrap grid items-center gap-10 md:grid-cols-2">
          <div>
            <SectionHeading
              title="From Easy Furnishing to Furniture Restoration Center"
              intro="What began as Easy Furnishing has grown into Furniture Restoration Center—a more specialised brand focused on helping customers renew, restore and preserve furniture they value."
            />
            <p className="mt-5 text-ink/80">Our work covers furniture upholstery, leather and PU leather, wood restoration, refinishing and commercial furniture requirements. Each enquiry starts with the furniture itself: its condition, intended use and the result you hope to achieve.</p>
            <p className="mt-5 text-sm text-ink/65">The workshop image shown is illustrative and will be replaced with approved company photography.</p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <SiteImage image={resolveImage("workshop-intro.jpg", "Furniture craftsperson at work (temporary illustrative image)")} sizes="(min-width: 768px) 50vw, 100vw" className="object-center" />
          </div>
        </div>
      </section>

      <section className="sec bg-forest text-ivory">
        <div className="wrap">
          <SectionHeading light title="Renew. Restore. Preserve." intro="Three ideas guide the purpose of our work." />
          <ul className="mt-10 grid gap-px bg-gold/40 md:grid-cols-3">
            {values.map((value) => (
              <li key={value.title} className="bg-forest p-8">
                <h3 className="font-serif text-3xl !text-gold-light">{value.title}</h3>
                <p className="mt-3 text-ivory/85">{value.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="sec bg-cream/60">
        <div className="wrap">
          <SectionHeading title="Our Approach" intro="Clear guidance, appropriate restoration and straightforward communication." />
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {approachPoints.map((point, index) => (
              <li key={point.title} className="border-t-2 border-gold pt-4">
                <span className="text-sm text-leather">0{index + 1}</span>
                <h3 className="mt-2 font-serif text-2xl">{point.title}</h3>
                <p className="mt-2 text-ink/80">{point.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="sec">
        <div className="wrap grid items-center gap-10 md:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden">
            <SiteImage image={resolveImage("hero-end-to-end.jpg", "Furniture upholstery work in progress (temporary illustrative image)")} sizes="(min-width: 768px) 50vw, 100vw" className="object-center" />
          </div>
          <div>
            <SectionHeading
              title="Complete Furniture Restoration Solutions"
              intro="Explore our two main service areas, then send us photos for an initial discussion about your furniture."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={serviceLinks[0].href} className="btn-green">Furniture Upholstery</Link>
              <Link href={serviceLinks[1].href} className="btn-line">Wood Restoration</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="sec bg-forest text-ivory">
        <div className="wrap text-center">
          <h2 className="h2 !text-ivory">Have Furniture You&apos;d Like to Restore?</h2>
          <p className="mx-auto mt-4 max-w-xl text-ivory/85">Send us a few photos and tell us what you would like to change. We&apos;ll help you identify the next practical step.</p>
          <WhatsAppLink cta="about" icon className="btn-gold mt-8">Start a Conversation →</WhatsAppLink>
        </div>
      </section>
    </>
  );
}
