import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Burger = () => {
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
              <li className="burger__container__ul__li">Home</li>
              <li className="burger__container__ul__li">About</li>
              <li className="burger__container__ul__li">Skills</li>
              <li className="burger__container__ul__li">Projects</li>
              <li className="burger__container__ul__li">Contact</li>
            </ul>
          </div>
        </div>
      ) : (
        <GiHamburgerMenu
          className="burger__button"
          onClick={() => setIsClicked(!isClicked)}
          onKeyDown={() => setIsClicked(!isClicked)}
          role="presentation"
          area-hidden="true"
        />
      )}
    </div>
  );
};

export default Burger;
