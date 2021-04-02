import React from "react";
import { colors } from "../util/colors.js";
import AnimatedUpArrow from "./AnimatedUpArrow.js";
import AnimatedDownArrow from "./AnimatedDownArrow.js";
import SkillsIcons from "./SkillsIcons.js";

export default function Skills({
  id = "",
  upArrowTo = "",
  downArrowTo = "",
  upArrowToolTip = "",
  downArrowToolTip = "",
}) {
  return (
    <div
      className="section"
      id={id}
      style={{
        backgroundColor: `${colors.black}`,
      }}
    >
      <div className="section-content section-skills">
        <div>
          <AnimatedUpArrow
            to={upArrowTo}
            color={colors.white}
            toolTip={upArrowToolTip}
          ></AnimatedUpArrow>
          <div className="with-p">
            <h1
              style={{
                color: `${colors.white}`,
              }}
            >
              Skills
            </h1>
            <p
              style={{
                color: `${colors.white}`,
              }}
            >
              Ordered by level of proficiency
            </p>
          </div>
          <SkillsIcons className="skill-icons-tall"></SkillsIcons>
          <AnimatedDownArrow
            to={downArrowTo}
            color={colors.white}
            toolTip={downArrowToolTip}
          ></AnimatedDownArrow>
        </div>
        <div>
          <SkillsIcons className="skill-icons-wide"></SkillsIcons>
        </div>
      </div>
    </div>
  );
}
