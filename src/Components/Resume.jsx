import React from "react";

import ChartBoard from "./ChartBoard";

const Resume = () => {
  return (
    <div className="w-full  bg-[#ebebeb] text-center  md:mx-0  xxs:pt-2  md:px-0">
      <div className="">
        <div className="mt-28">
          <p className=" text-lg font-Poppins tracking-widest font-semibold inline text-[#FF0077]  ">
            RESUME
          </p>
        </div>

        <div className="pt-5 sm:pb-5 md:pb-0">
          <p className=" text-center xs:text-2xl md:text-4xl font-semibold  font-Poppins tracking-wide  inline text-[#313131]">
            More of my credentials.
          </p>
        </div>

        <div className=" md:w-[690px] items-center m-auto sm:mx-10 md:mx-auto ">
          <p className="m-5 sm:mx-10 md:mx-0 text-[#888888] text-lg tracking-wide">
            I’m a full-stack developer specializing in building (and
            occasionally designing) exceptional digital experiences. Currently,
            I’m focused on building responsive full-stack web applications.
          </p>
        </div>

        <div className="pt-10">
          <p className=" text-2xl font-Poppins tracking-wide font-semibold inline text-[#FF0077]  ">
            Work Experience
          </p>
        </div>
                <ChartBoard/>
       
      </div>
    </div>
  );
};

export default Resume;
