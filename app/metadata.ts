import type { Metadata, Viewport } from "next";
import { pageContent } from "./content";
import { languagePaths, ogImage, siteUrl, type SiteLanguage } from "./site-config";

/** Keeps the browser UI in step with the paper background of the page. */
export const siteViewport: Viewport = {
  themeColor: "#f6f6f1",
  colorScheme: "light"
};

/**
 * Builds the metadata block for one language.
 *
 * Search engines receive a canonical URL and the `hreflang` pair that links the
 * English and German versions, so both pages are indexed as translations of
 * each other instead of as duplicates.
 *
 * @param language - Language of the route the metadata is attached to.
 * @returns Metadata for that route segment.
 */
export function createMetadata(language: SiteLanguage): Metadata {
  const meta = pageContent[language].meta;
  const path = languagePaths[language];

  return {
    metadataBase: new URL(siteUrl),
    title: meta.title,
    description: meta.description,
    applicationName: "Kirti Rawal",
    authors: [{ name: "Kirti Rawal", url: siteUrl }],
    creator: "Kirti Rawal",
    category: "technology",
    robots: { index: true, follow: true },
    alternates: {
      canonical: path,
      languages: {
        en: languagePaths.en,
        de: languagePaths.de,
        "x-default": languagePaths.en
      }
    },
    openGraph: {
      type: "website",
      url: path,
      siteName: "Kirti Rawal",
      title: meta.title,
      description: meta.ogDescription,
      locale: language === "en" ? "en_US" : "de_DE",
      alternateLocale: language === "en" ? ["de_DE"] : ["en_US"],
      images: [
        {
          url: ogImage.path,
          width: ogImage.width,
          height: ogImage.height,
          alt: ogImage.alt
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.ogDescription,
      images: [{ url: ogImage.path, alt: ogImage.alt }]
    },
    icons: {
      icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
      shortcut: ["/icon.svg"]
    }
  };
}
