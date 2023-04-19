import React,{useState} from 'react'
import Logo from '../assets/logo1.ico';
import {FaBars ,FaTimes} from "react-icons/fa"
function Navbar() {
    const[nav,setNav]=useState(false)
    const hamgurger=()=>{
        setNav(!nav)
    }

  return (
    <div className='text-[rgb(135,120,222)] flex justify-between items-center px-3 h-20 max-w-[1240px]mx-auto'>
        <div className='flex items-center'>
        <h1 className='w-full text-2xl md:text-3xl font-bold '>
            Infinity
        </h1>
        <img src={Logo} alt="Logo" className="w-10 md:w-20 bg-transparent pt-1 " />
        </div>
        <ul className='hidden md:flex  text-[rgb(230,153,0)] '>
            <li className='p-4 '>
                Home
            </li>
            <li className='p-4 '>
                Services
            </li>
            <li className='p-4'>
              About Us
            </li>
            <li className='p-4 '>
                Blogs
            </li>
            <button className='px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2'>
                Login / SignUp
            </button>
           
        </ul>
        <div onClick={hamgurger} className='block md:hidden'>
            {!nav?<FaBars size={25}/>:<FaTimes size={25}/>}
        </div>
        <div className={nav?' text-[rgb(0,0,0)] fixed left-0 top-0 w-[60%] h-full bg-gradient-to-t from-indigo-500 ease-in-out duration-200':'fixed left-[-100%]'}>  
        <ul className='pt-24 w-full text-center'>
            <li className='p-4 border-b border-gray-500'>
                Home
            </li>
            <li className='p-4 border-b border-gray-500'>
                Services
            </li>
            <li className='p-4 border-b border-gray-500'>
              About Us
            </li>
            <li className='p-4 border-b border-gray-500'>
                Blogs
            </li>
            <button className='px-4 mt-10 py-2 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2'>
                Login / SignUp
            </button>
           
        </ul> 
        </div>
    </div>
  )
}

export default Navbar