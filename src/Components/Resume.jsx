import React from "react";

const Resume = () => {
  return (
    <div className="w-full lg:h-screen bg-[#ebebeb] text-center sm:mx-5 md:mx-0 my-10 xxs:pt-20 xxs:px-20 md:px-0">
      <div className="">
        <div className="mt-28">
          <p className=" text-lg font-Poppins tracking-widest font-semibold inline text-[#FF0077]  ">
            RESUME
          </p>
        </div>
        <div className="pt-5 sm:pb-5 md:pb-0">
          <p className=" text-center text-4xl font-semibold  font-Poppins tracking-wide  inline text-[#313131]">
            More of my credentials.
          </p>
        </div>

        <div className=" md:w-[600px] md:h-[200px] items-center m-auto sm:mx-10 md:mx-auto ">
          <p className="m-10 sm:mx-10 md:mx-0 text-[#888888] font-Poppins">
            I’m a full-stack developer specializing in building (and
            occasionally designing) exceptional digital experiences. Currently,
            I’m focused on building responsive full-stack web applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Resume;
