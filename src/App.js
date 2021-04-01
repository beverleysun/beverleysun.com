import React from "react";
import Splash from "./components/Splash.js";
import AboutMe from "./components/AboutMe.js";
import Skills from "./components/Skills.js";
import "./App.css";

export default function App() {
  return (
    <>
      <Splash
        title="Beverley"
        downArrowTo="about"
        downArrowToolTip="about"
        id="splash"
      />
      <AboutMe
        upArrowTo="splash"
        downArrowTo="skills"
        upArrowToolTip="home"
        downArrowToolTip="tech"
        id="about"
      ></AboutMe>
      <Skills
        upArrowTo="about"
        downArrowTo=""
        upArrowToolTip="about"
        downArrowToolTip="somewhere"
        id="skills"
      ></Skills>
    </>
  );
}
