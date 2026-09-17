import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt =
  "Ramy Syafitri — Software Engineer · Full-Stack Web Developer. Building business applications for inventory, manufacturing, CRM and operations.";

const fontFile = join(process.cwd(), "node_modules/next/dist/compiled/@vercel/og/Geist-Regular.ttf");

function loadFont() {
  try {
    return readFileSync(fontFile);
  } catch {
    return undefined;
  }
}

export default function OpengraphImage() {
  const geist = loadFont();

  const fonts = [
    geist && { name: "Geist", data: geist, weight: 400 as const, style: "normal" as const },
    geist && { name: "Geist", data: geist, weight: 500 as const, style: "normal" as const },
    geist && { name: "Geist", data: geist, weight: 600 as const, style: "normal" as const },
  ].filter((f): f is NonNullable<typeof f> => Boolean(f));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#161610",
          color: "#ece9e2",
          fontFamily: "Geist",
          padding: "72px 80px 64px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -180,
            right: -140,
            width: 460,
            height: 460,
            borderRadius: 999,
            background: "rgba(154, 164, 204, 0.14)",
            display: "flex",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 64,
                height: 64,
                borderRadius: 16,
                background: "#4c587b",
                color: "#faf8f4",
                fontFamily: "Geist",
                fontWeight: 600,
                fontSize: 28,
                letterSpacing: -1,
              }}
            >
              RS
            </div>
            <div
              style={{
                display: "flex",
                fontFamily: "Geist",
                fontSize: 22,
                fontWeight: 500,
                letterSpacing: 4,
                color: "#9a968c",
              }}
            >
              RAMYSYAFITRI.VERCEL.APP
            </div>
          </div>
          <div
            style={{
              display: "flex",
              padding: "12px 20px",
              borderRadius: 999,
              border: "1px solid #2d2b23",
              fontFamily: "Geist",
              fontSize: 18,
              fontWeight: 500,
              letterSpacing: 3,
              color: "#9aa4cc",
            }}
          >
            PORTFOLIO
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontFamily: "Geist",
              fontSize: 18,
              fontWeight: 500,
              letterSpacing: 5,
              color: "#9aa4cc",
              marginBottom: 18,
            }}
          >
            SOFTWARE ENGINEER · FULL-STACK WEB DEVELOPER
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 88,
              lineHeight: 1.05,
              fontWeight: 600,
              letterSpacing: -3,
              color: "#ece9e2",
            }}
          >
            Ramy Syafitri
          </div>

          <div
            style={{
              display: "flex",
              width: 84,
              height: 8,
              borderRadius: 999,
              background: "#4c587b",
              marginTop: 34,
              marginBottom: 30,
            }}
          />

          <div
            style={{
              display: "flex",
              maxWidth: 780,
              fontFamily: "Geist",
              fontSize: 28,
              lineHeight: 1.45,
              fontWeight: 400,
              color: "#9a968c",
            }}
          >
            Building business applications — inventory, manufacturing,
            CRM, POS and internal tools that people actually use.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontFamily: "Geist",
            fontSize: 18,
            letterSpacing: 3,
            color: "#6c6a61",
          }}
        >
          <div style={{ display: "flex" }}>© 2026 RAMY SYAFITRI</div>
          <div style={{ display: "flex" }}>BEKASI · INDONESIA</div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts,
    }
  );
}