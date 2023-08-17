import React from "react";
import img from "../assets/IMG_me.jpeg";

const AboutNew = () => {
  return (
    <div className="w-full bg-white text-center sm:mx-5 md:mx-0 md:my-28">
      <div>
        <div>
          <p className=" text-xl font-Poppins tracking-widest font-bold inline text-pink-600 ">
            ABOUT
          </p>
        </div>
        <div className="pt-5 ">
          <p className="  sm:text-right text-4xl font-semibold  font-Poppins tracking-wide  inline text-[#313131]">
            Let me introduce myself.
          </p>
        </div>
      </div>
      <div className=" md:w-[800px] md:flex md:flex-row sm:flex sm:flex-col sm:items-center items-center mx-auto mt-2 mb-10 gap-8">
        <div
          className="flex justify-center  m-auto"
        >
          <img
            className="w-[140px] h-[140px] "
            src={img}
            alt="Description of the image"
            style={{
                backgroundImage: `url(${img})`,
                objectFit: "cover",
                borderRadius: "50%",
              }}
          />
        </div>
        <div className=" md:w-[600px] md:h-[200px] items-center m-auto sm:mx-10 md:mx-0 ">
           <p className="m-10  sm:mx-10 md:mx-0">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam rem nihil quo ut mollitia natus unde quam neque dicta deserunt at nostrum ex facere ducimus aspernatur, consequatur quae iure sit?
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea et, animi veniam aut, ipsam incidunt, quo aliquid assumenda optio impedit eligendi rerum neque sequi cupiditate modi voluptates facilis est praesentium?
               </p> 
            
        </div>
      </div>
    </div>
  );
};

export default AboutNew;
