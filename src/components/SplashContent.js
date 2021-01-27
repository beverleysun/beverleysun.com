import React from "react";
import { config, Trail } from "react-spring/renderprops";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-scroll";
import { white } from "../util/colors.js";

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
    <Link to={arrowLinkTo} smooth={true}>
      <IoIosArrowDown
        color={white}
        size="40px"
        style={{ cursor: "pointer", marginTop: "2.5rem" }}
        key="5"
      ></IoIosArrowDown>
    </Link>
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
