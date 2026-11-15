import type { ReactNode } from "react";
import { pageContent } from "../content";
import { createMetadata, siteViewport } from "../metadata";
import { StructuredData } from "../structured-data";
import "../globals.css";

export const metadata = createMetadata("de");
export const viewport = siteViewport;

export default function GermanLayout({
  children
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="de">
      <body>
        <a className="skip-link" href="#main">
          {pageContent.de.nav.skipToContent}
        </a>
        {children}
        <StructuredData language="de" />
      </body>
    </html>
  );
}
