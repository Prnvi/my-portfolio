import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
// import { Link } from 'react-scroll';
const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="z-10 fixed left-[10%] w-auto py-3 h-auto flex flex-row-reverse justify-between items-center px-4 bg-black text-white">
      <div className="">
        <div className="px-4 font-Poppins text-xl font-semibold tracking-widest text-opacity-95">
          PRANAVI
        </div>
        <div className="px-4 hidden md:flex">
          <ul className="hidden md:flex"></ul>
        </div>
      </div>

      {/* Hamburger menu */}
      <div onClick={handleClick} className="text-[#FF0077] z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-[40vh] bg-black flex flex-col justify-center items-center text-[#FF0077] "
        }
      >
        <li className="py-3 text-sm transition-transform hover:translate-x-2">
          Home
        </li>
        <li className="py-3 text-sm transition-transform hover:translate-x-2">
          About
        </li>
        <li className="py-3 text-sm transition-transform hover:translate-x-2">
          Resume
        </li>
        <li className="py-3 text-sm transition-transform hover:translate-x-2">
          Work
        </li>
        <li className="py-3 text-sm transition-transform hover:translate-x-2">
          Contact
        </li>
      </ul>
      
      {/* Social Icons */}
      {/* <div className="flex fixed fix-col top-[35%] left-0">
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a
                    className='flex justify-between items-center w-full text-gray-300'
                    href='/'>
                    Linkedin <FaLinkedin size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href='/'>
                    Github <FaGithub size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                    <a
                    className='flex justify-between items-center w-full text-gray-300'
                    href='/' >
                    Email <HiOutlineMail size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                    <a
                    className='flex justify-between items-center w-full text-gray-300'
                    href='/'>
                    Resume <BsFillPersonLinesFill size={30} />
                    </a>
                </li>
            </ul>
        </div> */}
    </div>
  );
};

export default NavBar;
