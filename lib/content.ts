export const slides = [
  { label: "No.1 rated on Google", title: "Trusted by Our Customers.", text: "Careful work and honest advice, from first photo to final delivery.", file: "hero-trust.jpg", alt: "Restored leather armchair in a bright living room", position: "object-[72%_center]" },
  { label: "Customer service No.1", title: "Service That Puts Our Customers First.", text: "Send photos, tell us what you need, and we guide you every step.", file: "hero-service.jpg", alt: "Upholsterer reviewing fabric options with a customer", position: "object-[76%_center]" },
  { label: "Environmental responsibility", title: "Restore More. Replace Less.", text: "Giving good furniture a longer life keeps it out of landfill.", file: "hero-environment.jpg", alt: "Craftsperson repairing a wooden chair", position: "object-[74%_center]" },
  { label: "High manufacturing capacity", title: "From One Piece to Large-Scale Projects.", text: "Workshop capacity for single heirlooms and bulk commercial orders.", file: "hero-capacity.jpg", alt: "Workshop with several sofas in restoration", position: "object-center" },
  { label: "End-to-end solutions", title: "Everything Your Furniture Needs, Under One Roof.", text: "Upholstery, wood restoration and materials handled by one team.", file: "hero-end-to-end.jpg", alt: "Craftsman fitting upholstery to a chair frame", position: "object-[76%_center]" },
  { label: "Convenience", title: "Furniture Restoration Made Easier.", text: "Start with a WhatsApp message. We take care of the rest.", file: "hero-convenience.jpg", alt: "Customer sending furniture photos by phone", position: "object-[82%_center]" },
  { label: "Cost saving", title: "Restore Quality Furniture Instead of Replacing It.", text: "Well-built furniture often costs less to restore than to replace.", file: "hero-cost-saving.jpg", alt: "Refreshed sofa in a family home", position: "object-[68%_center]" },
];

export const transformations = [
  { title: "Sofa Restoration", slug: "sofa-restoration" },
  { title: "Armchair Restoration", slug: "armchair-restoration" },
  { title: "Dining Chair Restoration", slug: "dining-chair-restoration" },
  { title: "Wood Furniture Restoration", slug: "wood-furniture-restoration" },
];

export const pillars = [
  { title: "Renew", text: "Give furniture a fresh new look through new materials and finishes." },
  { title: "Restore", text: "Repair and restore comfort, appearance and functionality." },
  { title: "Preserve", text: "Extend the life and character of furniture worth keeping." },
];

export const materials = ["Fabric", "Leather", "PU Leather", "Colours", "Textures", "Patterns"].map((name) => ({
  name, file: `material-${name.toLowerCase().replace(" ", "-")}.jpg`,
}));

export const industries = ["F&B", "Hospitality", "Offices", "Retail", "Education", "Property Management"];
export const trustPoints = ["Proven Customer Trust", "Complete Restoration Solutions", "Residential & Commercial", "Quality Craftsmanship"];

// Real supplied data goes here. Leave empty until the client provides it.
export const reviews: { name: string; text: string; stars: number }[] = [];
export const brands: { name: string; logoFile?: string }[] = [];

// Development-only placeholders (hidden in production unless NEXT_PUBLIC_SHOW_PLACEHOLDERS=true).
export const placeholderReviews = [1, 2, 3].map((n) => ({ name: `Reviewer ${n}`, text: "Development placeholder. Replace with a real Google review.", stars: 5 }));
export const placeholderBrands = [1, 2, 3, 4, 5, 6, 7, 8].map((n) => ({ name: `Logo placeholder ${n}` }));
