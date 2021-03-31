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
    <div
      className="section"
      style={{
        backgroundColor: `${colors.white}`,
      }}
      id={id}
    >
      <div className="section-content">
        <AnimatedUpArrow
          to={upArrowTo}
          color={colors.orange}
          toolTip={upArrowToolTip}
        ></AnimatedUpArrow>
        <h1
          style={{
            color: `${colors.orange}`,
          }}
        >
          About Me
        </h1>
        <div className="with-p">
          <p
            style={{
              color: `${colors.orange}`,
            }}
          >
            Hey there! I'm a Penultimate Year Software Engineering Student at
            the University of Auckland. I'm passionate about what I do with a
            firm appreciation for good design. I enjoy photography, painting,
            hiking, running, and playing with dogs.
          </p>
          <sub style={{ color: `${colors.orange}` }}>If only I had a dog.</sub>
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
