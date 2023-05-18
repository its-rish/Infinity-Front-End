import React from 'react'
import {FaStar , FaStarHalfAlt,FaRegStar,FaTags} from "react-icons/fa"
import {FcPaid} from "react-icons/fc"
import Barber from '../../assets/barber.mp4'
import {Link} from 'react-router-dom'
function Makeup() {
  return (
    <div className='flex justify-center flex-col items-center'>
      <div className='w-screen h-[50vh] flex justify-evenly'>
     
        <div className='flex flex-col items-center justify-center'>
        <h1 className='text-2xl p-5 font-bold'>MAKEUP ARTIST</h1>
         <div className='hover:scale-105 duration-300'>
            <p className='text-xl font-bold'>Review</p>
            <div className='flex '> 
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaStarHalfAlt/>
              <FaRegStar/>
             
            </div>
            <p>( service taken by 2.5 M peoples )</p>
          </div>
        </div>
        <div className='flex items-center justify-center '>
          <video src={Barber} autoPlay loop muted  className='h-[80%] shadow-xl rounded-[1.5rem] '></video>
        </div>
    
      </div>
      <div className='w-[80%] h-[15vh]  border-b-4 border-t-2 grid '>
       <div className='w-[60%] flex items-center gap-[4rem] p-5 '>
       <Link>Packages</Link>
        <Link>Bridal and wedding makeup</Link>
        <Link>Massage</Link>
        <Link>Skincare consultations</Link>
        <Link>Professional hair styling services</Link>
       </div>
      </div>
      <div className='w-[80%] h-full flex pt-10 '>
          <div className='w-[70%]'>
            <h1 className='flex justify-center pb-6 font-bold text-xl'>Packages</h1>
          <div className=''>
           <div className='flex'>
           <div className='items-center flex'><FcPaid/></div>
            <div>
              <p>PACKAGES</p>
            </div>
           </div>
           <h2 className='text-xl font-bold'>Professional hair styling services</h2>
            <div className='flex'>
              <div className='flex items-center'><FaStar/></div>
              <div>
                <h3>4.83(942.5k)</h3>
              </div>
            </div>
             <h3>₹999</h3>
          </div>
          <div className=''>
           <div className='flex'>
           
           
           </div>
           <h2 className='text-xl font-bold'>Bridal and wedding makeup</h2>
            <div className='flex'>
              <div className='flex items-center'><FaStar/></div>
              <div>
                <h3>4.83(942.5k)</h3>
              </div>
            </div>
             <h3>₹1999</h3>
          </div>
          


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
  )
}

export default Makeup