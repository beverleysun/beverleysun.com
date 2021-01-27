import React, { useState } from "react";
import { config, Spring } from "react-spring/renderprops";

export default function SplashStripe({
  onPhaseComplete = () => {},
  height = "20vh",
  startPos = "0",
  color = "#eee",
}) {
  let [phaseComplete, setPhaseComplete] = useState(false);

  return (
    // Background slide from the left to the right
    <Spring
      from={{ marginLeft: startPos }}
      to={{ marginLeft: "0" }}
      config={config.slow}
      clamp="true"
      onRest={() => {
        setPhaseComplete(!phaseComplete);
        onPhaseComplete();
      }}
    >
      {(props) => (
        <div style={props}>
          <div
            style={{ height: height, backgroundColor: color, ...splashStyle }}
          ></div>
        </div>
      )}
    </Spring>
  );
}

const splashStyle = {
  width: "100vw",
};
