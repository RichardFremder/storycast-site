import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const barHeights = [22, 40, 65, 30, 80, 45, 95, 55, 35, 70, 50, 25, 60, 38, 82, 48];

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
          background: "#0b0d12",
          padding: "80px 90px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              fontFamily: "Georgia, serif",
              fontStyle: "italic",
              fontSize: 30,
              color: "#b8863e",
            }}
          >
            Storycast
          </span>
          <span
            style={{
              marginTop: 28,
              fontFamily: "Georgia, serif",
              fontSize: 58,
              lineHeight: 1.2,
              color: "#f1ece1",
              maxWidth: 900,
            }}
          >
            L&rsquo;audio, c&rsquo;est du sérieux… mais jamais ennuyeux.
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "flex-end", gap: 8, height: 100 }}>
          {barHeights.map((h, i) => (
            <div
              key={i}
              style={{
                width: 14,
                height: `${h}%`,
                background: "#b8863e",
                borderRadius: 4,
                opacity: 0.85,
              }}
            />
          ))}
        </div>
      </div>
    ),
    size
  );
}
