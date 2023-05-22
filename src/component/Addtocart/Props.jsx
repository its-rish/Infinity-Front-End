import React from 'react'

function Props( props) {
  return (
   <>
   <div className='w-[97%] mb-5 border-2 flex flex-row items-center justify-evenly hover:scale-105 duration-300'>
          <div className='z-10 w-[3rem]  flex justify-center items-center'>
            <img src={props.img} alt="" />
            <span className='text-2xl font-bold pl-5'>{props.name}</span>
          </div>
          <div className=' flex flex-col '>
            <h3 className='font-bold'>{props.items}</h3>
            <p>price: {props.price}</p>
            <p> {props.logo}</p>

          </div>
          <div className='flex flex-row pt-4 pb-4'>

            <button className='border-2 w-5 mr-5 font-bold flex justify-center ' >-</button>
            <span className=''>0</span>
            <button className='border-2 w-5 ml-5 font-bold flex justify-center ' >+</button>
          </div>
          <div className='flex flex-col items-center '>
            <h2>{props.price}</h2>
            <span>{props.secondlogo}</span>
          
          </div>
        </div>
   </>
  )
}

export default Props