import React from "react";
import { config, Trail } from "react-spring/renderprops";
import AnimatedDownArrow from "./AnimatedDownArrow.js";
import { colors } from "../util/colors.js";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function SplashContent({
  title = "Title",
  style = {},
  textColor = "white",
  downArrowTo = "",
  downArrowToolTip = "",
}) {
  const content = [];

  content.push(
    <div>
      <a
        href="https://github.com/beverleysun"
        target="_blank"
        style={{ marginRight: "15px" }}
        rel="noreferrer"
      >
        <AiFillGithub color={colors.white} size="40px"></AiFillGithub>
      </a>
      <a
        href="https://www.linkedin.com/in/beverley-sun/"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillLinkedin color={colors.white} size="40px"></AiFillLinkedin>
      </a>
    </div>,
    <h1 style={{ color: `${textColor}` }} key="1">
      {title}
    </h1>,
    <p style={{ color: `${textColor}` }} key="2">
      • Part III Software Engineering student at the University of Auckland
    </p>,
    <p style={{ color: `${textColor}` }} key="3">
      • Always looking to learn
    </p>,
    <p style={{ color: `${textColor}` }} key="4">
      • Loves dogs
    </p>,
    <div>
      <AnimatedDownArrow
        to={downArrowTo}
        color={colors.white}
        toolTip={downArrowToolTip}
      ></AnimatedDownArrow>
    </div>
  );

  return (
    <div style={style} className="section-content">
      <Trail
        from={{ marginTop: "-10rem" }}
        to={{ marginTop: "0" }}
        config={config.gentle}
        items={content}
        keys={(item) => item.key}
        delay="500"
      >
        {(item) => (props) => (
          <div style={props} className="with-p">
            {item}
          </div>
        )}
      </Trail>
    </div>
  );
}
