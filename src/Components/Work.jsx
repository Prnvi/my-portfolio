import React from "react";
import LFImg from "../assets/Linked.FarmSite.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Work = () => {
  return (
    <div className="w-full h-screen bg-white text-center  md:mx-0 mt-28 xxs:px-4 md:px-0">
      <div className=" mx-auto  ">
        <div>
          <p className=" text-lg font-Poppins tracking-widest font-semibold inline text-[#FF0077]  ">
            MY WORK
          </p>
        </div>
        <div className="pt-5  ">
          <p className=" xs:text-2xl md:text-4xl font-semibold  font-Poppins tracking-wide  inline text-[#313131]">
            Check Out Some of My Works.
          </p>
        </div>
        <div className="md:w-[67%] items-center m-auto sm:mx-10 md:mx-auto">
          <p className="my-7 xxs:mx-10 md:mx-0 text-[#888888] xxs:text-sm md:text-lg tracking-wide ">
            My portfolio is a canvas of my journey, showcasing the projects that
            I've had the privilege to work on. From web design to development,
            each project reflects my commitment to quality and an eye for detail
            and creativity. Feel free to explore!
          </p>
        </div>
        <div className="w-[80%] mx-auto">
          {/* this div coloum grids can be changed in future sm:grid-cols-2 md:grid-cols-2 */}
          <div className="  grid sm:grid-cols-1  md:grid-cols-1 md:gap-4">
            {/* <Link to="https://deploy-preview-116--imaginative-bombolone-395432.netlify.app"> */}
            <Link to="https://www.linkedfarm.eu/">
              <motion.div
                whileHover={{ scale: 1.1 }}
                style={{
                  backgroundImage: `url(${LFImg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                }}
                className=" work-images xs:w-[150px] xs:h-[150px] lg:w-[290px] lg:h-[220px] shadow-md shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div "
              >
                <div>
                  <span></span>
                  <div></div>
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
