import React from "react";
import { colors } from "../../util/colors.js";
import ProjectCards from "./ProjectCards";
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
      <div className="section-content section-two-column">
        <div>
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
            Projects
          </h1>
          <div className="with-p">
            <p
              style={{
                color: `${colors.black}`,
              }}
            >
              Listed are projects that I'm most proud of. Check out the GitHub
              to learn more about them.
            </p>
          </div>
          <ProjectCards className="project-cards-tall"></ProjectCards>
          <AnimatedDownArrow
            to={downArrowTo}
            color={colors.black}
            toolTip={downArrowToolTip}
          ></AnimatedDownArrow>
        </div>

        <ProjectCards className="project-cards-wide"></ProjectCards>
      </div>
    </div>
  );
}
