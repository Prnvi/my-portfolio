import React from "react";
import LFImg from "../assets/Linked.FarmSite.png";

const Work = () => {
  return (
    <div className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline  border-b-4 text-grey-300 border-pink-600">
            Work
          </p>
          <p className="py-6"> </p>
        </div>
        <div className="grid sm:grid-cols-2  md:grid-cols-3 gap-4">
          <div
            style={{
              backgroundImage: `url(${LFImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              width: "250px",
              height: "240px",
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div "
          >
            <div>
              <span></span>
              <div>
                <a href="/">
                  <button></button>
                </a>
                <a href="/">
                  <button></button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
