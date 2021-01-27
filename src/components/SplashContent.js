import React from "react";
import { Spring } from "react-spring/renderprops";

export default function SplashContent({ title = "Title", className }) {
  return (
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={{ duration: 400 }}
    >
      {(props) => (
        <div style={props}>
          <div className={className}>
            <h1 style={{ fontSize: 84, ...style }}>{title}</h1>
            <h2 style={style}>Coming Soon</h2>
          </div>
        </div>
      )}
    </Spring>
  );
}

const style = {
  color: "#fff",
};
