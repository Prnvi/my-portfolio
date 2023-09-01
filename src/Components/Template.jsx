import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const Template = ({
  titleHeadingLeft,
  startAndEndDate,
  titleHeadingRight,
  paragraph,
}) => {
  return (
    <div className=" mt-6 sm:mt-0 sm:mb-12">
      <div className="flex items-start flex-col sm:flex-row">
        <div className="flex justify-start md:w-[34%] mx-auto items-center">
          <div className="w-full  sm:pr-4 ">
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
        <div className="flex justify-center xs:w-[80%] md:w-[60%] mx-auto items-center md:text-left">
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
    </div>
  );
};

export default Template;
