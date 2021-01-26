import React from "react";
import { Spring } from "react-spring/renderprops";

export default function SplashContent({ title }) {
  return (
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={{ duration: 400 }}
    >
      {(props) => (
        <div style={props}>
          <h1 style={style}>{title}</h1>
        </div>
      )}
    </Spring>
  );
}

const style = {
  color: "#f3f3f3",
  fontFamily: "Poppins",
  fontSize: 84,
  margin: "5vw",
};
