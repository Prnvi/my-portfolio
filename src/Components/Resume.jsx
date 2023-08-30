import React from "react";
import img from "../assets/graduation-cap.png";
import { FaGraduationCap } from "react-icons/fa";

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
          <p className=" text-center text-4xl font-semibold  font-Poppins tracking-wide  inline text-[#313131]">
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

        <div className="py-10">
          <p className=" text-2xl font-Poppins tracking-wide font-semibold inline text-[#FF0077]  ">
            Work Experience
          </p>
        </div>

        <div className="flex flex-col justify-center sm:py-12">
          <div className=" bg-orange-400 py-3 px-2 sm:max-w-5xl sm:mx-auto  sm:px-0">
            <div className="relative text-[#FF0077] antialiased text-sm text-semibold">
              {/* vertical line */}
              <div className="absolute w-[1px] sm:block bg-[#d0cdcd] h-full left-1/2 transform -translate-x-1/2"></div>
              {/* left card */}
              <div className="  bg-green-100 mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-start flex-col sm:flex-row">
                  <div className="bg-indigo-200 flex justify-start w-1/2 mx-auto items-center">
                    <div className="w-full  sm:pr-8 ">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        className="p-4 rounded group ease-in "
                        //  bg-white shadow cursor-pointer
                      >
                        <h4 className="text-black font-bold mb-4  text-xl">
                          {/* group-hover:text-white group-hover:font-[100]  */}
                          Frontend Developer Intern{" "}
                        </h4>
                        <p className="text-[#888888]">
                          {/* group-hover:text-white group-hover:font-[100] */}
                          April 2023 - July 2023
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-indigo-300 flex justify-start w-1/2 mx-auto items-center">
                    <div className="w-full  sm:pr-8 ">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        className="p-4 rounded group ease-in"
                        //  bg-white shadow cursor-pointer
                      >
                        <h4 className="text-black font-bold mb-4  text-xl">
                          {/* group-hover:text-white group-hover:font-[100]  */}
                          Frontend Developer Intern{" "}
                        </h4>
                        <p className="text-[#888888]">
                          {/* group-hover:text-white group-hover:font-[100] */}
                          April 2023 - July 2023
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste hic minus facilis tenetur explicabo perferendis, magni consequuntur rerum vero blanditiis cumque laudantium debitis assumenda non natus tempora deserunt distinctio itaque.
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
              </div>

              <div className="bg-slate-100 mt-6 sm:mt-0 sm:mb-12">
                <div className="flex flex-wrap items-end flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8 ">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        className="p-4 rounded group ease-in"
                        //  bg-white shadow cursor-pointer
                      >
                        <h4 className="text-black font-bold mb-4  text-xl">
                          {/* group-hover:text-white group-hover:font-[100]  */}
                          Frontend Developer Intern{" "}
                        </h4>
                        <p className="text-[#888888]">
                          {/* group-hover:text-white group-hover:font-[100] */}
                          April 2023 - July 2023
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
              </div>
              {/* right card  */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8 ">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        className="p-4 rounded group ease-in"
                        //  bg-white shadow cursor-pointer
                      >
                        <h4 className="text-black font-bold mb-4  text-xl">
                          {/* group-hover:text-white group-hover:font-[100]  */}
                          Frontend Developer Intern{" "}
                        </h4>
                        <p className="text-[#888888]">
                          {/* group-hover:text-white group-hover:font-[100] */}
                          April 2023 - July 2023
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
