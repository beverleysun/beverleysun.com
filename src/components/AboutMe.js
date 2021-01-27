import React from "react";
import { Link } from "react-scroll";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { orange } from "../util/colors.js";

export default function AboutMe({ upArrowTo = "", downArrowTo = "" }) {
  return (
    <div style={{ height: "100vh", backgroundColor: "#fff" }} id="about">
      <div style={{ margin: "25vh 0 0 15vw", position: "absolute" }}>
        <Link to={upArrowTo} smooth={true}>
          <IoIosArrowUp
            color={orange}
            size="40px"
            style={{ cursor: "pointer" }}
          ></IoIosArrowUp>
        </Link>
        <h1
          style={{
            fontSize: "6rem",
            color: `${orange}`,
          }}
        >
          About Me
        </h1>
        <div style={{ width: "40vw", marginBottom: "2.5rem" }}>
          <h2 style={{ color: `${orange}`, marginBottom: "1rem" }}>
            Hey there! I'm a Penultimate Year Software Engineering Student at
            the University of Auckland. I'm passionate about what I do with a
            firm appreciation for good design. I enjoy photography, painting,
            tramping, running, and playing with dogs.
          </h2>
          <h5 style={{ color: `${orange}` }}>If only I had a dog.</h5>
        </div>
        <Link to={downArrowTo} smooth={true}>
          <IoIosArrowDown
            color={orange}
            size="40px"
            style={{ cursor: "pointer", padding: "0" }}
          ></IoIosArrowDown>
        </Link>
      </div>
    </div>
  );
}
