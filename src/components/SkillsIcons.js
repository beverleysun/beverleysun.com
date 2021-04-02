import React from "react";
import { ReactComponent as BashIcon } from "../assets/skills_icons/bash.svg";
import { ReactComponent as CIcon } from "../assets/skills_icons/c.svg";
import { ReactComponent as CsharpIcon } from "../assets/skills_icons/csharp.svg";
import { ReactComponent as CssIcon } from "../assets/skills_icons/css.svg";
import { ReactComponent as GitIcon } from "../assets/skills_icons/git.svg";
import { ReactComponent as HtmlIcon } from "../assets/skills_icons/html.svg";
import { ReactComponent as JavaIcon } from "../assets/skills_icons/java.svg";
import { ReactComponent as JsIcon } from "../assets/skills_icons/js.svg";
import { ReactComponent as MatlabIcon } from "../assets/skills_icons/matlab.svg";
// import { ReactComponent as Python } from "../assets/skills_icons/python.svg";
import { ReactComponent as ReactIcon } from "../assets/skills_icons/reactjs.svg";

export default function SkillIcons({ className = "" }) {
  return (
    <div className={className}>
      <div className="skill-icon-group">
        <JavaIcon className="skill-icon"></JavaIcon>
        <text>Java</text>
      </div>
      <div className="skill-icon-group">
        <CsharpIcon className="skill-icon"></CsharpIcon>
        <text>C#.NET</text>
      </div>
      <div className="skill-icon-group">
        <HtmlIcon className="skill-icon"></HtmlIcon>
        <text>HTML</text>
      </div>
      <div className="skill-icon-group">
        <CssIcon className="skill-icon"></CssIcon>
        <text>CSS</text>
      </div>
      <div className="skill-icon-group">
        <JsIcon className="skill-icon"></JsIcon>
        <text>JS</text>
      </div>
      <div className="skill-icon-group">
        <GitIcon className="skill-icon"></GitIcon>
        <text>Git</text>
      </div>
      <div className="skill-icon-group">
        <ReactIcon className="skill-icon"></ReactIcon>
        <text>React.js</text>
      </div>
      <div className="skill-icon-group">
        <CIcon className="skill-icon"></CIcon>
        <text>C</text>
      </div>
      {/*<div className="skill-icon-group">
        <Python className="skill-icon"></Python>
        <text>Python</text>
  </div>*/}
      <div className="skill-icon-group">
        <BashIcon className="skill-icon"></BashIcon>
        <text>Bash</text>
      </div>
      <div className="skill-icon-group">
        <MatlabIcon className="skill-icon"></MatlabIcon>
        <text>Matlab</text>
      </div>
    </div>
  );
}
