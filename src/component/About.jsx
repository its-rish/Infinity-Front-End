import React from 'react'
import Navbar from './Navbar'
function About() {
  return (
    <>
      <Navbar />
      <div className='w-screen h-full'>
        <div className='w-screen h-[100vh]'>
          <div className='flex flex-col items-center mt-[20vh]'>
            <h1 className='p-4 font-bold text-4xl'>Join our Team.</h1>
            <p>Helps us on our quest to make good software even better</p>
            <button className='p-2 rounded-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500'>Work With Us</button>
          </div>
          <div className='flex flex-col'>
            <div className='flex flex-row justify-between'>
              <img src="" alt="" />
              <img src="" alt="" />
            </div>
            <div className='flex justify-evenly'>
              <img src="" alt="" />
              <img src="" alt="" />
            </div>
          </div>
        </div>

      </div>

    </>
  )
}

export default About