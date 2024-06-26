import React from "react";
import img from "../assets/IMG_me.jpeg";
import BackToTop from "./BackToTop";

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
      <div className=" md:w-[800px] md:flex md:flex-row sm:flex sm:flex-col sm:items-center justify-center items-center mx-auto mt-2 mb-10 md:gap-3 lg:gap-8">
        <div className="flex justify-center  ">
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
        <div className=" md:w-[650px]  items-center m-auto sm:mx-10 md:mx-0 ">
          <p className="my-10 xxs:mx-2 md:mx-0 text-[#888888]  xxs:text-sm md:text-lg">
            I’m a passionate web developer, crafting exceptional digital
            experiences, (and occasionally designing). I prefer lightness and
            minimalism in my websites. My current focus is on building dynamic,
            user-friendly and responsive web applications.
          </p>
        </div>
      </div>
      <BackToTop />
    </div>
  );
};

export default AboutNew;
