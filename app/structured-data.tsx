import { pageContent, siteContent } from "./content";
import { languagePaths, siteUrl, type SiteLanguage } from "./site-config";

/** Topics that describe the profile, used by search engines for entity matching. */
const knowsAbout = [
  "Medical systems engineering",
  "Software engineering",
  "Public health data visualization",
  "Medical device requirements analysis",
  "MDR-related documentation",
  "Explainable medical imaging AI"
];

type JsonLdNode = Record<string, unknown>;

/**
 * Builds a schema.org `ProfilePage` with an embedded `Person` node.
 *
 * Only facts that already appear on the site are published, so the structured
 * data never claims more than the visible page does.
 *
 * @param language - Language whose copy and canonical URL should be used.
 * @returns A JSON-LD document describing the profile page.
 */
function buildProfilePage(language: SiteLanguage): JsonLdNode {
  const content = pageContent[language];
  const pageUrl = `${siteUrl}${languagePaths[language]}`;
  const personId = `${pageUrl}#person`;
  const currentRole = content.experience.items.find((item) => /present|seit|heute/i.test(item.date));

  const person: JsonLdNode = {
    "@type": "Person",
    "@id": personId,
    name: siteContent.name,
    url: pageUrl,
    email: `mailto:${siteContent.email}`,
    description: content.meta.description,
    jobTitle: currentRole?.role,
    worksFor: currentRole
      ? { "@type": "Organization", name: currentRole.organization }
      : undefined,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Magdeburg",
      addressCountry: "DE"
    },
    alumniOf: content.experience.educationItems.map((item) => ({
      "@type": "CollegeOrUniversity",
      name: item.institution
    })),
    knowsAbout,
    sameAs: [siteContent.socialLinks.linkedIn, siteContent.socialLinks.github]
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      person,
      {
        "@type": "ProfilePage",
        "@id": `${pageUrl}#profile`,
        url: pageUrl,
        name: content.meta.title,
        description: content.meta.description,
        inLanguage: language,
        mainEntity: { "@id": personId }
      }
    ]
  };
}

/** Inline JSON must not be able to close the surrounding script element. */
function serializeProfilePage(language: SiteLanguage): string {
  return JSON.stringify(buildProfilePage(language)).replace(/</g, "\\u003c");
}

/**
 * Renders the profile JSON-LD for one language.
 *
 * Google has no separate API for this, so the block is emitted as an inline
 * script element in the document body.
 */
export function StructuredData({ language }: { language: SiteLanguage }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeProfilePage(language) }}
    />
  );
}
