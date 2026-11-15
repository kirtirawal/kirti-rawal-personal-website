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
│   └── portfolio.tsx
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

- No database, API keys or environment variables are required for this first version.
- Contact and CV request buttons open the visitor's email application.
- The visual portrait is a CSS placeholder; it does not depict a real person.
