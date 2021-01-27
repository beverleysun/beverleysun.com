import React from "react";
import Splash from "./components/Splash.js";
import AboutMe from "./components/AboutMe.js";
import "./App.css";

export default function App() {
  return (
    <>
      <Splash arrowLinkTo="about" title="Beverley Sun :-)" />
      <AboutMe upArrowTo="splash" downArrowTo=""></AboutMe>
    </>
  );
}
