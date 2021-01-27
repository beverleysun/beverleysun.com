import React from "react";
import { Trail } from "react-spring/renderprops";
import SplashStripe from "./SplashStripe.js";
import SplashContent from "./SplashContent.js";

export default function Splash({ arrowLinkTo }) {
  const color = "#99ced3";
  const stripes = [];
  for (let i = 0; i < 5; i++) {
    stripes.push(
      <SplashStripe height="19vh" color={color} key={i}></SplashStripe>
    );
  }

  return (
    <div style={{ width: "100vw", height: "95vh" }}>
      <SplashContent
        title="Beverley Sun"
        style={{
          margin: "25vh 0 0 15vw",
          position: "absolute",
          overflowY: "hidden",
        }}
        arrowLinkTo={arrowLinkTo}
      ></SplashContent>
      <Trail
        items={stripes}
        from={{ marginLeft: "-100vw" }}
        to={{ marginLeft: "0" }}
        keys={(item) => item.key}
      >
        {(item) => (props) => <div style={props}>{item}</div>}
      </Trail>
    </div>
  );
}
