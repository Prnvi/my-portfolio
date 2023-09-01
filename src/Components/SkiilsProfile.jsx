import React from "react";

const SkiilsProfile = () => {
  return (
    <div
      name="skillProfile"
      className="w-full lg:h-screen bg-white text-[#313131] sm:px-20  md:px-30"
    >
      <div className=" sm:flex sm:flex-col lg:grid lg:grid-cols-2 gap-5 justify-center  w-full h-full  mx-auto ">
        <div className="md:w-[450px] mx-auto">
          <div className="profileDiv md:px-5 xxs:px-9 ">
            <div className="flex items-center xxs:justify-center md:justify-start">
              <p className=" sm:align-middle text-xl font-Poppins tracking-widest font-bold inline text-[#313131] ">
                PROFILE
              </p>
            </div>

            <p className="text-[#888888] py-5 xs:text-center md:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              maxime similique laboriosam debitis porro delectus quibusdam quo
              at cumque. Qui, ea.
            </p>
            <div className="">
              <p className="text-[#313131] font-bold text-base py-2">
                FULL NAME:
                <br />
                <span className="inline-block pt-1 text-[#888888] font-thin tracking-wide ">
                  Pranavi Lakkavajjala
                </span>
              </p>
              <p className="text-[#313131] font-bold text-base py-2">
                BIRTH DATE:
                <br />
                <span className="inline-block pt-1 text-[#888888] font-thin tracking-wide ">
                  08 August 1993
                </span>
              </p>
              <p className="text-[#313131] font-bold text-base py-2">
                JOB
                <br />
                <span className="inline-block pt-1 text-[#888888] font-thin tracking-wide ">
                  Looking for Front-end Developer Role
                </span>
              </p>
              <p className="text-[#313131] font-bold text-base py-2">
                EMAIL
                <br />
                <span className="inline-block pt-1 text-[#888888] font-thin tracking-wide ">
                  pranavi.l93@gmail.com
                </span>
              </p>
              <p className="text-[#313131] font-bold text-base py-2">
                LANGUAGES
                <br />
                <span className="inline-block pt-1 text-[#888888] font-thin tracking-wide ">
                  Telugu, Hindi, English, Dutch A2
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="md:w-[450px] mx-auto">
          <div className="skillDiv md:px-5 xxs:px-9">
            <div className="flex items-center xxs:justify-center md:justify-start">
              <p className="text-xl font-Poppins tracking-widest font-bold inline  text-[#313131]">
                SKILLS
              </p>
            </div>

            <p className="text-[#888888] py-5 xxs:text-center md:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              maxime similique laboriosam debitis porro delectus quibusdam quo
              at cumque. Qui, ea.
            </p>
            <div className="">
              <p className="text-[#313131] font-bold text-base py-2">
                TECH SKILLS
                <br />
                <span className="inline-block pt-1 text-[#888888] font-thin tracking-wide ">
                  HTML, CSS, Javascript, React, TailwindCSS, Bootstrap
                </span>
              </p>
              <p className="text-[#313131] font-bold text-base py-2">
                Backend
                <br />
                <span className="inline-block pt-1 text-[#888888] font-thin tracking-wide ">
                  NodeJS, MongoDB, Express, Postgres
                </span>
              </p>
              <p className="text-[#313131] font-bold text-base py-2">
                OTHERS
                <br />
                <span className="inline-block pt-1 text-[#888888] font-thin tracking-wide ">
                  GitHub, Figma
                </span>
              </p>
              <p className="text-[#313131] font-bold text-base py-2">
                Tech Stack- previous project
                <br />
                <span className="inline-block pt-1 text-[#888888] font-thin tracking-wide ">
                  Linux, Oracle, Autosys, Fircosoft Suites
                </span>
              </p>
              <p className="text-[#313131] font-bold text-base py-2">
                Personal Skills
                <br />
                <span className="inline-block pt-1 text-[#888888] font-thin tracking-wide ">
                  Continuous Learner, Team Player, Reliable, Solution Oriented,
                  Adaptability, Time management
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto py-3 md:px-5 xxs:px-20 flex justify-center">
          <button className=" w-[240px] md:h-[60px] text-[#313131] group border-[3px] border-[#313131] px-6 py-3 my-2  flex justify-center items-center font-Poppins font-semibold tracking-wide hover:border-[#FF0077]  hover:text-[#FF0077]">
            HIRE ME
          </button>
        </div>
        <div className="mx-auto py-3 md:px-5 xxs:px-20 flex justify-center ">
          <button className="w-[240px] md:h-[60px]  text-white group border-2 bg-[#313131] border-[#313131] px-6 py-3 my-2 justify-center flex items-center font-Poppins font-semibold tracking-wide hover:bg-[#FF0077] hover:border-[#FF0077]">
            DOWNLOAD CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkiilsProfile;
