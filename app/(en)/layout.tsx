import type { ReactNode } from "react";
import { pageContent } from "../content";
import { createMetadata, siteViewport } from "../metadata";
import { StructuredData } from "../structured-data";
import "../globals.css";

export const metadata = createMetadata("en");
export const viewport = siteViewport;

export default function EnglishLayout({
  children
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">
          {pageContent.en.nav.skipToContent}
        </a>
        {children}
        <StructuredData language="en" />
      </body>
    </html>
  );
}
