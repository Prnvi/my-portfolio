import React from "react";
import img from "../assets/IMG_me.jpeg";

const AboutNew = () => {
  return (
    <div className="w-full bg-white text-center  md:mx-0 mt-28 xxs:px-4 md:px-0">
      <div>
        <div>
          <p className=" text-lg font-Poppins tracking-widest font-semibold inline text-[#FF0077]  ">
            ABOUT
          </p>
        </div>
        <div className="pt-5 sm:pb-5 md:pb-0">
          <p className=" xs:text-2xl md:text-4xl font-semibold  font-Poppins tracking-wide  inline text-[#313131]">
            Let me introduce myself.
          </p>
        </div>
      </div>
      <div className=" md:w-[800px] md:flex md:flex-row sm:flex sm:flex-col sm:items-center items-center mx-auto mt-2 mb-10 gap-8">
        <div className="flex justify-center  m-auto">
          <img
            className="w-[130px] h-[130px] "
            src={img}
            alt="pranavi"
            style={{
              objectFit: "cover",
              borderRadius: "50%",
            }}
          />
        </div>
        <div className=" md:w-[600px] md:h-[200px] items-center m-auto sm:mx-10 md:mx-0 ">
          <p className="m-10 xxs:mx-2 md:mx-0 text-[#888888] font-Poppins xs:text-sm md:text-lg">
          I’m a full-stack developer specializing in building (and
            occasionally designing) exceptional digital experiences. Currently,
            I’m focused on building responsive full-stack web applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutNew;
