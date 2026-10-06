// TEMPORARY presentation content. These entries are neutral illustrations, NOT genuine
// Furniture Restoration Center projects. Replace with real projects when supplied.
// `files` lists image candidates in priority order; the first that exists in public/images is used.
// If none exist the image area is omitted. `pair` is reserved for genuine before/after photos later.

export const portfolioCategories = ["All", "Sofa", "Armchair", "Dining Chair", "Recliner", "Bed & Headboard", "Office Chair", "Leather", "Wood", "Commercial"] as const;
export type PortfolioCategory = (typeof portfolioCategories)[number];

export type PortfolioProject = {
  title: string;
  categories: Exclude<PortfolioCategory, "All">[]; // first entry is the primary category
  text: string;
  files: string[];
  alt: string;
  position?: string;
  pair?: { before: string; after: string };
};

export const showTemporaryNotice = true; // visible note under the gallery heading; set false once real projects are in

export const portfolioProjects: PortfolioProject[] = [
  { title: "Classic Sofa Renewal", categories: ["Sofa"], text: "Fresh upholstery for a well-loved family sofa.", files: ["portfolio-sofa-01.jpg", "hero-cost-saving.jpg"], alt: "Green velvet sofa with cushions (illustrative image)", position: "object-left" },
  { title: "Modern Sofa Refresh", categories: ["Sofa"], text: "New covering and cushioning for everyday comfort.", files: ["portfolio-sofa-02.jpg"], alt: "Renewed sofa (illustrative image)" },
  { title: "Lounge Chair Reupholstery", categories: ["Armchair"], text: "A lounge chair renewed in a fresh material.", files: ["portfolio-armchair-01.jpg"], alt: "Reupholstered lounge chair (illustrative image)" },
  { title: "Dining Chair Refresh", categories: ["Dining Chair"], text: "Renewed seats and backs for daily dining.", files: ["portfolio-dining-chair-01.jpg"], alt: "Refreshed dining chairs (illustrative image)" },
  { title: "Recliner Upholstery", categories: ["Recliner"], text: "Comfort restored to a favourite recliner.", files: ["portfolio-recliner-01.jpg", "service-recliner.jpg"], alt: "Upholstered recliner chair (illustrative image)" },
  { title: "Upholstered Headboard", categories: ["Bed & Headboard"], text: "A soft, durable headboard in a chosen fabric.", files: ["portfolio-headboard-01.jpg", "service-headboard.jpg"], alt: "Upholstered headboard (illustrative image)" },
  { title: "Office Seating Renewal", categories: ["Office Chair", "Commercial"], text: "Comfortable, long-lasting seating for work.", files: ["portfolio-office-chair-01.jpg", "service-office-chair.jpg"], alt: "Renewed office chair (illustrative image)" },
  { title: "Leather Armchair Care", categories: ["Leather", "Armchair"], text: "Colour, texture and finish renewed on leather.", files: ["portfolio-leather-01.jpg", "hero-trust.jpg"], alt: "Brown leather armchair in a bright room (illustrative image)", position: "object-[75%_center]" },
  { title: "Wooden Dining Set Restoration", categories: ["Wood", "Dining Chair"], text: "A wooden dining set repaired and refinished.", files: ["portfolio-wood-01.jpg", "wood-restoration.jpg"], alt: "Wooden dining table and chairs (illustrative image)" },
  { title: "Vintage Sideboard Refinishing", categories: ["Wood"], text: "Careful refinishing for older wooden furniture.", files: ["portfolio-wood-02.jpg", "wood-service-antique.jpg"], alt: "Vintage wooden furniture (illustrative image)" },
  { title: "Restaurant Banquette Upholstery", categories: ["Commercial"], text: "Durable seating renewed for a dining space.", files: ["portfolio-commercial-01.jpg", "corporate-commercial.jpg"], alt: "Upholstered restaurant seating (illustrative image)" },
  { title: "Hospitality Lounge Seating", categories: ["Commercial"], text: "Lounge seating renewed for a hospitality setting.", files: ["portfolio-commercial-02.jpg"], alt: "Hospitality lounge seating (illustrative image)" },
];
