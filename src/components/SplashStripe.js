import React from "react";

export default function SplashStripe({ height = "20vh", color = "#eee" }) {
  return (
    <div
      style={{ height: height, backgroundColor: color, width: "100vw" }}
    ></div>
  );
}
