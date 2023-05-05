import React from 'react'
import logo from "../assets/logo.png"
import {Link , HashLink} from "react-router-dom"

function Navbar() {
  return (
   <nav className='bg-white'>
      <div className='flex items-center font-medium justify-around'>

        <div className='flex justify-center items-center '>
          <HashLink to="/" className='text-2xl font-bold  text-[rgb(239,163,10)]'>Infinity</HashLink>
          <img src={logo} alt="logo" className='md:cursor-pointer h-9 ' />
        </div>
        <ul className='flex text-[rgb(239,163,10)] items-center '>
          <li>
            <HashLink to="/" className='py-7 px-3 inline-block'>Home</HashLink>
            
          </li>
          <li>
            <Link to="/" className='py-7 px-3 inline-block'>Home</Link>
            
          </li>
          <li>
            <Link to="/" className='py-7 px-3 inline-block'>Home</Link>
            
          </li>
          <li>
            <Link to="/" className='py-7 px-3 inline-block'>Home</Link>
            
          </li>
          <Link to="./component/Email" className='px-4 py-1  text-sm text-center text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2' >Login / Sign Up</Link>
        </ul>

      </div>

   </nav>
  )
}

export default Navbar