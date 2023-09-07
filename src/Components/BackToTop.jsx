import React from 'react'
import {BsArrowUp} from 'react-icons/bs'

const BackToTop = () => {
  return (
    <div>
         <div className=" fixed mx-auto py-3 righ-[10%]">
            <button className=" text-white group border-[3px] border-[#FF0077] px-6 py-3 my-2 align-center flex items-center hover:bg-[#FF0077] hover:border-[#FF0077]">
              
              <span className="group-hover: duration-300">
                <BsArrowUp className="ml-3 " />
              </span>
            </button>
          </div>
      
    </div>
  )
}

export default BackToTop
