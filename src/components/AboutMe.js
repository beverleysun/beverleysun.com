import React from "react";
import { colors } from "../util/colors.js";
import AnimatedDownArrow from "./AnimatedDownArrow.js";
import AnimatedUpArrow from "./AnimatedUpArrow.js";

export default function AboutMe({
  upArrowTo = "",
  downArrowTo = "",
  upArrowToolTip = "",
  downArrowToolTip = "",
  id = "",
}) {
  return (
    <div style={{ height: "100vh", backgroundColor: "#fff" }} id={id}>
      <div style={{ margin: "25vh 0 0 15vw", position: "absolute" }}>
        <AnimatedUpArrow
          to={upArrowTo}
          color={colors.orange}
          toolTip={upArrowToolTip}
        ></AnimatedUpArrow>
        <h1
          style={{
            fontSize: "6rem",
            color: `${colors.orange}`,
          }}
        >
          About Me
        </h1>
        <div style={{ width: "40vw", marginBottom: "2.5rem" }}>
          <h2 style={{ color: `${colors.orange}`, marginBottom: "1rem" }}>
            Hey there! I'm a Penultimate Year Software Engineering Student at
            the University of Auckland. I'm passionate about what I do with a
            firm appreciation for good design. I enjoy photography, painting,
            hiking, running, and playing with dogs.
          </h2>
          <h5 style={{ color: `${colors.orange}` }}>If only I had a dog.</h5>
        </div>
        <AnimatedDownArrow
          to={downArrowTo}
          color={colors.orange}
          toolTip={downArrowToolTip}
        ></AnimatedDownArrow>
      </div>
    </div>
  );
}
