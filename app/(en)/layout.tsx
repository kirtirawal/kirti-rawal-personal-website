import type { Metadata } from "next";
import type { ReactNode } from "react";
import { siteContent } from "../content";
import "../globals.css";

export const metadata: Metadata = {
  title: `${siteContent.name} — Medical Systems, Software & Healthcare`,
  description:
    "Kirti Rawal builds software, data tools and intelligent systems for healthcare, bringing together medical systems engineering, software, data and AI.",
  openGraph: {
    title: siteContent.name,
    description: "Medical systems, software, healthcare data and applied AI — with curiosity about people and the world.",
    type: "website",
    locale: "en_US"
  }
};

export default function EnglishLayout({
  children
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
