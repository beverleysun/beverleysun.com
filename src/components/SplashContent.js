import React from "react";
import { config, Trail } from "react-spring/renderprops";
import AnimatedDownArrow from "./AnimatedDownArrow.js";
import { colors } from "../util/colors.js";

export default function SplashContent({
  title = "Title",
  style = {},
  textColor = "white",
  arrowLinkTo = "",
}) {
  const content = [];

  content.push(
    <h1 style={{ fontSize: "6rem", color: `${textColor}` }} key="1">
      {title}
    </h1>,
    <h2 style={{ color: `${textColor}` }} key="2">
      Part III Software Engineering Student at UoA
    </h2>,
    <h2 style={{ color: `${textColor}` }} key="3">
      Always looking to learn
    </h2>,
    <h2 style={{ color: `${textColor}` }} key="4">
      Loves dogs
    </h2>,
    <div style={{ marginTop: "2.5rem" }}>
      <AnimatedDownArrow
        to={arrowLinkTo}
        color={colors.white}
        toolTip="about-me"
      ></AnimatedDownArrow>
    </div>
  );

  return (
    <div style={style}>
      <Trail
        from={{ marginTop: "-10rem" }}
        to={{ marginTop: "0" }}
        config={config.gentle}
        items={content}
        keys={(item) => item.key}
        delay="500"
      >
        {(item) => (props) => <div style={props}>{item}</div>}
      </Trail>
    </div>
  );
}
