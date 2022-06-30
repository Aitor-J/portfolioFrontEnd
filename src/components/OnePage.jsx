import { useRef, useState } from "react";
import About from "./About";
import Burger from "./Burger";
import Contact from "./Contact";
import Home from "./Home";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Skills from "./Skills";

// ALL IN ONEPAGE USING USEREF
const OnePage = () => {
  const homeRef = useRef();
  const aboutRef = useRef();
  const skillsRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();
  const [isActive, setIsActive] = useState(true);
  return (
    <div className="onePage">
      <Burger   
        homeRef={homeRef}
        aboutRef={aboutRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
        setIsActive={setIsActive}
        isActive={isActive}
        />
      <Navbar 
      homeRef={homeRef}
      aboutRef={aboutRef}
      skillsRef={skillsRef}
      projectsRef={projectsRef}
      contactRef={contactRef}
      setIsActive={setIsActive}
      isActive={isActive}
      />
       <div ref={homeRef}>
      <Home />
      </div>
      <div ref={aboutRef}>
      <About />
      </div>
      <div ref={skillsRef}>
      <Skills />
      </div>
      <div ref={projectsRef}>
      <Projects />
      </div>
      <div ref={contactRef}>
      <Contact />
      </div>
    </div>
  );
};

export default OnePage;
