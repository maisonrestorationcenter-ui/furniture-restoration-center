"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { nav, serviceLinks } from "@/lib/site";
import Logo from "./Logo";
import WhatsAppLink from "./WhatsAppLink";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const servicesButton = useRef<HTMLButtonElement>(null);

  useEffect(() => { setMenuOpen(false); setServicesOpen(false); }, [pathname]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setServicesOpen(false);
      setMenuOpen(false);
      servicesButton.current?.focus();
    }
  };

  return (
    <header onKeyDown={onKeyDown} className="sticky top-0 z-50 border-b border-gold/30 bg-ivory/95 backdrop-blur">
      <div className="wrap flex h-20 items-center justify-between">
        <Logo />
        <nav aria-label="Main" className="hidden items-center gap-7 text-sm lg:flex">
          <Link href="/" className="nav-link">Home</Link>
          <div
            ref={servicesRef}
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
            onBlur={(e) => { if (!servicesRef.current?.contains(e.relatedTarget as Node)) setServicesOpen(false); }}
          >
            <button ref={servicesButton} aria-expanded={servicesOpen} aria-controls="services-menu" onClick={() => setServicesOpen((o) => !o)} className="nav-link">
              Services <span aria-hidden="true">▾</span>
            </button>
            {servicesOpen && (
              <ul id="services-menu" className="absolute left-0 top-full w-64 border border-gold/40 bg-ivory py-2 shadow-lg">
                {serviceLinks.map((s) => (
                  <li key={s.href}><Link href={s.href} className="block px-4 py-3 hover:bg-cream">{s.label}</Link></li>
                ))}
              </ul>
            )}
          </div>
          {nav.slice(1).map((n) => <Link key={n.href} href={n.href} className="nav-link">{n.label}</Link>)}
          <WhatsAppLink cta="header" icon className="btn-green">Get a Free Quotation →</WhatsAppLink>
        </nav>
        <div className="flex items-center gap-2 lg:hidden">
          <WhatsAppLink cta="header-mobile" icon ariaLabel="Get a free quotation on WhatsApp" className="btn-green !w-12 !px-0" >{null}</WhatsAppLink>
          <button aria-expanded={menuOpen} aria-controls="mobile-menu" onClick={() => setMenuOpen((o) => !o)} className="btn-line min-w-[76px] !px-4">
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav id="mobile-menu" aria-label="Mobile" className="wrap flex max-h-[calc(100vh-5rem)] flex-col overflow-y-auto border-t border-gold/30 bg-ivory py-4 lg:hidden">
          {[nav[0], ...serviceLinks, ...nav.slice(1)].map((n) => (
            <Link key={n.href} href={n.href} onClick={() => setMenuOpen(false)} className="min-h-[48px] border-b border-gold/20 py-3">{n.label}</Link>
          ))}
          <WhatsAppLink cta="mobile-menu" icon className="btn-green mt-4">Get a Free Quotation →</WhatsAppLink>
        </nav>
      )}
    </header>
  );
}
