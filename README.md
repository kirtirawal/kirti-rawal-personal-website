# Kirti Rawal — Personal Brand Website

A responsive portfolio built with Next.js App Router, TypeScript and custom CSS. It presents Kirti's medical systems, software engineering, healthcare data and applied AI profile while retaining her personal interests in travel, cultures and storytelling.

## Languages

The portfolio is available in English at `/` and German at `/de`. Use the
language switch in the navigation to change versions. Both versions share the
layout and project data in `app/portfolio.tsx` and `app/content.ts`.

## Requirements

- Node.js 20.9 or newer
- npm
- A GitHub account (for the GitHub → Vercel deployment workflow)

## Run locally

1. Extract this folder.
2. Open a terminal in the project folder.
3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open http://localhost:3000.

To check a production build locally:

```bash
npm run build
npm start
```

## Personalise before publishing

Edit `app/content.ts` to update the profile name, contact email, social links,
project cards, experience, education, skills and CV focus areas. Edit
`app/portfolio.tsx` to change the shared page layout:

- Add, remove or rename sections as your brand develops.

### Replace the portrait placeholder

The current hero portrait is a CSS illustration, not a real photograph. To use your own photo:

1. Add a portrait image to `public/`, for example `public/kirti.jpg`.
2. In `app/portfolio.tsx`, replace the `<div className="portrait-placeholder"> ... </div>` block with:

   ```tsx
   <div className="portrait-photo">
     <img src="/kirti.jpg" alt="Kirti Rawal" />
   </div>
   ```

3. Add this CSS to `app/globals.css`:

   ```css
   .portrait-photo {
     width: 250px;
     height: 355px;
     overflow: hidden;
     border-radius: 130px 130px 25px 25px;
     box-shadow: 0 25px 60px rgba(24,38,28,.17);
   }
   .portrait-photo img {
     width: 100%;
     height: 100%;
     object-fit: cover;
   }
   ```

For best results, use a high-resolution portrait with a simple background.

## Site URL, SEO and social previews

`NEXT_PUBLIC_SITE_URL` sets the canonical origin. It feeds the canonical links,
the `hreflang` pair between `/` and `/de`, `sitemap.xml`, `robots.txt` and the
JSON-LD profile block. The variable is optional: on Vercel the origin is detected
from `VERCEL_PROJECT_PRODUCTION_URL`, so a fresh deployment canonicalises to its
own `<project>.vercel.app` host with no configuration. Set `NEXT_PUBLIC_SITE_URL`
(see `.env.example`) only to point every URL at a custom domain.

Generated automatically:

- `app/sitemap.ts` → `/sitemap.xml`
- `app/robots.ts` → `/robots.txt`
- `app/icon.svg` → browser tab icon
- `app/og/route.tsx` → 1200×630 `og:image` for LinkedIn, X and chat apps
  (prerendered from `app/og-card.tsx` at build time, no binary asset needed)
- `app/structured-data.tsx` → `Person` + `ProfilePage` JSON-LD on both languages

## Deploy to Vercel

### Option A — GitHub (recommended)

1. Create a new repository on GitHub, for example `kirti-rawal-personal-brand`.
2. Upload the contents of this project folder to the repository (the `package.json` file should be at the repository root).
3. Sign in to Vercel with your GitHub account.
4. In the Vercel dashboard, choose **Add New → Project**.
5. Import `kirti-rawal-personal-brand`.
6. Keep the detected Next.js settings and select **Deploy**.
7. Vercel will build and publish the site. Each later push to the connected production branch triggers a new deployment.

### Option B — Vercel CLI

From the project folder:

```bash
npm install
npx vercel
```

Follow the prompts. For a production deployment:

```bash
npx vercel --prod
```

## Before sharing the live URL

- Confirm the contact email and social links.
- Confirm the canonical host. Open the deployed site, view source and check that
  `<link rel="canonical">` points at the domain you are actually sharing; if it
  does not, set `NEXT_PUBLIC_SITE_URL` and redeploy.
- Add public PDF files before changing the CV request links into download links.
- Check all personal and project details for accuracy.
- Add your own profile photo if desired.
- Test the site on a phone and desktop.
- Add a custom domain in Vercel → Project → Settings → Domains.

## Project structure

```text
kirti-rawal-personal-brand/
├── app/
│   ├── (en)/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── de/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── content.ts
│   ├── globals.css
│   ├── icon.svg
│   ├── metadata.ts
│   ├── opengraph-image.tsx
│   ├── portfolio.tsx
│   ├── robots.ts
│   ├── site-config.ts
│   ├── sitemap.ts
│   ├── structured-data.tsx
│   └── twitter-image.tsx
├── public/
├── .env.example
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Notes

- No secrets, API keys or database are required. `NEXT_PUBLIC_SITE_URL` is the
  only optional setting.
- Contact and CV request buttons open the visitor's email application.
- The visual portrait is a CSS placeholder; it does not depict a real person.
