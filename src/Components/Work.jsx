import React from "react";
import LFImg from "../assets/Linked.FarmSite.png";

const Work = () => {
  return (
    <div className="w-full h-screen bg-white text-center  md:mx-0 mt-28 xxs:px-4 md:px-0">
      <div className=" mx-auto  ">
        <div>
          <p className=" text-lg font-Poppins tracking-widest font-semibold inline text-[#FF0077]  ">
            WORK
          </p>
        </div>
        <div className="pt-5  ">
          <p className=" xs:text-2xl md:text-4xl font-semibold  font-Poppins tracking-wide  inline text-[#313131]">
            Check Out Some of My Works.
          </p>
        </div>
        <div className="md:w-[67%] items-center m-auto sm:mx-10 md:mx-auto">
          <p className="my-7 xxs:mx-10 md:mx-0 text-[#888888] xxs:text-sm md:text-lg tracking-wide ">
            My portfolio is a canvas of my journey, showcasing the projects that
            I've had the privilege to work on. From web design to development,
            each project reflects my commitment to quality and an eye for
            creativity. Feel free to explore each project.
          </p>
        </div>
        <div className="w-[80%] mx-auto">
        <div className="grid sm:grid-cols-2  md:grid-cols-3 gap-4">
          <div
            style={{
              backgroundImage: `url(${LFImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
            }}
            className="xs:w-[150px] xs:h-[150px] lg:w-[290px] lg:h-[220px] shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div "
          >
            <div>
              <span></span>
              <div>
                <a href="/">
                  <button></button>
                </a>
                <a href="/">
                  <button></button>
                </a>
              </div>
            </div>
          </div>
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default Work;
