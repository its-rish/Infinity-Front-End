import React from 'react'
import Bg from "../assets/Untitled.mp4"


function video() {
  return (
    <div className='bg-fixed'>
      <video className=' w-[100%] md:h-[55vh] object-cover' src={Bg} autoPlay loop muted >Your browser does not support the video tag.</video>
    </div>
  )
}

export default video