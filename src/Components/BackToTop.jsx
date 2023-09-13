import React from "react";
import { BsArrowUp } from "react-icons/bs";
import { useEffect, useState } from "react";

function BackToTop() {
  const [backToTopButton, setBackToTopButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {backToTopButton && (
         <div className=" fixed mx-auto">

        <button
          style={{
            position: "fixed",
            bottom: "0px",
            right: "0px",
            height: "50px",
            width: "40px",
            fontSize: "30px",
          }}
          onClick={scrollUp}
          className=" text-white group  bg-[#cc005f] hover:bg-black px-6 py-3 my-2 align-center flex items-center  "
        >
          <span className="group-hover: duration-300">
            <BsArrowUp className="fixed bottom-[16px] right-[11px] w-[20px] font-extrabold " />
          </span>
        </button>
     
      </div>
      )}
    </div>
  );
}

export default BackToTop;
