import Link from "next/link";
import { legalLinks, nav, serviceLinks, socialLinks, whatsapp } from "@/lib/site";
import Logo from "./Logo";
import WhatsAppLink from "./WhatsAppLink";

export default function Footer() {
  return (
    <footer className="bg-forest-deep text-ivory/80">
      <div className="wrap grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo light />
          <p className="mt-3 text-gold-light">Renew • Restore • Preserve</p>
          <WhatsAppLink cta="footer" icon className="btn-gold mt-6">Chat on WhatsApp</WhatsAppLink>
        </div>
        <div>
          <h2 className="font-serif text-lg !text-ivory">Services</h2>
          <ul className="mt-3 space-y-1">{serviceLinks.map((s) => <li key={s.href}><Link href={s.href} className="footer-link">{s.label}</Link></li>)}</ul>
        </div>
        <div>
          <h2 className="font-serif text-lg !text-ivory">Quick Links</h2>
          <ul className="mt-3 space-y-1">{nav.map((n) => <li key={n.href}><Link href={n.href} className="footer-link">{n.label}</Link></li>)}</ul>
          <p className="mt-4 text-sm">WhatsApp: {whatsapp.display}</p>
          {socialLinks.length > 0 && (
            <ul className="mt-3 flex gap-4 text-sm">{socialLinks.map((s) => <li key={s.href}><a href={s.href} className="footer-link">{s.label}</a></li>)}</ul>
          )}
        </div>
      </div>
      <div className="border-t border-ivory/15">
        <div className="wrap flex flex-wrap justify-between gap-4 py-5 text-xs">
          <span>© {new Date().getFullYear()} Furniture Restoration Center</span>
          {legalLinks.length > 0 && (
            <ul className="flex gap-4">{legalLinks.map((l) => <li key={l.href}><Link href={l.href} className="footer-link">{l.label}</Link></li>)}</ul>
          )}
        </div>
      </div>
    </footer>
  );
}
