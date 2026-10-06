import type { Metadata } from "next";
import Link from "next/link";
import { resolveImage } from "@/lib/images";
import { upholsteryMaterials, upholsteryServices, upholsterySteps } from "@/lib/upholstery";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import ImageCard from "@/components/ImageCard";
import SiteImage from "@/components/SiteImage";
import CTASection from "@/components/CTASection";

const title = "Furniture Upholstery Malaysia | Furniture Restoration Center";
const description = "Professional furniture upholstery services for sofas, chairs, leather furniture, headboards and commercial seating in Malaysia.";
const og = resolveImage("og-home.jpg", "Furniture Restoration Center").src;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services/furniture-upholstery" },
  openGraph: { type: "website", siteName: "Furniture Restoration Center", locale: "en_MY", url: "/services/furniture-upholstery", title, description, ...(og ? { images: [og] } : {}) },
};

export default function FurnitureUpholsteryPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Services" }, { label: "Furniture Upholstery" }]}
        label="Furniture upholstery services"
        title={<>Renew Your Furniture With <br className="hidden sm:block" />Quality Upholstery.</>}
        text="Expert upholstery and repair solutions to restore comfort, style and durability for your furniture."
        image={resolveImage("furniture-upholstery.jpg", "Green upholstered armchair with a timber frame (temporary image)")}
        ctaId="upholstery-hero"
      />

      <section className="sec">
        <div className="wrap">
          <SectionHeading title="Our Furniture Upholstery Services" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {upholsteryServices.map((s) => (
              <ImageCard key={s.title} title={s.title} text={s.text} position={s.position} image={resolveImage(s.file, s.alt)} />
            ))}
          </div>
        </div>
      </section>

      <section className="sec bg-cream/60">
        <div className="wrap">
          <SectionHeading title="Our Process" intro="Simple, Convenient and Hassle-Free." />
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {upholsterySteps.map((step, i) => (
              <li key={step.title} className="border-t-2 border-gold pt-4">
                <span className="font-serif text-3xl text-gold" aria-hidden="true">{i + 1}</span>
                <h3 className="mt-1 font-serif text-2xl">{step.title}</h3>
                <p className="mt-2 text-ink/80">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <SectionHeading title="Quality Materials" />
          <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {upholsteryMaterials.map((m) => (
              <li key={m.name}>
                <div className="relative aspect-square"><SiteImage image={resolveImage(m.file, `${m.name} material sample (temporary image)`)} sizes="(min-width: 1024px) 18vw, (min-width: 640px) 33vw, 50vw" /></div>
                <p className="mt-2 font-serif text-lg">{m.name}</p>
              </li>
            ))}
          </ul>
          <Link href="/material-catalog" className="btn-green mt-10">View Material Catalog →</Link>
        </div>
      </section>

      <CTASection />
    </>
  );
}
