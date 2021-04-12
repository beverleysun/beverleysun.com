import React from "react";
import { colors } from "../../util/colors.js";
import AnimatedDownArrow from "../small/AnimatedDownArrow.js";
import AnimatedUpArrow from "../small/AnimatedUpArrow.js";

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
          color={colors.black}
          toolTip={upArrowToolTip}
        ></AnimatedUpArrow>
        <h1
          style={{
            color: `${colors.blue}`,
          }}
        >
          About Me
        </h1>
        <div className="with-p">
          <p
            style={{
              color: `${colors.black}`,
            }}
          >
            Hey there! I'm a Penultimate Year Software Engineering Student at
            the University of Auckland. I'm passionate about what I do with a
            firm appreciation for good design. I enjoy photography, painting,
            hiking, running, and playing with dogs.
          </p>
          <sub style={{ color: `${colors.black}` }}>If only I had a dog.</sub>
        </div>
        <AnimatedDownArrow
          to={downArrowTo}
          color={colors.black}
          toolTip={downArrowToolTip}
        ></AnimatedDownArrow>
      </div>
    </div>
  );
}
