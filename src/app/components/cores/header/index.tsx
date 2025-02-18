'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import { CgProfile } from "react-icons/cg";
import { FaRegBell } from "react-icons/fa";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { LuTableProperties } from "react-icons/lu";


const Header = () => {
    const pathName = usePathname()

    if(pathName === "/"){
        return (
            <>
            </>
        )
    }
  return (
    <div className="navbar bg-base-100">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className='ml-4'>
        <LuTableProperties className="text-2xl"/>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          <li><a>Homepage</a></li>
          <li><a>Portfolio</a></li>
          <li><a>About</a></li>
        </ul>
      </div>
      <a className="btn btn-ghost text-xl">{pathName.slice(1,pathName.length)}</a>
    </div>
    <div className="navbar-end flex justify-end gap-4">
        <LiaFlagUsaSolid className="text-4xl" />
      <FaRegBell className="text-2xl" />
      <CgProfile className="text-2xl" />
    </div>
  </div>
  )
}

export default Header