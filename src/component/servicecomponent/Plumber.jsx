import React from 'react'
import {FaStar , FaStarHalfAlt,FaRegStar,FaTags} from "react-icons/fa"
import {FcPaid} from "react-icons/fc"
import Barber from '../../assets/plumber.mp4'
import {Link} from 'react-router-dom'
import Navbar from "../Navbar"

import Itemsprops from './Propsitem'
function Plumber() {
  return (
    <>
    <Navbar/>
    <div className='flex justify-center flex-col items-center'>
      <div className='w-screen h-[50vh] flex justify-evenly'>
     
        <div className='flex flex-col items-center justify-center'>
        <h1 className='text-2xl p-5 font-bold'>Plumber</h1>
         <div className='hover:scale-105 duration-300'>
            <p className='text-xl font-bold'>Review</p>
            <div className='flex '> 
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaStarHalfAlt/>
              <FaRegStar/>
             
            </div>
            <p>( service taken by 1 M peoples )</p>
          </div>
        </div>
        <div className='flex items-center justify-center '>
          <video src={Barber} autoPlay loop muted  className='h-[80%] shadow-xl rounded-[1.5rem] '></video>
        </div>
    
      </div>
      <div className='w-[80%] h-[15vh]  border-b-4 border-t-2 grid '>
       <div className='w-[60%] flex items-center gap-[4rem] p-5 '>
       <Link>Packages</Link>
        <Link>Installation</Link>
        <Link>Massage</Link>
        <Link>Repair</Link>
        <Link>Sanitation Units</Link>
       </div>
      </div>
      <div className='w-[80%] h-full flex pt-10 '>
          <div className='w-[70%]'>
            <h1 className='flex justify-center pb-6 font-bold text-xl'>Packages</h1>
            <Itemsprops icon={<FcPaid/>} navname='PACKAGES' name="Pipe installation" nameicon={<FaStar/>} users='3.83(942.5k)' money='₹3500'/>
            <Itemsprops icon={<FcPaid/>} navname='PACKAGES' name="Piping/leak services" nameicon={<FaStar/>} users='4.83(942.5k)' money='₹19900'/>
            <Itemsprops icon={<FcPaid/>} navname='PACKAGES' name="Toilet plumbing" nameicon={<FaStar/>} users='4.0(942.5k)' money='₹4900'/>
            <Itemsprops icon={<FcPaid/>} navname='PACKAGES' name="Sump pump services" nameicon={<FaStar/>} users='3.83(942.5k)' money='₹9900'/>
            
          </div>

          <div className='flex flex-col '>
            <div className='p-2 border-[1px] m-4 flex hover:scale-105 duration-300 '>
             <div className='flex items-center'><FaTags/></div>
             <div className='p-2'>
             <h3>save 15% on every order</h3>
              <p>Get plus now</p>
             </div>
            </div>
            <div className='p-2 border-[1px] m-4 flex hover:scale-105 duration-300 '>
             <div className='flex items-center'><FaTags/></div>
             <div className='p-2'>
             <h3>Assured Cashback on Paytm</h3>
              <p>Up to ₹300 off</p>
             </div>
            </div>
            <div className='p-2 border-[1px] m-4 flex hover:scale-105 duration-300 '>
             <div className='flex items-center'><FaTags/></div>
             <div className='p-2'>
             <h3>50% off on SBI debit card</h3>
              <p>Up to ₹500 off</p>
             </div>
            </div>
            <div className='p-2 border-[1px] m-4 flex hover:scale-105 duration-300 '>
             <div className='flex items-center'><FaTags/></div>
             <div className='p-2'>
             <h3>CRED pay</h3>
              <p>CashbackUp to ₹300 off</p>
             </div>
            </div>
          </div>
      </div>

    </div>
    </>
  )
}

export default Plumber