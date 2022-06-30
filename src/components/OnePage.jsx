import React from "react";
import About from "./About";
import Burger from "./Burger";
import Contact from "./Contact";
import Home from "./Home";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Skills from "./Skills";

//ALL IN ONEPAGE USING USEREF
const OnePage = () => {
  return (
    <div className="onePage">
      <Burger />
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default OnePage;
