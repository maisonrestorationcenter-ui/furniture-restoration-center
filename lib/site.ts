export const whatsapp = { url: "https://wa.me/60102356206", display: "010-235 6206", phone: "+60102356206" };

export const nav = [
  { label: "Home", href: "/" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Material Catalog", href: "/material-catalog" },
  { label: "Corporate", href: "/corporate" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const serviceLinks = [
  { label: "Furniture Upholstery", href: "/services/furniture-upholstery" },
  { label: "Wood Furniture Restoration", href: "/services/wood-furniture-restoration" },
] as const;

// Fill only with verified client information. Empty = omitted from the UI.
export const googleReviewsUrl: string | undefined = undefined;
export const socialLinks: { label: string; href: string }[] = [];
export const legalLinks: { label: string; href: string }[] = [];
