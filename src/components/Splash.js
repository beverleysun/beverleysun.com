import React, { useState } from "react";
import { config, Trail } from "react-spring/renderprops";
import SplashStripe from "./SplashStripe.js";
import SplashContent from "./SplashContent.js";
import { colors } from "../util/colors.js";

export default function Splash({
  downArrowTo = "",
  title = "Title",
  downArrowToolTip = "",
  id = "",
}) {
  const [bgCompleted, setBgCompleted] = useState(false);
  const bgColor = colors.blue;

  const stripes = [];
  for (let i = 0; i < 5; i++) {
    stripes.push(
      <SplashStripe height="20vh" color={bgColor} key={i}></SplashStripe>
    );
  }

  return (
    <div>
      <div className="section" style={{ position: "absolute" }}>
        <SplashContent
          title={title}
          downArrowTo={downArrowTo}
          downArrowToolTip={downArrowToolTip}
          style={{ paddingBottom: "100px" }}
        ></SplashContent>
      </div>
      <div style={{ width: "100vw", height: "100vh" }} id={id}>
        {bgCompleted ? (
          <div
            style={{
              height: "100vh",
              width: "100vw",
              backgroundColor: `${bgColor}`,
            }}
          ></div>
        ) : (
          <Trail
            items={stripes}
            from={{ marginLeft: "-100vw" }}
            to={{ marginLeft: "0" }}
            keys={(item) => item.key}
            config={config.slow}
            onRest={() => setTimeout(() => setBgCompleted(true), 1200)}
          >
            {(item) => (props) => <div style={props}>{item}</div>}
          </Trail>
        )}
      </div>
    </div>
  );
}
