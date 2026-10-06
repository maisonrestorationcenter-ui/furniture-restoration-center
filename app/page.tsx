import Link from "next/link";
import { resolveImage } from "@/lib/images";
import { showPlaceholders } from "@/lib/config";
import { googleReviewsUrl, serviceLinks } from "@/lib/site";
import * as c from "@/lib/content";
import Hero from "@/components/Hero";
import BeforeAfter from "@/components/BeforeAfter";
import SiteImage from "@/components/SiteImage";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import ReviewCard from "@/components/ReviewCard";
import CTASection from "@/components/CTASection";
import BrandCarousel from "@/components/BrandCarousel";
import WhatsAppLink from "@/components/WhatsAppLink";

export default function HomePage() {
  const reviews = c.reviews.length ? c.reviews : showPlaceholders ? c.placeholderReviews : [];
  const brands = c.brands.length ? c.brands : showPlaceholders ? c.placeholderBrands : [];
  const heroSlides = c.slides.map((s) => ({ label: s.label, title: s.title, text: s.text, image: resolveImage(s.file, s.alt), position: s.position }));

  // Only genuine, matching pairs are shown. Missing files hide the whole section.
  const pairs = c.transformations
    .map((t) => ({ ...t, before: resolveImage(`${t.slug}-before.jpg`, `${t.title}: before`), after: resolveImage(`${t.slug}-after.jpg`, `${t.title}: after`) }))
    .filter((t) => t.before.src && t.after.src);

  return (
    <>
      <Hero slides={heroSlides} />

      <section className="sec">
        <div className="wrap grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm text-leather">Welcome to Furniture Restoration Center</p>
            <h2 className="h2 mt-3">Restoring Furniture Worth Keeping.</h2>
            <p className="mt-5 text-ink/80">We are a furniture restoration specialist serving homes and businesses. From sofas, chairs, upholstery and leather to wood and commercial furniture, we bring well-made pieces back to life.</p>
            <p className="mt-5 font-serif text-xl text-gold">Renew • Restore • Preserve</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href={serviceLinks[0].href} className="btn-green">Explore Our Services</Link>
              <WhatsAppLink cta="intro" icon className="btn-line">Get a Free Quotation</WhatsAppLink>
            </div>
          </div>
          <div className="relative aspect-[4/3]"><SiteImage image={resolveImage("workshop-intro.jpg", "Craftsman restoring a sofa in the workshop")} sizes="(min-width: 768px) 50vw, 100vw" /></div>
        </div>
      </section>

      <section className="sec bg-cream/60">
        <div className="wrap">
          <SectionHeading title="Our Services" />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <ServiceCard title="Furniture Upholstery" text="Fabric, leather and PU leather upholstery for sofas, chairs and more." href={serviceLinks[0].href} cta="Explore Upholstery →" image={resolveImage("furniture-upholstery.jpg", "Freshly upholstered armchair")} />
            <ServiceCard title="Wood Furniture Restoration" text="Repair, refinishing and preservation for tables, chairs and cabinets." href={serviceLinks[1].href} cta="Explore Wood Restoration →" image={resolveImage("wood-restoration.jpg", "Refinished wooden dining table")} />
          </div>
        </div>
      </section>

      {pairs.length > 0 && (
        <section className="sec">
          <div className="wrap">
            <SectionHeading title="See the Difference Restoration Can Make." />
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {pairs.map((t) => (
                <BeforeAfter key={t.slug} title={t.title} before={t.before} after={t.after} />
              ))}
            </div>
            <Link href="/portfolio" className="btn-green mt-10">View Our Portfolio →</Link>
          </div>
        </section>
      )}

      <section className="sec bg-forest text-ivory">
        <div className="wrap">
          <SectionHeading light title="Good Furniture Doesn't Always Need Replacing." />
          <div className="mt-10 grid gap-px bg-gold/40 md:grid-cols-3">
            {c.pillars.map((p) => (
              <div key={p.title} className="bg-forest p-8">
                <h3 className="font-serif text-3xl !text-gold-light">{p.title}</h3>
                <p className="mt-3 text-ivory/85">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <SectionHeading title="Find the Right Material for Your Furniture." />
          <ul className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-6">
            {c.materials.map((m) => (
              <li key={m.name}>
                <div className="relative aspect-square"><SiteImage image={resolveImage(m.file, `${m.name} sample`)} sizes="(min-width: 768px) 16vw, 50vw" /></div>
                <p className="mt-2 font-serif text-lg">{m.name}</p>
              </li>
            ))}
          </ul>
          <Link href="/material-catalog" className="btn-green mt-10">Explore Material Catalog →</Link>
        </div>
      </section>

      <section className="sec bg-cream/60">
        <div className="wrap grid gap-10 md:grid-cols-2">
          <div>
            <SectionHeading title="Restoration Solutions for Businesses." />
            <ul className="mt-6 grid grid-cols-2 gap-x-6 text-ink/80">{c.industries.map((i) => <li key={i} className="border-b border-gold/40 py-2">{i}</li>)}</ul>
            <p className="mt-6 text-ink/80">High Manufacturing Capacity · Bulk Projects · End-to-End Solutions</p>
            <Link href="/corporate" className="btn-green mt-8">Explore Corporate Solutions →</Link>
          </div>
          <div className="relative aspect-[4/3]"><SiteImage image={resolveImage("corporate-commercial.jpg", "Restored seating in a commercial space")} sizes="(min-width: 768px) 50vw, 100vw" /></div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <h2 className="sr-only">Why choose us</h2>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {c.trustPoints.map((t) => <li key={t} className="border-t-2 border-gold pt-4 font-serif text-2xl text-forest">{t}</li>)}
          </ul>
        </div>
      </section>

      <section className="sec bg-cream/60">
        <div className="wrap grid items-center gap-10 md:grid-cols-2">
          <div className="relative aspect-[4/3]"><SiteImage image={resolveImage("our-story.jpg", "Workshop team with restored furniture")} sizes="(min-width: 768px) 50vw, 100vw" /></div>
          <div>
            <SectionHeading title="Our Story" intro="What began as Easy Furnishing has grown into Furniture Restoration Center, a more specialised brand focused on restoring furniture worth keeping." />
            <Link href="/about" className="btn-green mt-8">Discover Our Story →</Link>
          </div>
        </div>
      </section>

      {reviews.length > 0 && (
        <section className="sec">
          <div className="wrap">
            <SectionHeading title="Trusted by Our Customers." />
            <div className="mt-10 grid gap-6 md:grid-cols-3">{reviews.map((r) => <ReviewCard key={r.name} {...r} />)}</div>
            {googleReviewsUrl && <a href={googleReviewsUrl} target="_blank" rel="noopener noreferrer" className="btn-line mt-10">View Our Google Reviews →</a>}
          </div>
        </section>
      )}

      <CTASection />

      {brands.length > 0 && (
        <section className="sec">
          <div className="wrap"><SectionHeading title="Materials & Brands We Work With" /></div>
          <div className="wrap mt-10"><BrandCarousel brands={brands} /></div>
        </section>
      )}
    </>
  );
}
