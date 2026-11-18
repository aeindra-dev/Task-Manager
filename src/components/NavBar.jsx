import React from 'react'
import checklist from "../assets/checklist.png"

const NavBar = ({dark,setDark}) => {
  return (
    <div className='w-full h-16 max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8'>
        <a href='/' className='flex items-center gap-2'>
            <img src={checklist} alt="Brand logo" className="h-8 w-8" ></img>
            <span className='text-lg font-bold tracking-tight'>todos</span>
        </a>
        <nav className='hidden items-center gap-2 md:flex'>
            {dark?
            <button
              onClick={()=>{setDark(prev=>!prev)}} 
              className="rounded-lg px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-100 cursor-pointer">
                Light
            </button>
            :
            <button 
              onClick={()=>{setDark(prev=>!prev)}}
              className="rounded-lg px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-500 cursor-pointer">
                Dark
            </button>
            }
        </nav>
    </div>
  )
}

export default NavBar