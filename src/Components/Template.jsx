import React from "react";

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
          <div className="w-full xxs:pr-4">
            <div
              data-aos="fade-right"
              data-aos-duration="1200"
              className="p-4 rounded group ease-in"
            >
              <h4 className="text-black font-bold mb-4 xxs:text-lg sm:text-xl xxs:max-w-[250px] sm:max-w-[300px] ">
                {titleHeadingLeft}{" "}
              </h4>

              <p className="text-[#888888]">{startAndEndDate}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center xs:w-[80%] md:w-[60%] mx-auto items-center text-left">
          <div className="w-full  xxs:pl-4 sm:pl-0 sm:pr-8 ">
            <div
              data-aos="fade-right"
              data-aos-duration="1200"
              className="p-4 rounded group ease-in"
            >
              <h4 className="text-black font-bold mb-4  xxs:text-base sm:text-xl ">
                {titleHeadingRight}{" "}
              </h4>
              <hr className="h-[4px] bg-[#d0cdcd] my-5 w-[60px] md:mx-0"></hr>
              <p className="text-[#888888] md:text-base">{paragraph}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template;
