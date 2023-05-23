import React from 'react'
import Barber from '../../assets/barber.png'
import Plumber from '../../assets/plumber.png'
import Makeup from '../../assets/Makeup.png'
import { FcApproval, FcEmptyTrash } from 'react-icons/fc'
import Cartitem from './Props'
function cart() {
  return (
    <>
      <h1 className='flex items-center justify-center  text-4xl p-3'>Add to Your Cart</h1>
      <div className='w-screen h-full pb-4 flex flex-row'>


        <div className='w-[70%] h-full border-2 flex-col text-xl '>
          <h3 className='p-4 '>Shoping Cart</h3>
          <Cartitem img={Barber} name='Barber' items='Hair Cut & Beard shave' price='500' logo={<FcApproval />} number='1' secondlogo={<FcEmptyTrash />} />
          <Cartitem img={Barber} name='Barber' items='Scalp massage and conditioning' price='2000' logo={<FcApproval />} number='1' secondlogo={<FcEmptyTrash />} />
          <Cartitem img={Plumber} name='Plumber' items='Pipe installation' price='3500' logo={<FcApproval />} number='1' secondlogo={<FcEmptyTrash />} />
          <Cartitem img={Makeup} name='Makeup' items='Skincare consultations' price='500' logo={<FcApproval />} number='1'  secondlogo={<FcEmptyTrash />} />
          <Cartitem img={Makeup} name='Makeup' items='Bridal Makeup' price='4000' logo={<FcApproval />} number='1' secondlogo={<FcEmptyTrash />} />
        </div>
        <div className=' h-full w-[30%] bg-slate-200 p-5 '>
          <div className='flex flex-col '>
            <div className='flex items-center justify-center'>
              <h3>ORDER SUMMARY</h3>
            </div>
            <div className='flex flex-col  p-2 border-solid border-2 border-green-300'>
              <div className='flex justify-between p-2 '>
                <p>ITEMS 5</p>
                <p>10500</p>
              </div>
              <div className='flex justify-between p-2'>
                <p>GST</p>
                <p>18%</p>
              </div>
            </div>
            <div className='flex flex-col'>
              <div className='flex justify-evenly m-5 items-center font-bold'>
                <p>TOTAL COST</p>
                <p className='bg-white  p-2'>₹ 12390</p>
              </div>
              <div className='flex flex-col items-center justify-center p-6'>
                <input className='p-1 mb-3' type="number" placeholder='PIN CODE' required  />
                <button className=' p-2 rounded-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500'>CHECKOUT</button>
              </div>
              <div className='flex justify-evenly  border-t-2 border-black'>
                <p className='mt-2'>COUPON CODE</p>
                <input className='mt-2' type="text" />
                <span className='mt-2'>+</span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </>
  )
}

export default cart