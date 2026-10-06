import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/config";

// All eight approved routes. Keep this list stable while the remaining pages are completed.
const routes = ["", "/services/furniture-upholstery", "/services/wood-furniture-restoration", "/portfolio", "/material-catalog", "/corporate", "/about", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({ url: `${siteUrl}${route}` }));
}
