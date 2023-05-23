import React from 'react'
import logo from "../assets/logo.png"
import {Link  } from "react-router-dom"
import {FaShoppingCart} from 'react-icons/fa'

function Navbar() {
  return (
   <nav className='bg-[rgba(0,0,0,0.5)] fixed w-screen z-50 top-0  overflow-hidden'>
      <div className='flex  font-medium justify-around'>

        <div className='flex justify-center items-center '>
          <Link to="/" className='text-2xl font-bold  text-[rgb(239,163,10)]'>Infinity</Link>
          <img src={logo} alt="logo" className='md:cursor-pointer h-9 ' />
        </div>
        <ul className='flex text-[rgb(239,163,10)] items-center '>
          <li>
            <Link to="/" className='py-7 px-3 inline-block'>Home</Link>
            
          </li>
         <div>
         <li>
           <Link to='/service' className='py-7 px-3 inline-block' >Services</Link>
            
          </li>

         </div>
          <li>
            <Link to="/about" className='py-7 px-3 inline-block'>Abouts</Link>
            
          </li>
          <li>
            <Link to="/blogs" className='py-7 px-3 inline-block'>Blogs</Link>
            
          </li>
          <li>
          <Link to="./component/login" className='p-4   text-sm text-center text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2' >Login / Sign Up</Link>
          </li>
          
          <Link to='/cart' className='ml-8 hover:text-cyan-50'>{<FaShoppingCart size='2rem'/>}</Link>
          

        </ul>

      </div>

   </nav>
  )
}

export default Navbar