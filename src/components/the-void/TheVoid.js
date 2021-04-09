import React from "react";
import { colors } from "../../util/colors.js";
import "../../TheVoidGlitch.scss";

export default function TheVoid({ id = "" }) {
  return (
    <div
      className="section"
      id={id}
      style={{
        backgroundColor: `${colors.black}`,
      }}
    >
      <div className="section-content">
        <div>
          <h1
            style={{
              color: `${colors.white}`,
            }}
            className="the-void-title"
            data-text="Welcome to"
          >
            Welcome to
          </h1>
          <h1
            style={{
              color: `${colors.white}`,
            }}
            className="the-void-title"
            data-text="the Void"
          >
            the Void
          </h1>
        </div>
      </div>
    </div>
  );
}
