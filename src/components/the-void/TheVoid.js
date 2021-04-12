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
      <div className="section-content section-void">
        <div className="the-void">
          <p
            style={{
              color: `${colors.white}`,
            }}
            className="the-void-title"
            data-text="the void"
          >
            the void
          </p>
        </div>
      </div>
    </div>
  );
}
