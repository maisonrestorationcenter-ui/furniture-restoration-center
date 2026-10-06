// TEMPORARY presentation content. Entries are illustrative category examples, NOT confirmed stock,
// supplier selections or exact materials offered. Replace with supplier-catalogue content when verified.
// `files` lists image candidates in priority order; the first that exists in public/images is used.
// If none exist the image area is omitted and the card shows text only.

export const materialCategories = ["All", "Fabric", "Genuine Leather", "PU Leather", "Premium Upholstery", "Colours", "Textures", "Patterns", "Wood Finishes"] as const;
export type MaterialCategory = (typeof materialCategories)[number];

export type MaterialEntry = {
  name: string;
  category: Exclude<MaterialCategory, "All">;
  text: string;
  files: string[];
  alt: string;
  position?: string;
  status?: "illustrative";
};

export const showTemporaryMaterialNotice = true;
export const temporaryMaterialNotice = "Material images are illustrative while the current supplier catalogues and available selections are being prepared.";

// Add only verified suppliers (with permission to show their name/logo). Nothing is rendered from this yet.
export const verifiedSuppliers: { name: string; logoFile?: string }[] = [];

const e = (name: string, category: MaterialEntry["category"], text: string, files: string[], alt: string, position?: string): MaterialEntry =>
  ({ name, category, text, files, alt: `${alt} (illustrative category example)`, position, status: "illustrative" });

export const materials: MaterialEntry[] = [
  e("Linen Weave", "Fabric", "A natural, lightly textured weave with a relaxed look.", ["catalog-linen.jpg", "material-fabric.jpg"], "Folded fabric swatches in natural and green tones"),
  e("Velvet", "Fabric", "A soft, deep-pile surface with rich colour.", ["catalog-velvet.jpg"], "Velvet fabric"),
  e("Bouclé", "Fabric", "A looped, textured fabric with a cosy character.", ["catalog-boucle.jpg"], "Bouclé fabric"),
  e("Performance Fabric", "Fabric", "A fabric category chosen with everyday use in mind.", ["catalog-performance.jpg"], "Upholstery fabric"),
  e("Classic Cognac Leather", "Genuine Leather", "A warm, classic leather tone.", ["catalog-leather-cognac.jpg", "material-leather.jpg"], "Leather samples in cognac and green tones"),
  e("Deep Green Leather", "Genuine Leather", "A rich green that pairs well with timber.", ["catalog-leather-green.jpg"], "Green leather"),
  e("Warm Tan PU Leather", "PU Leather", "A warm tan synthetic leather finish.", ["catalog-pu-tan.jpg", "material-pu-leather.jpg"], "Folded PU leather samples in neutral and green tones"),
  e("Cream PU Leather", "PU Leather", "A soft cream synthetic leather finish.", ["catalog-pu-cream.jpg"], "Cream PU leather"),
  e("Textured Premium Weave", "Premium Upholstery", "A dimensional weave with a refined feel.", ["catalog-premium-weave.jpg"], "Textured woven upholstery"),
  e("Soft-Touch Upholstery", "Premium Upholstery", "A smooth, gentle-feeling upholstery surface.", ["catalog-soft-touch.jpg"], "Soft upholstery material"),
  e("Forest & Olive", "Colours", "Deep greens and olives for a grounded look.", ["catalog-forest-olive.jpg", "material-colours.jpg"], "Swatches in forest green, olive, cream, brown and gold"),
  e("Warm Neutrals", "Colours", "Creams, sands and soft browns.", ["catalog-warm-neutrals.jpg"], "Warm neutral swatches"),
  e("Natural Woven Texture", "Textures", "Visible weave and natural character.", ["catalog-natural-woven.jpg", "material-textures.jpg"], "Layered woven fabrics in cream, grey, green and brown"),
  e("Fine-Grain Texture", "Textures", "A subtle, even surface texture.", ["catalog-fine-grain.jpg"], "Fine-grain textured material"),
  e("Heritage Pattern", "Patterns", "Classic motifs with a traditional feel.", ["catalog-heritage-pattern.jpg", "material-patterns.jpg"], "Patterned fabric swatches with floral and geometric designs"),
  e("Subtle Geometric Pattern", "Patterns", "Quiet geometry for a modern touch.", ["catalog-geometric.jpg"], "Subtle geometric patterned fabric"),
  e("Natural Walnut", "Wood Finishes", "A warm, natural walnut-toned wood finish.", ["catalog-walnut-natural.jpg", "wood-service-restoration.jpg"], "Walnut-toned wooden sideboard", "object-center"),
  e("Deep Walnut", "Wood Finishes", "A darker, richer walnut tone.", ["catalog-walnut-deep.jpg"], "Dark walnut wood finish"),
];

export const considerations = [
  { title: "Comfort & Feel", text: "Consider how the furniture will be used and how the material should feel." },
  { title: "Durability & Care", text: "Choose a material suited to the furniture's use and preferred maintenance." },
  { title: "Colour & Character", text: "Select colours and textures that complement the furniture and surrounding space." },
];
