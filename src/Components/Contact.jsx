import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const { register, handleSubmit } = useForm();
  return (
    <div className="w-full bg-[#151515] text-center  pt-2 md:mx-0  xxs:px-4 md:px-0">
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
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}
          className="w-full max-w-lg"
        >
          <div className="flex flex-col items-center py-2 ">
            <label htmlFor="name" className="block"></label>
            <input
              {...register("name", { required: true })}
              className="my-5 appearance-none bg-transparent border-b border-[#888888] focus:border-[#FF0077]  w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              aria-label="Full name"
              minLength={3}
              required
            />

            <label htmlFor="email" className="block"></label>
            <input
              {...register("email", { required: true })}
              className="my-5 appearance-none bg-transparent border-b border-[#888888] focus:border-[#FF0077]  w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              id="email"
              name="email"
              placeholder="email"
              aria-label="email"
              required
            />

            <label htmlFor="subject" className="block">
              hello
            </label>
            <input
              {...register("subject", { required: true })}
              className="my-5 appearance-none bg-transparent border-b border-[#888888] focus:border-[#FF0077]  w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              id="subject"
              name="subject"
              placeholder="subject"
              aria-label="subject"
            />

            <label htmlFor="text-input" className="block"></label>
            <textarea
              {...register("message", { required: true })}
              className="my-5 appearance-none bg-transparent border-b border-[#888888] focus:border-[#FF0077]  w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              id="text-input"
              name="text-input"
              placeholder="message"
              aria-label="text-input"
              rows="6"
            />
          </div>
          <div className="my-7">
            <button
              className="font-Poppins tracking-10  bg-[#FF0077] hover:bg-[#cc005f] border-none text-md font-semibold text-white py-3 px-10 "
              type="button"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
