import React from "react";
import { colors } from "../util/colors.js";
import AnimatedUpArrow from "./AnimatedUpArrow.js";
import AnimatedDownArrow from "./AnimatedDownArrow.js";

export default function Technologies({
  id = "",
  upArrowTo = "",
  downArrowTo = "",
  upArrowToolTip = "",
  downArrowToolTip = "",
}) {
  return (
    <div
      id={id}
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: `${colors.orange}`,
      }}
    >
      <div style={{ margin: "25vh 0 0 15vw", position: "absolute" }}>
        <AnimatedUpArrow
          to={upArrowTo}
          color={colors.white}
          toolTip={upArrowToolTip}
        ></AnimatedUpArrow>
        <h1
          style={{
            fontSize: "6rem",
            color: `${colors.white}`,
          }}
        >
          Technologies
        </h1>
        <AnimatedDownArrow
          to={downArrowTo}
          color={colors.white}
          toolTip={downArrowToolTip}
        ></AnimatedDownArrow>
      </div>
    </div>
  );
}
