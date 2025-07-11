import React from 'react'
import { LuArrowDownRight } from "react-icons/lu";

const NavbarBtn = () => {
  return (
    <button className='
      px-4 py-1 
      text-base md:text-lg 
      rounded-full 
      text-white 
      border border-cyan 
      flex items-center gap-1 
      bg-gradient-to-r from-cyan to-orange 
      hover:border-orange 
      hover:scale-110 
      transition
    '>
      Hire Me
      <div className='hidden sm:block'>
        <LuArrowDownRight />
      </div>
    </button>
  )
}

export default NavbarBtn
