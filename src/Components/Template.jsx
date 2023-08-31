import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const Template = ({titleHeadingLeft,startAndEndDate,titleHeadingRight,
    paragraph}) => {
  return (
    <div className=" mt-6 sm:mt-0 sm:mb-12">
      <div className="flex items-start flex-col sm:flex-row">
        <div className="  flex justify-start w-1/4 mx-auto items-center">
          <div className="w-full  sm:pr-8 ">
            <div
              data-aos="fade-right"
              data-aos-duration="1200"
              className="p-4 rounded group ease-in "
            >
              <h4 className="text-black font-bold mb-4  text-xl">
                {titleHeadingLeft}{" "}
              </h4>
              <p className="text-[#888888]">{startAndEndDate}</p>
            </div>
          </div>
        </div>
        <div className="  flex justify-start w-3/5 mx-auto items-center">
          <div className="w-full  sm:pr-8 ">
            <div
              data-aos="fade-right"
              data-aos-duration="1200"
              className="p-4 rounded group ease-in"
            >
              <h4 className="text-black font-bold mb-4  text-xl">
                {titleHeadingRight}{" "}
              </h4>
              <p className="text-[#888888]">{paragraph}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-full bg-black  w-10 h-10 absolute left-1/3 top-[14px] transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
        <span>
          <FaGraduationCap className="text-white " />
        </span>
      </div>
    </div>
  );
};

export default Template;
