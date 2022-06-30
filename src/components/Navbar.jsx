import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BiFace } from "react-icons/bi";
import { TbTools } from "react-icons/tb";
import { MdOutlineSchool } from "react-icons/md";
import { IoMdMoon } from "react-icons/io";
import { FaSun } from "react-icons/fa";
import { BsDisc, BsMailbox } from "react-icons/bs";
import ReactPlayer from "react-player";
import PropTypes from "prop-types";
import handleScroll from "../utils/scroll";

const Navbar = ({
  homeRef,
  aboutRef,
  skillsRef,
  projectsRef,
  contactRef,
  isActive,
  setIsActive,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const handleChange = () => {
    setIsPlaying(!isPlaying);
  };
  return (
    <div className="navbar">
      <ReactPlayer
        url="https://soundcloud.com/fabfab2/waves-and-birds"
        width="0"
        height="0"
        playing={isPlaying}
        volume={0.3}
      />
      <div className="navbar__container">
        <ul className="navbar__container__ul">
          <li
            className="navbar__container__ul__li"
            onClick={() => setIsActive(!isActive)}
            onKeyDown={() => setIsActive(!isActive)}
            role="presentation"
            area-hidden="true"
          >
            {isActive ? (
              <IoMdMoon className="navbar__container__ul__icon" />
            ) : (
              <FaSun className="navbar__container__ul__icon" />
            )}
            Theme
          </li>
          <li
            className="navbar__container__ul__li"
            onClick={handleChange}
            area-hidden="true"
            role="presentation"
          >
            {isPlaying ? (
              <BsDisc className="navbar__container__ul__icon__rotate" />
            ) : (
              <BsDisc className="navbar__container__ul__icon" />
            )}
            Sound
          </li>
          <li
            className="navbar__container__ul__li"
            onClick={() => handleScroll(homeRef)}
            area-hidden="true"
            onKeyDown={() => handleScroll(homeRef)}
            role="presentation"
          >
            <AiOutlineHome className="navbar__container__ul__icon" />
            Home
          </li>
          <li
            className="navbar__container__ul__li"
            onClick={() => handleScroll(aboutRef)}
            area-hidden="true"
            onKeyDown={() => handleScroll(aboutRef)}
            role="presentation"
          >
            <BiFace className="navbar__container__ul__icon" />
            About
          </li>
          <li
            className="navbar__container__ul__li"
            onClick={() => handleScroll(skillsRef)}
            area-hidden="true"
            onKeyDown={() => handleScroll(skillsRef)}
            role="presentation"
          >
            <MdOutlineSchool className="navbar__container__ul__icon" />
            Skills
          </li>
          <li
            className="navbar__container__ul__li"
            onClick={() => handleScroll(projectsRef)}
            area-hidden="true"
            onKeyDown={() => handleScroll(projectsRef)}
            role="presentation"
          >
            <TbTools className="navbar__container__ul__icon" />
            Projects
          </li>
          <li
            className="navbar__container__ul__li"
            onClick={() => handleScroll(contactRef)}
            area-hidden="true"
            onKeyDown={() => handleScroll(contactRef)}
            role="presentation"
          >
            <BsMailbox className="navbar__container__ul__icon" />
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  homeRef: PropTypes.func.isRequired,
  aboutRef: PropTypes.func.isRequired,
  skillsRef: PropTypes.func.isRequired,
  projectsRef: PropTypes.func.isRequired,
  contactRef: PropTypes.func.isRequired,
  isActive: PropTypes.func.isRequired,
  setIsActive: PropTypes.func.isRequired,
};

export default Navbar;
