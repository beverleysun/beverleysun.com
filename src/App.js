import React from "react";
import Splash from "./components/splash/Splash.js";
import AboutMe from "./components/about-me/AboutMe.js";
import Skills from "./components/skills/Skills.js";
import Projects from "./components/projects/Projects.js";
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
        downArrowToolTip="skills"
        id="about"
      ></AboutMe>
      <Skills
        upArrowTo="about"
        downArrowTo="projects"
        upArrowToolTip="about"
        downArrowToolTip="projects"
        id="skills"
      ></Skills>
      <Projects
        upArrowTo="skills"
        downArrowTo=""
        upArrowToolTip="skills"
        downArrowToolTip="the void"
        id="projects"
      ></Projects>
    </>
  );
}
