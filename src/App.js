import React from "react";
import Splash from "./components/Splash.js";
import AboutMe from "./components/AboutMe.js";
import Technologies from "./components/Technologies.js";
import "./App.css";

export default function App() {
  return (
    <>
      <Splash
        title="Beverley Sun :-)"
        downArrowTo="about"
        downArrowToolTip="about"
        id="splash"
      />
      <AboutMe
        upArrowTo="splash"
        downArrowTo="technologies"
        upArrowToolTip="home"
        downArrowToolTip="technologies"
        id="about"
      ></AboutMe>
      <Technologies
        upArrowTo="about"
        downArrowTo=""
        upArrowToolTip="about"
        downArrowToolTip="somewhere"
        id="technologies"
      ></Technologies>
    </>
  );
}
