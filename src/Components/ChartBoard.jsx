import React from "react";
import img from "../assets/graduation-cap.png";
import { FaGraduationCap } from "react-icons/fa";
import Template from "./Template";

function ChartBoard() {
  return (
      
    <div className="flex flex-col justify-center sm:py-12">
      <div className="py-3 px-2 sm:max-w-5xl sm:mx-auto  sm:px-0">
        <div className="relative text-[#FF0077] antialiased text-sm text-semibold">
          {/* vertical line */}
          <div className="absolute w-[1px] sm:block bg-[#d0cdcd] h-full xs:left-[20%] md:left-[36%]  transform -translate-x-1/2"></div>

          <Template
            titleHeadingLeft={"FullStack Developer Intern"}
            startAndEndDate={"April 23 - June 23"}
            titleHeadingRight={"Linked.Farm"}
            paragraph={
              "I have completed my 3 months of internship at a farming based firm called Linked.Farm, where I had an opportunity to work for their website from scratch. During this Internship I had been part of developing the website of Linked.Farm with React, JavaScript, tailwindCSS, Rest API, designed the figma models according to the client requirements."
            }
          />
          <div className="rounded-full bg-black  w-10 h-10 absolute left-[36%] top-[2%] transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
            <span>
              <FaGraduationCap className="text-white " />
            </span>
          </div>

          <Template
            titleHeadingLeft={"FullStack Developer Trainee"}
            startAndEndDate={"Sep 22 - April 23"}
            titleHeadingRight={"Becode"}
            paragraph={
              "I have completed my 3 months of internship at a farming based firm called Linked.Farm, where I had an opportunity to work for their website from scratch. During this Internship I had been part of developing the website of Linked.Farm with React, JavaScript, tailwindCSS, Rest API, designed the figma models according to the client requirements."
            }
          />
          <div className="rounded-full bg-black  w-10 h-10 absolute left-[36%] top-[37%] transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
            <span>
              <FaGraduationCap className="text-white " />
            </span>
          </div>

          <Template
            titleHeadingLeft={"Fircosoft Consultant"}
            startAndEndDate={"Sep 22 - April 23"}
            titleHeadingRight={"Birlasoft India"}
            paragraph={
              "I have completed my 3 months of internship at a farming based firm called Linked.Farm, where I had an opportunity to work for their website from scratch. During this Internship I had been part of developing the website of Linked.Farm with React, JavaScript, tailwindCSS, Rest API, designed the figma models according to the client requirements."
            }
          />
          <div className="rounded-full bg-black  w-10 h-10 absolute left-[36%] top-[72%] transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
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
        {/* Do again tomorrow******** */}
        <div>
        <div className="pt-10">
          <p className=" text-2xl font-Poppins tracking-wide font-semibold inline text-[#FF0077]  ">
            Education
          </p>
        </div>
        <Template
            titleHeadingLeft={"Fircosoft Consultant"}
            startAndEndDate={"Sep 22 - April 23"}
            titleHeadingRight={"Birlasoft India"}
            paragraph={
              "I have completed my 3 months of internship at a farming based firm called Linked.Farm, where I had an opportunity to work for their website from scratch. During this Internship I had been part of developing the website of Linked.Farm with React, JavaScript, tailwindCSS, Rest API, designed the figma models according to the client requirements."
            }
          />
          
        </div>
        
      </div>
    </div>
  );
}

export default ChartBoard;
