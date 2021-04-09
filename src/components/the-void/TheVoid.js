import React from "react";
import { colors } from "../../util/colors.js";
import "../../style/TheVoidGlitch.scss";

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
        <div className="the-void">
          <h1
            style={{
              color: `${colors.white}`,
            }}
            className="the-void-title"
            data-text="Welcome to the Void"
          >
            Welcome to the Void
          </h1>
        </div>
      </div>
    </div>
  );
}
