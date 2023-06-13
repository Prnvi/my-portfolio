import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import bgImg from "../assets/intro-bg.jpg";

const MainPage = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f] ">
      <div
        className="bg-center bg-cover h-screen  greyscale-0 "
        style={{ backgroundImage: `url(${bgImg})` }}
        //  style={{
        //     backgroundImage:
        //       "url('https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80 ')",
        //   }}>
      >
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-white ">
          <p className="text-pink-600">Hi, my name is </p>
          <h1 className="text-4xl sm:text-7xl font-bold text-white">Pranavi</h1>
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            {" "}
            I am a full stack developer
          </h2>
          <p className="text-white py-4 max-w-[700px]">
            I’m a full-stack developer specializing in building (and
            occasionally designing) exceptional digital experiences. Currently,
            I’m focused on building responsive full-stack web applications.
          </p>
          <div>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
              View Work
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
