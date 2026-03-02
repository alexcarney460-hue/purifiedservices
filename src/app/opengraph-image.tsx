import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(180deg, #EAF7FA 0%, #FFFFFF 55%)",
          fontFamily: "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 88,
              height: 88,
              borderRadius: 22,
              background: "#071B2E",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 34,
              fontWeight: 800,
              letterSpacing: 1,
            }}
          >
            PS
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 36, fontWeight: 800, color: "#071B2E", lineHeight: 1.1 }}>
              Purified Services
            </div>
            <div style={{ fontSize: 20, color: "#0f172a", opacity: 0.7, marginTop: 6 }}>
              Fresno • Clovis • Central Valley
            </div>
          </div>
        </div>

        <div style={{ maxWidth: 920 }}>
          <div
            style={{
              fontSize: 64,
              fontWeight: 900,
              color: "#071B2E",
              lineHeight: 1.05,
              letterSpacing: -1,
            }}
          >
            Commercial & Residential Pool Service
          </div>
          <div style={{ fontSize: 28, color: "#0f172a", opacity: 0.75, marginTop: 20 }}>
            Documented visits • Responsive repairs • Same-day urgent response (Mon–Sat)
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ fontSize: 22, color: "#0f172a", opacity: 0.7 }}>
            www.fresnopoolcare.com
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              fontSize: 22,
              fontWeight: 700,
              color: "#007C8A",
            }}
          >
            Text 559-519-0335
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
