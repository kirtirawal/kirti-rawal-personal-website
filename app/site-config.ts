/**
 * Canonical origin of the deployed website.
 *
 * Override it with `NEXT_PUBLIC_SITE_URL` (see `.env.example`) once the site
 * runs on a custom domain. The fallback matches the Vercel project name.
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://kirti-rawal-personal-website.vercel.app"
).replace(/\/+$/, "");

/** Canonical path of every language, shared by metadata, sitemap and JSON-LD. */
export const languagePaths = {
  en: "/",
  de: "/de"
} as const;

export type SiteLanguage = keyof typeof languagePaths;

/**
 * Shared social preview card, prerendered by the `/og` route handler.
 *
 * Kept here (instead of in `og-card.tsx`) so that `metadata.ts` and the layouts
 * never pull `next/og` into their module graph.
 */
export const ogImage = {
  path: "/og",
  width: 1200,
  height: 630,
  alt: "Kirti Rawal — medical systems, software, healthcare data and applied AI"
} as const;
