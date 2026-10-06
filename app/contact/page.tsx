import type { Metadata } from "next";
import Link from "next/link";
import { contactFaqs, enquiryChecklist } from "@/lib/contact";
import { resolveImage } from "@/lib/images";
import { serviceLinks, whatsapp } from "@/lib/site";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import WhatsAppLink from "@/components/WhatsAppLink";

const route = "/contact";
const title = "Contact Furniture Restoration Center Malaysia";
const description = "Contact Furniture Restoration Center through WhatsApp for furniture upholstery, wood restoration and commercial furniture enquiries in Malaysia.";
const og = resolveImage("og-home.jpg", "Furniture Restoration Center").src;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: route },
  openGraph: { type: "website", siteName: "Furniture Restoration Center", locale: "en_MY", url: route, title, description, ...(og ? { images: [og] } : {}) },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        label="Contact us"
        title={<>Tell Us About the Furniture <br className="hidden sm:block" />You&apos;d Like to Restore.</>}
        text="Send photos and a few project details through WhatsApp to begin your enquiry."
        image={resolveImage("hero-convenience.jpg", "Customer preparing a furniture enquiry on a phone (temporary illustrative image)")}
        position="object-[82%_center]"
        ctaId="contact-hero"
        ctaLabel="Message Us on WhatsApp"
      />

      <section className="sec">
        <div className="wrap grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="bg-forest p-8 text-ivory md:p-10">
            <p className="text-sm tracking-wide text-gold-light">Furniture Restoration Center</p>
            <h2 className="mt-3 font-serif text-4xl !text-ivory">Start with a WhatsApp Message.</h2>
            <p className="mt-5 text-ivory/85">Our verified contact channel is WhatsApp. Send the information you have, and the team can review your enquiry before discussing the next step.</p>
            <div className="mt-8 border-t border-gold/40 pt-6">
              <p className="text-sm text-ivory/70">WhatsApp number</p>
              <a href={`tel:${whatsapp.phone}`} className="mt-1 inline-flex min-h-[44px] items-center font-serif text-3xl text-gold-light hover:text-ivory">{whatsapp.display}</a>
            </div>
            <WhatsAppLink cta="contact-card" icon className="btn-gold mt-6">Open WhatsApp →</WhatsAppLink>
          </div>

          <div>
            <SectionHeading
              title="What to Include in Your Enquiry"
              intro="A few useful details can make the first discussion clearer. You do not need to prepare a formal brief."
            />
            <ol className="mt-8 grid gap-6 sm:grid-cols-2">
              {enquiryChecklist.map((item, index) => (
                <li key={item.title} className="border-t-2 border-gold pt-4">
                  <span className="text-sm text-leather">0{index + 1}</span>
                  <h3 className="mt-2 font-serif text-2xl">{item.title}</h3>
                  <p className="mt-2 text-ink/80">{item.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="sec bg-cream/60">
        <div className="wrap">
          <SectionHeading title="How Can We Help?" intro="Explore the relevant page first, or send us your photos if you are unsure where to begin." />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Link href={serviceLinks[0].href} className="group border border-gold/40 bg-ivory p-7 transition-colors hover:border-gold">
              <h3 className="font-serif text-2xl group-hover:text-leather">Furniture Upholstery</h3>
              <p className="mt-3 text-ink/80">Sofas, chairs, recliners, headboards, office seating and cushions.</p>
              <span className="mt-5 inline-block text-sm font-medium text-forest">Explore service →</span>
            </Link>
            <Link href={serviceLinks[1].href} className="group border border-gold/40 bg-ivory p-7 transition-colors hover:border-gold">
              <h3 className="font-serif text-2xl group-hover:text-leather">Wood Restoration</h3>
              <p className="mt-3 text-ink/80">Repair, refinishing and restoration for wooden furniture.</p>
              <span className="mt-5 inline-block text-sm font-medium text-forest">Explore service →</span>
            </Link>
            <Link href="/corporate" className="group border border-gold/40 bg-ivory p-7 transition-colors hover:border-gold">
              <h3 className="font-serif text-2xl group-hover:text-leather">Corporate Projects</h3>
              <p className="mt-3 text-ink/80">Furniture requirements for hospitality, dining, office and commercial spaces.</p>
              <span className="mt-5 inline-block text-sm font-medium text-forest">Explore solutions →</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap max-w-4xl">
          <SectionHeading title="Frequently Asked Questions" />
          <div className="mt-8 divide-y divide-gold/40 border-y border-gold/40">
            {contactFaqs.map((faq) => (
              <details key={faq.question} className="group py-5">
                <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-4 font-serif text-xl text-forest marker:hidden">
                  {faq.question}
                  <span aria-hidden="true" className="text-gold transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="max-w-2xl pb-2 pr-8 text-ink/80">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="sec bg-forest text-ivory">
        <div className="wrap text-center">
          <h2 className="h2 !text-ivory">Ready to Show Us Your Furniture?</h2>
          <p className="mx-auto mt-4 max-w-xl text-ivory/85">Open WhatsApp, attach your photos and include a short description of what you would like restored.</p>
          <WhatsAppLink cta="contact-final" icon className="btn-gold mt-8">Send Your Enquiry →</WhatsAppLink>
        </div>
      </section>
    </>
  );
}
