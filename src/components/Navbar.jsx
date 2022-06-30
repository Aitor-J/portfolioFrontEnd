import React, { useState } from 'react';
import { AiOutlineHome } from "react-icons/ai";
import { BiFace } from "react-icons/bi";
import { TbTools } from "react-icons/tb";
import { MdOutlineSchool } from "react-icons/md";
import { IoMdLaptop, IoMdMoon } from "react-icons/io";
import { BsDisc } from "react-icons/bs";
import { BsMailbox } from "react-icons/bs";
import PropTypes from "prop-types";
import { FaSun } from "react-icons/fa";

const Navbar = () => {

    return (
        <div className="navbar">
            <div className='navbar__container'>
                <ul className="navbar__container__ul">
                    <li className="navbar__container__ul__li"><IoMdMoon className='navbar__container__ul__icon' />Theme</li>
                    <li className="navbar__container__ul__li"><BsDisc className='navbar__container__ul__icon' />Sound</li>
                    <li className="navbar__container__ul__li"><AiOutlineHome className='navbar__container__ul__icon' />Home</li>
                    <li className="navbar__container__ul__li"><BiFace className='navbar__container__ul__icon' />About</li>
                    <li className="navbar__container__ul__li"><MdOutlineSchool className='navbar__container__ul__icon' />Skills</li>
                    <li className="navbar__container__ul__li"><TbTools className='navbar__container__ul__icon' />Projects</li>
                    <li className="navbar__container__ul__li"><BsMailbox className='navbar__container__ul__icon' />Contact</li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
