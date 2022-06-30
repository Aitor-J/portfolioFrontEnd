import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import PropTypes from "prop-types";
import handleScroll from "../utils/scroll";

const Burger = ({ homeRef, aboutRef, skillsRef, projectsRef, contactRef }) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div>
      {isClicked ? (
        <div className="burger">
          {isClicked ? (
            <AiOutlineClose
              className="burger__button"
              onClick={() => setIsClicked(!isClicked)}
              onKeyDown={() => setIsClicked(!isClicked)}
              role="presentation"
              area-hidden="true"
            />
          ) : (
            ""
          )}
          <div className="burger__container">
            <ul className="burger__container__ul">
              <li
                className="burger__container__ul__li"
                onClick={() => handleScroll(homeRef)}
                area-hidden="true"
                onKeyDown={() => handleScroll(homeRef)}
                role="presentation"
              >
                Home
              </li>
              <li
                className="burger__container__ul__li"
                onClick={() => handleScroll(aboutRef)}
                area-hidden="true"
                onKeyDown={() => handleScroll(aboutRef)}
                role="presentation"
              >
                About
              </li>
              <li
                className="burger__container__ul__li"
                onClick={() => handleScroll(skillsRef)}
                area-hidden="true"
                onKeyDown={() => handleScroll(skillsRef)}
                role="presentation"
              >
                Skills
              </li>
              <li
                className="burger__container__ul__li"
                onClick={() => handleScroll(projectsRef)}
                area-hidden="true"
                onKeyDown={() => handleScroll(projectsRef)}
                role="presentation"
              >
                Projects
              </li>
              <li
                className="burger__container__ul__li"
                onClick={() => handleScroll(contactRef)}
                area-hidden="true"
                onKeyDown={() => handleScroll(contactRef)}
                role="presentation"
              >
                Contact
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div>
        <GiHamburgerMenu
          className="burger__button"
          onClick={() => setIsClicked(!isClicked)}
          onKeyDown={() => setIsClicked(!isClicked)}
          role="presentation"
          area-hidden="true"
        />
        <div className="burger__container__reverse">
            <ul className="burger__container__ul">
              <li
                className="burger__container__ul__li"
                onClick={() => handleScroll(homeRef)}
                area-hidden="true"
                onKeyDown={() => handleScroll(homeRef)}
                role="presentation"
              >
                Home
              </li>
              <li
                className="burger__container__ul__li"
                onClick={() => handleScroll(aboutRef)}
                area-hidden="true"
                onKeyDown={() => handleScroll(aboutRef)}
                role="presentation"
              >
                About
              </li>
              <li
                className="burger__container__ul__li"
                onClick={() => handleScroll(skillsRef)}
                area-hidden="true"
                onKeyDown={() => handleScroll(skillsRef)}
                role="presentation"
              >
                Skills
              </li>
              <li
                className="burger__container__ul__li"
                onClick={() => handleScroll(projectsRef)}
                area-hidden="true"
                onKeyDown={() => handleScroll(projectsRef)}
                role="presentation"
              >
                Projects
              </li>
              <li
                className="burger__container__ul__li"
                onClick={() => handleScroll(contactRef)}
                area-hidden="true"
                onKeyDown={() => handleScroll(contactRef)}
                role="presentation"
              >
                Contact
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

Burger.propTypes = {
  homeRef: PropTypes.func.isRequired,
  aboutRef: PropTypes.func.isRequired,
  skillsRef: PropTypes.func.isRequired,
  projectsRef: PropTypes.func.isRequired,
  contactRef: PropTypes.func.isRequired,
};

export default Burger;
