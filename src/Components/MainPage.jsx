import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import bgImg from "../assets/intro-bg.jpg";

const MainPage = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f] ">
      <div
        className="bg-center bg-cover h-screen bg-img"
        style={{ backgroundImage: `url(${bgImg})` }}>
        <div className="max-w-[1000px] mx-auto sm:px-30 md:px-10 flex flex-col text-center justify-center h-full text-white ">
          <p className="text-[#FF0077] text-xl font-Poppins tracking-widest font-bold inline">
            HELLO, WORLD.{" "}
          </p>
          <h1 className="sm:text-lg md:text-[90px] font-extrabold text-white tracking-wider ">
            I'm Pranavi.
          </h1>
          <h4 className="md:text-lg sm:text-xl font-light tracking-widest text-white pb-3">
            FULL-STACK DEVELOPER{" "}
          </h4>
          {/* <p className="text-white py-4 max-w-[700px]">
            I’m a full-stack developer specializing in building (and
            occasionally designing) exceptional digital experiences. Currently,
            I’m focused on building responsive full-stack web applications.
          </p> */}
          <div className="mx-auto py-3">
            <button className="text-white group border-[3px] border-[#FF0077] px-6 py-3 my-2 align-center flex items-center hover:bg-[#FF0077] hover:border-[#FF0077]">
              More About Me
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </button>
          </div>
        </div>
        {/* */}
      </div>
      {/* Container */}
    </div>
  );
};

export default MainPage;
