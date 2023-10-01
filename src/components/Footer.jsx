import React from 'react'
import {MdVideoLibrary} from 'react-icons/md';
import { AiFillHome } from "react-icons/ai";
import {MdSubscriptions} from 'react-icons/md'

function Footer() {
  return (
    <div className='sticky w-[100%] md:hidden  z-10 flex  items-center justify-center h-16   px-4  bottom-0 pt-2 pb-7  dark:bg-black'>
        <div className="w-[100%] flex justify-evenly  items-center">
       
      <div> <AiFillHome className="text-white text-2xl"/></div>
      <div> <MdSubscriptions className="text-white text-2xl"/></div>

      <div> <MdVideoLibrary className="text-white text-2xl"/></div>

      
    </div>

    </div>
  )
}

export default Footer