import React, { useEffect, useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import bgImg from "../assets/girl.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const MainPage = () => {
  // const [setClicked] = useState(true);
  //** learning: you didnt need useState here!! */
  const moreAboutMe = () => {
    // setClicked(true);
    window.scrollTo({
      top: 710,
      behavior: "smooth",
    });
  };
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f] ">
      <div
        className="bg-center bg-cover h-screen bg-img "
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="max-w-[1000px] mx-auto sm:px-30 md:px-10 flex flex-col text-center justify-center h-full text-white ">
          <p className="text-[#FF0077] text-xl font-Poppins tracking-widest font-bold inline">
            HELLO, WORLD.{" "}
          </p>
          <h1 className=" xs:text-5xl md:text-[90px] font-extrabold text-white tracking-wider ">
            I'm Pranavi.
          </h1>
          <h4 className="text-lg font-light tracking-widest text-white pb-3">
            FULL-STACK DEVELOPER{" "}
          </h4>
          {/* <p className="text-white py-4 max-w-[700px]">
            I’m a full-stack developer specializing in building (and
            occasionally designing) exceptional digital experiences. Currently,
            I’m focused on building responsive full-stack web applications.
          </p> */}

          <div className="mx-auto py-3">
            {/* <Link to="/about"> */}
            {
              <button
                className="text-white group border-[3px] border-[#FF0077] px-6 py-3 my-2 align-center flex items-center hover:bg-[#FF0077] hover:border-[#FF0077]"
                onClick={moreAboutMe}
              >
                More About Me
                <span className="group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight className="ml-3 " />
                </span>
              </button>
            }
            {/* </Link> */}
          </div>
          <div className="mx-auto py-3 flex flex-row">
            <a
              className="flex justify-between items-center w-full text-gray-300 mx-5 "
              href="https://www.linkedin.com/in/pranavi-lakkavajjala"
            >
              <FaLinkedin size={40} />
            </a>
            <a
              className="flex justify-between items-center w-full text-gray-300 mx-5"
              href="https://github.com/Prnvi"
            >
              <FaGithub size={40} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
