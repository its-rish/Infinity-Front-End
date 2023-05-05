import React from 'react'
import Bg from "../assets/Untitled.mp4"
import {Link} from "react-router-dom"


function video() {
  return (
    <div className=' relative h-[55vh] w-screen top-0 left-0   bg-cover overflow-hidden  '>
      <video className='  w-screen bg-center  h-full top-0 left-0 object-cover' src={Bg} autoPlay loop muted ></video>
      <div className='absolute top-[50%]  right-[30%]  flex flex-col md:justify-center '>
        <p className='text-[rgb(230,153,0)]  text-sm md:text-xl'>Infinite problem one soultion</p>
        <h1 className='text-white text-2xl md:text-4xl pb-6'>YOU DEMAND WE SERVE  ...</h1>
        <Link to="./component/Email" className= 'w-[45%] py-5 px-2  text-sm text-center text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2'>Lets Go</Link>
      </div>
    </div>
  )
}

export default video