import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-scroll";
import { Spring } from "react-spring/renderprops";

export default function AnimatedDownArrow({
  to = "",
  color = "#fff",
  toolTip = "",
}) {
  const [hover, setHover] = useState(false);
  function toggleHover() {
    setHover(!hover);
  }
  return (
    <Spring
      to={{
        size: hover ? "60px" : "40px",
        marginTop: hover ? "10px" : "0",
        marginLeft: hover ? "-10px" : "0",
        opacity: hover ? 1 : 0,
      }}
    >
      {(props) => (
        <div
          style={{
            display: "flex",
            width: "auto",
            justifyContent: "row",
            alignItems: "center",
          }}
        >
          <Link
            to={to}
            smooth={true}
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
            duration="500"
          >
            <IoIosArrowDown
              color={color}
              size={props.size}
              style={{
                cursor: "pointer",
                marginLeft: `${props.marginLeft}`,
                marginTop: `${props.marginTop}`,
                display: "inline",
              }}
            ></IoIosArrowDown>
          </Link>
          <h5
            style={{
              color: `${color}`,
              opacity: `${props.opacity}`,
              display: "inline-block",
            }}
          >
            {toolTip}
          </h5>
        </div>
      )}
    </Spring>
  );
}
