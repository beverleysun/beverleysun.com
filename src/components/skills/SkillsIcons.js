import React from "react";
import { ReactComponent as BashIcon } from "../../assets/skills_icons/bash.svg";
import { ReactComponent as CIcon } from "../../assets/skills_icons/c.svg";
import { ReactComponent as CsharpIcon } from "../../assets/skills_icons/csharp.svg";
import { ReactComponent as CssIcon } from "../../assets/skills_icons/css.svg";
import { ReactComponent as GitIcon } from "../../assets/skills_icons/git.svg";
import { ReactComponent as HtmlIcon } from "../../assets/skills_icons/html.svg";
import { ReactComponent as JavaIcon } from "../../assets/skills_icons/java.svg";
import { ReactComponent as JsIcon } from "../../assets/skills_icons/js.svg";
import { ReactComponent as MatlabIcon } from "../../assets/skills_icons/matlab.svg";
// import { ReactComponent as Python } from "../../assets/skills_icons/python.svg";
import { ReactComponent as ReactIcon } from "../../assets/skills_icons/reactjs.svg";

export default function SkillIcons({ className = "" }) {
  return (
    <div className={className}>
      <div className="skill-icon-group">
        <JavaIcon className="skill-icon"></JavaIcon>
        <p>Java</p>
      </div>
      <div className="skill-icon-group">
        <CsharpIcon className="skill-icon"></CsharpIcon>
        <p>C#.NET</p>
      </div>
      <div className="skill-icon-group">
        <HtmlIcon className="skill-icon"></HtmlIcon>
        <p>HTML</p>
      </div>
      <div className="skill-icon-group">
        <CssIcon className="skill-icon"></CssIcon>
        <p>CSS</p>
      </div>
      <div className="skill-icon-group">
        <JsIcon className="skill-icon"></JsIcon>
        <p>JS</p>
      </div>
      <div className="skill-icon-group">
        <GitIcon className="skill-icon"></GitIcon>
        <p>Git</p>
      </div>
      <div className="skill-icon-group">
        <ReactIcon className="skill-icon"></ReactIcon>
        <p>React.js</p>
      </div>
      <div className="skill-icon-group">
        <CIcon className="skill-icon"></CIcon>
        <p>C</p>
      </div>
      {/*<div className="skill-icon-group">
        <Python className="skill-icon"></Python>
        <p>Python</p>
  </div>*/}
      <div className="skill-icon-group">
        <BashIcon className="skill-icon"></BashIcon>
        <p>Bash</p>
      </div>
      <div className="skill-icon-group">
        <MatlabIcon className="skill-icon"></MatlabIcon>
        <p>Matlab</p>
      </div>
    </div>
  );
}
