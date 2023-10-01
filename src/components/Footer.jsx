import React from 'react'
import {MdVideoLibrary} from 'react-icons/md';
import { AiFillHome } from "react-icons/ai";
import {MdSubscriptions} from 'react-icons/md'

function Footer() {
  return (
    <div className='sticky bottom-0 top-0  md:hidden  z-10 flex  items-center justify-center  h-14 px-4 py-6  dark:bg-black'>
        <div className="w-[100%] flex  justify-evenly  py-[1rem]  h-10 items-center md:hidden">
       
      <div> <AiFillHome className="text-white text-2xl"/></div>
      <div> <MdSubscriptions className="text-white text-2xl"/></div>

      <div> <MdVideoLibrary className="text-white text-2xl"/></div>

      
    </div>

    </div>
  )
}

export default Footer