import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Result = () => {
  return <p>Your message has been successfully sent!</p>;
};
function Contact() {
  const form = useRef();
  const [result, showResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ywc6zdi",
        "template_mnfc91c",
        form.current,
        "uAqF35_6ATi3qmTKJ"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
          console.log("message failed");
        }
      );
    e.target.reset();
    showResult(true);
    setTimeout(() => {
      showResult(false);
    }, 5000);
  };
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
      <div className="flex items-center text-center justify-center pb-20">
        <form ref={form} onSubmit={sendEmail} className="w-full max-w-2xl">
          <input
            type="text"
            name="from_name"
            placeholder="Name"
            required
            className="my-5 appearance-none bg-transparent border-b border-[#494848] focus:border-[#FF0077]  w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="my-5 appearance-none bg-transparent border-b border-[#494848] focus:border-[#FF0077]  w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
          />
          <input
            type="text"
            name="subject"
            placeholder="subject"
            required
            className="my-5 appearance-none bg-transparent border-b border-[#494848] focus:border-[#FF0077]  w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Message"
            required
            className="pt-10 mb-5 appearance-none bg-transparent border-b border-[#494848] focus:border-[#FF0077] w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="font-Poppins tracking-widest  bg-[#FF0077] hover:bg-[#cc005f] border-none text-md font-semibold text-white py-3 px-16 my-10"
          >
            SUBMIT
          </button>
          <div className="text-white text-xs text-center py-4">
            {result ? <Result /> : null}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
