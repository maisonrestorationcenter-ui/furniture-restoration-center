const rawUrl = process.env.NEXT_PUBLIC_SITE_URL;
const isProd = process.env.NODE_ENV === "production";

if (isProd && (!rawUrl || rawUrl.includes("example.com"))) {
  throw new Error("Set NEXT_PUBLIC_SITE_URL to the real public domain before building for production.");
}

export const siteUrl = (rawUrl ?? "http://localhost:3000").replace(/\/$/, "");
export const showPlaceholders = !isProd || process.env.NEXT_PUBLIC_SHOW_PLACEHOLDERS === "true";
