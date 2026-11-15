import { ImageResponse } from "next/og";
import { ogImage } from "./site-config";

/**
 * Builds the shared social preview card.
 *
 * Rendered with Satori, which only supports a subset of CSS (flexbox, no grid),
 * so every container that holds more than one child declares `display: flex`.
 */
export function renderOgCard() {
  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#f6f6f1",
          color: "#171917",
          padding: "68px 76px",
          fontFamily: "Arial, Helvetica, sans-serif"
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -90,
            width: 340,
            height: 340,
            display: "flex",
            borderRadius: 170,
            backgroundColor: "#d6f36a",
            opacity: 0.6
          }}
        />

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ display: "flex", fontSize: 34, fontWeight: 700, letterSpacing: -1 }}>
              KR
            </div>
            <div style={{ display: "flex", fontSize: 34, fontWeight: 700, color: "#9ab43d" }}>
              .
            </div>
          </div>
          <div style={{ display: "flex", fontSize: 17, letterSpacing: 3, color: "#686d67" }}>
            MEDICAL SYSTEMS · SOFTWARE · HEALTH DATA · AI
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 102,
              fontWeight: 800,
              letterSpacing: -5,
              lineHeight: 1
            }}
          >
            Kirti Rawal
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 24,
              maxWidth: 880,
              fontSize: 36,
              lineHeight: 1.35,
              color: "#3f453e"
            }}
          >
            Medical software, public-health data and explainable AI.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "2px solid rgba(23,25,23,.15)",
            paddingTop: 26,
            fontSize: 19,
            letterSpacing: 1.4,
            color: "#686d67"
          }}
        >
          <div style={{ display: "flex" }}>MAGDEBURG, GERMANY</div>
          <div style={{ display: "flex" }}>M.Sc. MEDICAL SYSTEMS ENGINEERING</div>
          <div style={{ display: "flex" }}>3+ YEARS ENGINEERING</div>
        </div>
      </div>
    ),
    { width: ogImage.width, height: ogImage.height }
  );
}
