/**
 * Turns a bare host or a full URL into a protocol-prefixed origin without a
 * trailing slash, so callers can always concatenate a path onto it.
 */
function normaliseOrigin(value: string): string {
  const withProtocol = /^https?:\/\//.test(value) ? value : `https://${value}`;
  return withProtocol.replace(/\/+$/, "");
}

/**
 * Canonical origin of the deployed website.
 *
 * Resolution order:
 * 1. `NEXT_PUBLIC_SITE_URL` — set this once the site runs on a custom domain.
 * 2. `VERCEL_PROJECT_PRODUCTION_URL` — injected by Vercel into every build, so
 *    a `<project>.vercel.app` deployment canonicalises to its real host without
 *    any manual configuration.
 * 3. The documented default below, used for local builds.
 *
 * Only server modules import this file, so the non-public Vercel variable is
 * resolved at build time and never reaches the browser bundle.
 */
export const siteUrl = normaliseOrigin(
  process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.VERCEL_PROJECT_PRODUCTION_URL ??
    "kirti-rawal-personal-website.vercel.app"
);

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
