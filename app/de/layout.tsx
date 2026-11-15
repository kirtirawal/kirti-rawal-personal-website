import type { Metadata } from "next";
import type { ReactNode } from "react";
import { siteContent } from "../content";
import "../globals.css";

export const metadata: Metadata = {
  title: `${siteContent.name} — Medizinische Systeme, Software & Gesundheit`,
  description:
    "Kirti Rawal entwickelt Software, Datentools und intelligente Systeme für die Medizin und verbindet medizinische Systemtechnik mit Software, Daten und KI.",
  openGraph: {
    title: siteContent.name,
    description: "Medizinische Systemtechnik, Software, Gesundheitsdaten und KI — mit Neugier auf Menschen und die Welt.",
    type: "website",
    locale: "de_DE"
  }
};

export default function GermanLayout({
  children
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
