import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteUrl } from "@/lib/config";
import { resolveImage } from "@/lib/images";
import { whatsapp } from "@/lib/site";

// Used only when public/images/og-home.jpg exists.
const ogImage = resolveImage("og-home.jpg", "Furniture Restoration Center").src;

const serif = localFont({
  variable: "--font-serif",
  display: "swap",
  src: [
    { path: "./fonts/cormorant-garamond-500.ttf", weight: "500", style: "normal" },
    { path: "./fonts/cormorant-garamond-600.ttf", weight: "600", style: "normal" },
    { path: "./fonts/cormorant-garamond-700.ttf", weight: "700", style: "normal" },
  ],
});

const sans = localFont({
  variable: "--font-sans",
  display: "swap",
  src: [
    { path: "./fonts/inter-400.ttf", weight: "400", style: "normal" },
    { path: "./fonts/inter-500.ttf", weight: "500", style: "normal" },
    { path: "./fonts/inter-600.ttf", weight: "600", style: "normal" },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Furniture Restoration & Upholstery Malaysia | Furniture Restoration Center",
  description: "Professional furniture restoration, upholstery and wood restoration services for homes and businesses in Malaysia.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Furniture Restoration Center",
    locale: "en_MY",
    url: "/",
    title: "Furniture Restoration & Upholstery Malaysia | Furniture Restoration Center",
    description: "Professional furniture restoration, upholstery and wood restoration services for homes and businesses in Malaysia.",
    ...(ogImage ? { images: [ogImage] } : {}),
  },
};

// Verified properties only. Add address, hours, email, etc. once the client supplies them.
const localBusiness = { "@context": "https://schema.org", "@type": "LocalBusiness", name: "Furniture Restoration Center", url: siteUrl, telephone: whatsapp.phone };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${serif.variable} ${sans.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
        {/* Analytics: add GA4 / Google Ads via env-driven scripts here; listen for clicks on [data-cta^="whatsapp-"]. */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
      </body>
    </html>
  );
}
