import React from 'react'
import Bridal from "../assets/bridal.jpg"
import {FaStar} from "react-icons/fa"

function Topoffers() {
  return (
    <div className='w-screen  h-60vh flex  shadow-2xl '>

    <div className='w-screen flex '>
        <div className=' w-screen justify-center items-center flex flex-col'>
            <h1 className='text-center text-3xl font-bold py-4'>Top Service</h1>
            <img className='h-[60%] hover:scale-105 duration-300 shadow-lg  ' src={Bridal} alt=" Bridal Makeup" />
        </div>

        <div className='w-screen items-center  grid grid-cols-2 gap-8'>
          <div>
          <h2 className='text-xl font-bold'>
            We are No 1
          </h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Sequi dignissimos explicabo neque eius eligendi blanditiis,
              vero quae ipsam earum, in, id consequatur qui aperiam officia
               vel maiores quaerat unde nam!
               </p>
          </div>
          <div className='hover:scale-105 duration-300'>
            <p className='text-xl font-bold'>Review</p>
            <div className='flex '> 
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaStar/>
            </div>
            <p>( service taken by 1.2 M peoples )</p>
          </div>
          
        </div>
    </div>
        
    </div>
  )
}

export default Topoffers