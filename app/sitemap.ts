import type { MetadataRoute } from "next";
import { languagePaths, siteUrl } from "./site-config";

/**
 * Lists both language versions and declares them as translations of each other.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(
    Object.entries(languagePaths).map(([language, path]) => [language, `${siteUrl}${path}`])
  );

  return Object.entries(languagePaths).map(([language, path]) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: language === "en" ? 1 : 0.9,
    alternates: { languages }
  }));
}
