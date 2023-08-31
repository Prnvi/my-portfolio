import React from "react";
import img from "../assets/graduation-cap.png";
import { FaGraduationCap } from "react-icons/fa";
import Template from "./Template";

function ChartBoard() {
  return (
    <div className=" flex flex-col justify-center sm:py-12">
      <div className=" py-3 px-2 sm:max-w-5xl sm:mx-auto  sm:px-0">
        <div className="relative text-[#FF0077] antialiased text-sm text-semibold">
          {/* vertical line */}
          <div className="absolute w-[1px] sm:block bg-[#d0cdcd] h-full left-1/3  transform -translate-x-1/2"></div>
          {/* left card */}
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
                      Frontend Developer Intern{" "}
                    </h4>
                    <p className="text-[#888888]">April 2023 - July 2023</p>
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
                      Frontend Developer Intern{" "}
                    </h4>
                    <p className="text-[#888888]">
                      April 2023 - July 2023 Lorem ipsum dolor sit amet
                      consectetur adipisicing elit. Iste hic minus facilis
                      tenetur explicabo perferendis, magni consequuntur rerum
                      vero blanditiis cumque laudantium debitis assumenda non
                      natus tempora deserunt distinctio itaque.
                    </p>
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
          <Template  titleHeadingLeft={"FullStack Developer"}
  startAndEndDate={"April 22 -June 22"}
  titleHeadingRight={"ABCD"}
  paragraph={"Lorem"}/>
  <div className="rounded-full bg-black  w-10 h-10 absolute left-1/3 top-[94px] transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
        <span>
          <FaGraduationCap className="text-white " />
        </span>
      </div>

          {/*left card   */}
          {/* <div className="bg-slate-100 mt-6 sm:mt-0 sm:mb-12">
            <div className="flex flex-wrap items-end flex-col sm:flex-row">
              <div className="flex justify-start w-full mx-auto items-center">
                <div className="w-full sm:w-1/2 sm:pr-8 ">
                  <div
                    data-aos="fade-right"
                    data-aos-duration="1200"
                    className="p-4 rounded group ease-in"
                    //  bg-white shadow cursor-pointer
                  >
                    <h4 className="text-black font-bold mb-4  text-xl"> */}
          {/* group-hover:text-white group-hover:font-[100]  */}
          {/* Frontend Developer Intern{" "}
                    </h4>
                    <p className="text-[#888888]"> */}
          {/* group-hover:text-white group-hover:font-[100] */}
          {/* April 2023 - July 2023
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-full bg-black  w-10 h-10 absolute left-1/2 top-1/3 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
              <span>
                <FaGraduationCap className="text-white " />
              </span>
            </div>
          </div> */}

          {/* right card  */}
          {/* <div className="mt-6 sm:mt-0 sm:mb-12">
          <div className="flex items-center flex-col sm:flex-row">
            <div className="flex justify-end w-full mx-auto items-center">
              <div className="w-full sm:w-1/2 sm:pl-8 ">
                <div
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  className="p-4 rounded group ease-in"
                //    bg-white shadow cursor-pointer
                > */}
          {/* <h4 className="text-black font-bold mb-4  text-xl"> */}
          {/* group-hover:text-white group-hover:font-[100]  */}
          {/* Frontend Developer Intern{" "}
                  </h4>
                  <p className="text-[#888888]"> */}
          {/* group-hover:text-white group-hover:font-[100] */}
          {/* April 2023 - July 2023
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-full bg-black  w-10 h-10 absolute left-1/2 top-1/3 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
            <span>
              <FaGraduationCap className="text-white " />
            </span>
          </div> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default ChartBoard;
