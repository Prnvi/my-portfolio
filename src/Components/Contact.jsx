import React from "react";

const Contact = () => {
  return (
    <div className="w-full h-screen bg-[#151515] text-center  pt-2 md:mx-0  xxs:px-4 md:px-0">
      <div className=" mx-auto ">
        <div className="mt-28">
          <p className=" text-lg font-Poppins tracking-widest font-semibold inline text-[#FF0077]  ">
            CONTACT
          </p>
        </div>
        <div className="pt-5">
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
      <div className="flex items-center text-center justify-center">
        <form className="w-full max-w-lg">
          <div className="flex flex-col items-center py-2 ">
            <label for="name" className="block"></label>
            <input
              className="my-5 appearance-none bg-transparent border-b border-[#888888] focus:border-[#FF0077]  w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              aria-label="Full name"
              minLength={3}
            />

            <label for="email" className="block"></label>
            <input
              className="my-5 appearance-none bg-transparent border-b border-[#888888] focus:border-[#FF0077]  w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              id="email"
              name="email"
              placeholder="email"
              aria-label="email"
            />

            <label for="subject" className="block"></label>
            <input
              className="my-5 appearance-none bg-transparent border-b border-[#888888] focus:border-[#FF0077]  w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              id="subject"
              name="subject"
              placeholder="subject"
              aria-label="subject"
            />

            <label for="message" className="block"></label>
            <input
              className="my-5 appearance-none bg-transparent border-b border-[#888888] focus:border-[#FF0077]  w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              id="message"
              name="message"
              placeholder="message"
              aria-label="message"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
