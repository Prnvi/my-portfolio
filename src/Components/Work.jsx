import React from "react";
import LFImg from "../assets/Linked.FarmSite.png";

const Work = () => {
  return (
    <div className="w-full h-screen bg-white text-center  md:mx-0 mt-28 xxs:px-4 md:px-0">
      <div className="w-3/4 mx-auto  ">
        <div>
          <p className=" text-lg font-Poppins tracking-widest font-semibold inline text-[#FF0077]  ">
            WORK
          </p>
        </div>
        <div className="pt-5 sm:pb-7 ">
          <p className=" xs:text-2xl md:text-4xl font-semibold  font-Poppins tracking-wide  inline text-[#313131]">
            Check Out Some of My Works.
          </p>
        </div>
        <div className="items-center m-auto sm:mx-10 md:mx-0 ">
          <p className="mb-10 xxs:mx-2 md:mx-0 text-[#888888] font-Poppins xs:text-sm md:text-lg">
            I’m a full-stack developer specializing in building (and
            occasionally designing) exceptional digital experiences. Currently,
            I’m focused on building responsive full-stack web applications.
          </p>
        </div>

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
  );
};

export default Work;
