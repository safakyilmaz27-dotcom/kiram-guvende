import { ImageResponse } from "next/og";

export const alt = "Kiram Güvende — Kira Garantisi ile Düzenli Gelir";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0ea5e9 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 96, marginBottom: 24 }}>🏠</div>
        <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.1 }}>
          Kiram Güvende
        </div>
        <div
          style={{
            fontSize: 36,
            marginTop: 24,
            opacity: 0.9,
            maxWidth: 900,
          }}
        >
          Kira Garantisi ile Her Ay Aynı Tarihte Düzenli Gelir
        </div>
        <div
          style={{
            fontSize: 24,
            marginTop: 40,
            opacity: 0.75,
          }}
        >
          kiramguvende.com
        </div>
      </div>
    ),
    { ...size },
  );
}
