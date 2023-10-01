import React from 'react'
import {MdVideoLibrary} from 'react-icons/md';
import { AiFillHome } from "react-icons/ai";
import {MdSubscriptions} from 'react-icons/md'

function Footer() {
  return (
    <div className='sticky  md:hidden top-0 z-10 flex flex-row items-center justify-center  h-17 px-4 md:px-5 bg-white dark:bg-black  md:translate-x-0'>
        <div className="w-100 flex justify-between gap-16 py-[1rem]  h-5 items-center md:hidden">
       
       <AiFillHome className="text-white text-xl"/>
       <MdSubscriptions className="text-white text-xl"/>

       <MdVideoLibrary className="text-white text-xl"/>

      
    </div>

    </div>
  )
}

export default Footer