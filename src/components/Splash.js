import React, { useState } from "react";
import { config, Spring } from "react-spring/renderprops";
import SplashContent from "./SplashContent";

export default function Splash() {
  let [phaseComplete, setPhaseComplete] = useState(false);

  return (
    // Background slide from the left to the right
    <Spring
      from={{ marginLeft: "-120vw" }}
      to={{ marginLeft: "0" }}
      config={config.slow}
      clamp="true"
      onRest={() => setPhaseComplete(!phaseComplete)}
    >
      {(props) => (
        <div style={props}>
          <div style={splashStyle}>
            {/* Fade in content when slide in completed */}
            {phaseComplete ? (
              <SplashContent title="Beverley Sun"></SplashContent>
            ) : (
              ""
            )}
          </div>
        </div>
      )}
    </Spring>
  );
}

const splashStyle = {
  backgroundColor: "#171717",
  height: "100vh",
  width: "120vw",
  position: "absolute",
};
