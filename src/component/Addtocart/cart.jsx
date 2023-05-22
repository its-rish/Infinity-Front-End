import React from 'react'
import Barber from '../../assets/barber.png'
import plumber from '../../assets/plumber.png'
import Makeup from '../../assets/Makeup.png'
import { FcApproval,FcEmptyTrash } from 'react-icons/fc'
import Cartitem from './Props'
function cart() {
  return (
    <>
     <h1 className='flex items-center justify-center  text-4xl p-3'>Add to Your Cart</h1>
    <div className='w-screen h-full pb-4 flex flex-row'>
     

      <div className='w-[70%] h-full border-2 flex-col text-xl '>
        <h3>Shoping Cart</h3>
        <Cartitem img={Barber} name='Barber'items='Hair + Beard Cut' price='2500' logo={<FcApproval/>} secondlogo={<FcEmptyTrash/>}/>
        <Cartitem img={Barber} name='Barber'items='Body Massage' price='2000' logo={<FcApproval/>} secondlogo={<FcEmptyTrash/>}/>
        <Cartitem img={plumber} name='Plumber'items='Hair + Beard Cut' price='4500' logo={<FcApproval/>} secondlogo={<FcEmptyTrash/>}/>
        <Cartitem img={Makeup} name='Makeup'items='Hair + Beard Cut' price='4500' logo={<FcApproval/>} secondlogo={<FcEmptyTrash/>}/>
        <Cartitem img={Makeup} name='Makeup'items='Hair + Beard Cut' price='4500' logo={<FcApproval/>} secondlogo={<FcEmptyTrash/>}/>
      </div>
      <div className=' h-full w-[30%] '>
          <div className='flex flex-col '>
            <div className='flex items-center justify-center'>
              <h3>ORDER SUMMARY</h3>
              <hr/>
            </div>
            <div>
              <p>ITEMS 5</p>
              <p></p>
            </div>
            
          </div>
      </div>

    </div>
    </>
  )
}

export default cart