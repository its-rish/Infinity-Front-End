import React from 'react'
import Bg from "../assets/Untitled.mp4"


function video() {
  return (
    <div className='absolute flex justify-center h-full w-screen text-white'>
      <video className=' absolute w-full h-[50vh] object-cover -z-10' src={Bg} autoPlay loop muted ></video>
      <div className='mt-28 py-10 items-center justify-center '>
        <p className='text-[rgb(0,224,150)] text-sm md:text-xl'>Infinite problem one soultion</p>
        <h1 className='text-2xl md:text-4xl'>YOU DEMAND WE SERVE  ...</h1>
       
      </div>
    </div>
  )
}

export default video