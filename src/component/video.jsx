import React from 'react'
import Bg from "../assets/Untitled.mp4"


function video() {
  return (
    <div className='top-0 w-full'>
      <video src={Bg} autoPlay loop muted ></video>
    </div>
  )
}

export default video