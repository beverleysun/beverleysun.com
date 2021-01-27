import React from "react";
import Splash from "./components/Splash.js";
import "./App.css";

export default function App() {
  return (
    <>
      <Splash arrowLinkTo="about" />
      <div id="about" style={{ height: "100vh", backgroundColor: "#fff" }}>
        <h1
          style={{
            margin: "25vh 0 0 15vw",
            position: "absolute",
            fontSize: "6rem",
            color: `#DB925A`,
          }}
        >
          About Me
        </h1>
      </div>
    </>
  );
}
