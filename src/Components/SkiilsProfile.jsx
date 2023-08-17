import React from "react";

const SkiilsProfile = () => {
  return (
    <div
      name="skillProfile"
      className="w-full h-screen bg-white text-[#313131]"
    >
      <div className=" sm:flex sm:flex-col md:grid md:grid-cols-2 gap-5 justify-center  w-full h-full  mx-auto sm:px-20 md:px-30">
        <div className="md:w-[500px] mx-auto">
          <div className="profileDiv px-5">
            <p className=" text-xl font-Poppins tracking-widest font-bold inline text-pink-600 ">
              PROFILE
            </p>
            <p className="text-[#888888] py-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              maxime similique laboriosam debitis porro delectus quibusdam quo
              at cumque. Qui, ea.
            </p>
          </div>
        </div>

        <div className="md:w-[500px] mx-auto">
          <div className="skillDiv px-5">
            <p className="text-xl font-Poppins tracking-widest font-bold inline  text-pink-600">
              SKILL
            </p>
            <p className="text-[#888888] py-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              maxime similique laboriosam debitis porro delectus quibusdam quo
              at cumque. Qui, ea.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkiilsProfile;
