import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#2c1d14",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#c9a44c",
          fontSize: 22,
          fontWeight: 700,
          fontFamily: "Times New Roman, serif",
        }}
      >
        P
      </div>
    ),
    { ...size },
  );
}
