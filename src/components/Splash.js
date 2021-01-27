import React, { useState } from "react";
import SplashStripe from "./SplashStripe.js";
import SplashContent from "./SplashContent.js";

export default function Splash() {
  function phaseComplete() {
    setPhaseCompleted(true);
  }

  const [phaseCompleted, setPhaseCompleted] = useState(false);

  const stripes = [];
  for (let i = 0; i < 5; i++) {
    let startPos = (i + 1) * -100;
    stripes.push(
      <SplashStripe
        onPhaseComplete={i === 4 ? phaseComplete : () => {}}
        height="20vh"
        startPos={startPos + "vw"}
        color="#171717"
      ></SplashStripe>
    );
  }

  return (
    <div>
      {phaseCompleted ? (
        <div
          style={{
            height: "100vh",
            width: "100vw",
            backgroundColor: "#171717",
            padding: "200px 0 0 200px",
          }}
        >
          <SplashContent title="Beverley Sun"></SplashContent>
        </div>
      ) : (
        <>{stripes}</>
      )}
    </div>
  );
}
