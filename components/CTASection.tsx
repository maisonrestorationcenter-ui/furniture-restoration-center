import WhatsAppLink from "./WhatsAppLink";

export default function CTASection() {
  return (
    <section className="sec bg-forest text-ivory">
      <div className="wrap text-center">
        <h2 className="h2 !text-ivory">Have Furniture Worth Restoring?</h2>
        <p className="mx-auto mt-4 max-w-xl text-ivory/85">Send us photos of your furniture and tell us what you&apos;d like restored.</p>
        <WhatsAppLink cta="banner" icon className="btn-gold mt-8">Get a Free Quotation →</WhatsAppLink>
      </div>
    </section>
  );
}
