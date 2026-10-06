# Temporary assets

**Status: the Home page uses temporary AI-generated editorial images.** They are local project assets created with OpenAI image generation and must be replaced with approved genuine client photography when available. They must not be described as Furniture Restoration Center projects, staff, workshop or customers.

When adding a temporary image, record it in the table below. Never describe temporary images as Furniture Restoration Center projects, staff, workshop or customers.

| Filename | Appears in | Generated / stock | Source / licence | Genuine replacement needed |
|---|---|---|---|---|
| hero-trust.jpg | Hero slide 1 | Generated | OpenAI image generation; temporary site asset | Genuine restored-piece photograph |
| hero-service.jpg | Hero slide 2 | Generated | OpenAI image generation; temporary site asset | Real consultation photo with consent |
| hero-environment.jpg | Hero slide 3 | Generated | OpenAI image generation; temporary site asset | Real restoration-in-progress photo |
| hero-capacity.jpg | Hero slide 4 | Generated | OpenAI image generation; temporary site asset | Real workshop photo |
| hero-end-to-end.jpg | Hero slide 5 | Generated | OpenAI image generation; temporary site asset | Real upholstery/wood work in progress |
| hero-convenience.jpg | Hero slide 6 | Generated | OpenAI image generation; temporary site asset | Real collection/delivery or quotation photo |
| hero-cost-saving.jpg | Hero slide 7 | Generated | OpenAI image generation; temporary site asset | Real furniture-worth-restoring photo |
| workshop-intro.jpg | Introduction | Generated | OpenAI image generation; temporary site asset | Real workshop/craftsmanship photo |
| furniture-upholstery.jpg | Service card | Generated | OpenAI image generation; temporary site asset | Real upholstery project |
| wood-restoration.jpg | Service card | Generated | OpenAI image generation; temporary site asset | Real wood restoration project |
| material-fabric.jpg, material-leather.jpg, material-pu-leather.jpg, material-colours.jpg, material-textures.jpg, material-patterns.jpg | Materials | Generated | OpenAI image generation; temporary site assets | Photos of actual offered swatches |
| corporate-commercial.jpg | Corporate | Generated | OpenAI image generation; temporary site asset | Real commercial project |
| our-story.jpg | Our Story | Generated | OpenAI image generation; temporary site asset | Real team/workshop photo with consent |
| og-home.jpg | Open Graph (1200x630) | Generated crop | Derived from generated hero-trust.jpg | Approved brand sharing image |

## Furniture Upholstery page (/services/furniture-upholstery)
Existing generated images are reused where suitable, and four additional temporary card images were generated:

| Filename | Used for | Note |
|---|---|---|
| furniture-upholstery.jpg | Page hero; Armchair & Lounge Chair card | Also used on Home |
| hero-cost-saving.jpg | Sofa Restoration card | Also Home hero slide 7 |
| wood-restoration.jpg | Dining Chair card | Also Home service card |
| hero-trust.jpg | Leather Restoration card | Also Home hero slide 1 |
| material-fabric / leather / pu-leather / textures / patterns .jpg | Quality Materials | Also on Home |
| og-home.jpg | Open Graph image | Shared with Home |
| service-recliner.jpg | Recliner card | OpenAI-generated temporary site asset |
| service-headboard.jpg | Bed Frame & Headboard card | OpenAI-generated temporary site asset |
| service-office-chair.jpg | Office Chair card | OpenAI-generated temporary site asset |
| service-cushions.jpg | Custom Cushions card | OpenAI-generated temporary site asset |

Genuine client project photos should eventually replace all temporary service imagery.

## Wood Furniture Restoration page (/services/wood-furniture-restoration)
The existing hero image is reused, and eight additional temporary card images were generated with OpenAI image generation:

| Filename | Used for | Note |
|---|---|---|
| wood-restoration.jpg | Page hero (focal point 38%) and Preserve split section (focal point 80%) | Also Home service card and Furniture Upholstery Dining Chair card. Replace with a genuine wood restoration photo. |
| og-home.jpg | Open Graph image | Shared with Home |
| wood-service-restoration.jpg | Wood Furniture Restoration card | Generated temporary asset |
| wood-service-refinishing.jpg | Wood Refinishing card | Generated temporary asset |
| wood-service-structural.jpg | Structural Repair card | Generated temporary asset |
| wood-service-frame.jpg | Broken Frame Repair card | Generated temporary asset |
| wood-service-leg.jpg | Furniture Leg Repair card | Generated temporary asset |
| wood-service-touchups.jpg | Wood Touch-Ups card | Generated temporary asset |
| wood-service-cabinet.jpg | Cabinet Rails & Hinges card | Generated temporary asset |
| wood-service-antique.jpg | Antique & Vintage Furniture card | Generated temporary asset |

Genuine replacements: real photos of each repair type (joint repair, refinished surface, frame, leg, touch-up, cabinet hardware, vintage piece) from client projects, with customer consent.

## Portfolio page (/portfolio)
All 12 entries in `lib/portfolio.ts` are **temporary, neutral presentation content, not genuine projects**. A visible note ("Images shown are illustrative...") appears under the gallery heading; set `showTemporaryNotice = false` once real projects are supplied.

Existing images reused (first existing file in each entry's `files` list is used):

| Filename | Used for |
|---|---|
| furniture-upholstery.jpg | Hero (fallback for portfolio-hero.jpg) |
| hero-cost-saving.jpg | Classic Sofa Renewal |
| service-recliner.jpg | Recliner Upholstery |
| service-headboard.jpg | Upholstered Headboard |
| service-office-chair.jpg | Office Seating Renewal |
| hero-trust.jpg | Leather Armchair Care |
| wood-restoration.jpg | Wooden Dining Set Restoration |
| wood-service-antique.jpg | Vintage Sideboard Refinishing |
| corporate-commercial.jpg | Restaurant Banquette Upholstery |

Additional OpenAI-generated temporary assets:

| Filename | Used for |
|---|---|
| portfolio-hero.jpg | Portfolio hero |
| portfolio-sofa-02.jpg | Modern Sofa Refresh |
| portfolio-armchair-01.jpg | Lounge Chair Reupholstery |
| portfolio-dining-chair-01.jpg | Dining Chair Refresh |
| portfolio-commercial-02.jpg | Hospitality Lounge Seating |

Dropping a file named `portfolio-<name>.jpg` takes priority over the reused image for that entry (`portfolio-sofa-01.jpg`, `portfolio-recliner-01.jpg`, `portfolio-headboard-01.jpg`, `portfolio-office-chair-01.jpg`, `portfolio-leather-01.jpg`, `portfolio-wood-01.jpg`, `portfolio-wood-02.jpg`, `portfolio-commercial-01.jpg`).

Genuine replacements: real completed-project photographs per category, with customer consent. **Genuine matching before/after pairs are still required** (the data type has a reserved `pair` field; no pair is displayed or labelled).

## Material Catalog page (/material-catalog)
All 18 entries in `lib/materials.ts` are **temporary illustrative category examples, not confirmed stock, supplier selections or exact materials offered.** The visible notice ("Material images are illustrative while the current supplier catalogues and available selections are being prepared.") is controlled by `showTemporaryMaterialNotice`; remove it only after verified supplier content replaces the temporary images.

Existing images reused (first existing file in each entry's `files` list is used):

| Filename | Used for |
|---|---|
| material-textures.jpg | Hero (fallback for catalog-hero.jpg) and Natural Woven Texture card (repeated once) |
| material-fabric.jpg | Linen Weave |
| material-leather.jpg | Classic Cognac Leather |
| material-pu-leather.jpg | Warm Tan PU Leather |
| material-colours.jpg | Forest & Olive |
| material-patterns.jpg | Heritage Pattern |
| wood-service-restoration.jpg | Natural Walnut (illustrative walnut-toned sideboard) |

Additional OpenAI-generated temporary assets:

`catalog-hero.jpg`, `catalog-velvet.jpg`, `catalog-boucle.jpg`, `catalog-performance.jpg`, `catalog-leather-green.jpg`, `catalog-pu-cream.jpg`, `catalog-premium-weave.jpg`, `catalog-soft-touch.jpg`, `catalog-warm-neutrals.jpg`, `catalog-fine-grain.jpg`, `catalog-geometric.jpg`, `catalog-walnut-deep.jpg`.

A `catalog-*.jpg` file for an already-covered entry (`catalog-linen.jpg`, `catalog-leather-cognac.jpg`, `catalog-pu-tan.jpg`, `catalog-forest-olive.jpg`, `catalog-natural-woven.jpg`, `catalog-heritage-pattern.jpg`, `catalog-walnut-natural.jpg`) takes priority over the reused image.

Genuine replacements: photographs of the actual swatches and wood finishes offered, taken from supplier catalogues with permission.

**Suppliers/brands:** no supplier information has been verified, so no brand grid is shown. `verifiedSuppliers` in `lib/materials.ts` is an empty, unused list ready for verified names/logos. Supplier catalogues and permissions are still required.

## Before / after
Fake transformations are not allowed. The section appears only when both `<slug>-before.jpg` and `<slug>-after.jpg` exist for a pair (slugs: `sofa-restoration`, `armchair-restoration`, `dining-chair-restoration`, `wood-furniture-restoration`). **Genuine matching project pairs are required.** With none, the whole section is hidden.

## Reviews and brands
Hidden in production until verified `reviews` and `brands` are added in `lib/content.ts`.
# Corporate page

The `/corporate` page currently reuses `corporate-commercial.jpg`, `portfolio-commercial-02.jpg`, `service-office-chair.jpg` and `hero-capacity.jpg`. These are illustrative placeholders and must be replaced with genuine, permission-cleared commercial project photography before the temporary notice is removed.

# About page

The `/about` page currently reuses `our-story.jpg`, `workshop-intro.jpg` and `hero-end-to-end.jpg`. They are illustrative generated assets, not photographs of Furniture Restoration Center staff or facilities. Replace them with approved company, team and workshop photography before removing the visible notice.

# Contact page

The `/contact` hero reuses `hero-convenience.jpg` as a temporary illustrative image. Replace it with approved brand or customer-service photography. No address, email address, opening hours or map is displayed because those business details have not yet been verified.
