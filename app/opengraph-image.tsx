import { ImageResponse } from "next/og";

// The preview image shown when a page of this site is shared. Built once, at build time.
export const alt = "AppZad, hospital management software. Go Digital In Just 2 Minutes, With Zero Learning Curve.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 80,
        background: "#f9fafb",
        color: "#111827",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <svg width="56" height="56" viewBox="0 0 28 28">
          <path
            fill="#3b82f6"
            d="M15.052 0c6.914.513 12.434 6.033 12.947 12.947h-5.015a7.932 7.932 0 0 1-7.932-7.932V0Zm-2.105 22.985V28C6.033 27.487.513 21.967 0 15.053h5.015a7.932 7.932 0 0 1 7.932 7.932Z"
          />
          <path
            fill="#93c5fd"
            d="M0 12.947C.513 6.033 6.033.513 12.947 0v5.015a7.932 7.932 0 0 1-7.932 7.932H0Zm22.984 2.106h5.015C27.486 21.967 21.966 27.487 15.052 28v-5.015a7.932 7.932 0 0 1 7.932-7.932Z"
          />
        </svg>
        <div style={{ fontSize: 44, fontWeight: 700 }}>AppZad</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 84, fontWeight: 700, letterSpacing: -3, lineHeight: 1.05 }}>
          Go Digital In Just 2 Minutes
        </div>
        <div style={{ marginTop: 20, fontSize: 48, fontWeight: 600, color: "#6b7280" }}>With Zero Learning Curve</div>
      </div>
      <div style={{ fontSize: 30, color: "#374151" }}>Hospital management software for clinics and hospitals</div>
    </div>,
    size,
  );
}
