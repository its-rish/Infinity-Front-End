import React from 'react'
import Bgmakup from '../assets/makeup.png'
import Bgcarpenter from '../assets/bgcarpenter.png'
import Bgelectrician from '../assets/Bgelectrician .png'
import {Link} from "react-router-dom"
function Offers() {
  return (
    <div>
      <h1 className='text-3xl md:text-4xl font-bold text-center py-10 mt-10 uppercase'>Top Offers</h1>
    <div className='w-full py-[4rem] px-4 bg-white '>
    
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Bgmakup} alt="https://www.flaticon.com/free-icon/makeup_9209094?term=makeup&page=1&position=66&origin=search&related_id=9209094" />
          <h2 className='text-2xl font-bold text-center my-2'> Makeup Artist</h2>
          <p className='text-2xl font-bold text-center'>₹ 1999</p>
          <div className='text-center font-medium p-5'>
            <p>For New User Get 25% Off</p>
            <p>Now Parlar at Your DoorStapes</p>
            <p>Hurry Up</p>
          </div>
          <Link to="./servicecomponent/Makeup" className='px-4 py-1 text-sm text-center text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2'>Get Now</Link>
          
        
        </div>

        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Bgcarpenter} alt="https://www.flaticon.com/free-icon/carpenter_3531568?term=carpenter&page=1&position=6&origin=search&related_id=3531568" />
          <h2 className='text-2xl font-bold text-center my-2'> Carpenter</h2>
          <p className='text-2xl font-bold text-center'>₹ 2999 (As per your work)</p>
          <div className='text-center font-medium p-5'>
            <p>50% Off On Your First Booking</p>
            <p>You Will Get Nice and Fine Touch By Our Skilled Worker </p>
            <p>Hurry Up</p>
          </div>
          <Link to="./servicecomponent/Carpenter" className='px-4 py-1 text-sm text-center text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2'>Get Now</Link>
          
        
        </div>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Bgelectrician} alt="https://www.flaticon.com/free-icon/electrician_307943?term=electrician&page=1&position=4&origin=search&related_id=307943" />
          <h2 className='text-2xl font-bold text-center my-2'> Electricain</h2>
          <p className='text-2xl font-bold text-center'>₹ 1999</p>
          <div className='text-center font-medium p-5'>
            <p>For New User Get 25% Off</p>
            <p>Now Parlar at Your DoorStapes</p>
            <p>Hurry Up</p>
          </div>
          <Link to="./servicecomponent/Electrician" className='px-4 py-1 text-sm text-center text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2'>Get Now</Link>
         
          
        
        </div>
      </div>

    </div>
    </div>
  )
}

export default Offers