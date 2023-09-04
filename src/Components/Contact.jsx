import React from "react";

const Contact = () => {
  return (
    <div className="w-full h-screen bg-[#151515] text-center  pt-2 md:mx-0  xxs:px-4 md:px-0">
      <div className="w-3/4 mx-auto  ">
        <div className="mt-28">
          <p className=" text-lg font-Poppins tracking-widest font-semibold inline text-[#FF0077]  ">
            CONTACT
          </p>
        </div>
        <div className="pt-5 sm:pb-7 ">
          <p className=" xs:text-2xl md:text-4xl font-semibold  font-Poppins tracking-wide  inline text-white">
            I'd Love To Hear From You.
          </p>
        </div>
        <div className="md:w-3/4 items-center  mx-auto ">
          <p className="my-10 xxs:mx-2 md:mx-0 text-[#888888] font-Poppins xs:text-sm md:text-lg tracking-widest">
            Whether you have a project in mind, a question about my work, or
            just want to say hello, your thoughts and inquiries are valuable to
            me. Drop me a message!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
