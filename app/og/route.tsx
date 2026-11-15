import { renderOgCard } from "../og-card";

/** Prerenders the card once at build time instead of on every request. */
export const dynamic = "force-static";

export function GET() {
  return renderOgCard();
}
