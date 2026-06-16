import { ImageResponse } from "next/og";

export const alt = "Raunak Singh — Full-Stack & AI Engineer, SDE at Fynd";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Brand palette as hex (Satori does not resolve oklch).
const PAPER = "#f7f4fd";
const INK = "#221d33";
const INK_SOFT = "#5b5570";
const PURPLE = "#7250e8";
const EMBER = "#d4853c";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: PAPER,
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: PURPLE,
              color: PAPER,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              fontWeight: 700,
              letterSpacing: -1,
            }}
          >
            RS
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, color: INK_SOFT, fontSize: 22 }}>
            <div style={{ width: 9, height: 9, borderRadius: 9, background: EMBER }} />
            Mumbai, India
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 96, fontWeight: 700, color: INK, letterSpacing: -3, lineHeight: 1 }}>
            Raunak Singh
          </div>
          <div style={{ display: "flex", marginTop: 26, fontSize: 38, color: INK, fontWeight: 500 }}>
            Full-Stack&nbsp;<span style={{ color: PURPLE }}>&amp;&nbsp;AI&nbsp;Engineer</span>
          </div>
          <div style={{ marginTop: 14, fontSize: 26, color: INK_SOFT }}>
            SDE at Fynd · Zenith Intelligence Platform
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", color: INK_SOFT, fontSize: 22 }}>
          <div style={{ display: "flex" }}>I build AI-native systems, and reverse-engineer the ones I don&apos;t.</div>
          <div style={{ display: "flex" }}>github.com/Raunaks068619</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
