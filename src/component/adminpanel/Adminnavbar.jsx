import React from 'react'
import {FaBars,FaRegUserCircle,FaSms} from 'react-icons/fa'

function Adminnavbar() {
  return (
    <nav className='flex justify-between p-1 h-[3rem] border-b-2 bg-[rgba(0,0,0,0.4)] items-center '>
      <div className='p-4'>
        <FaBars fontSize='1.5rem'/>
      </div>
      <div className='flex gap-6 pr-4 '>
        <FaSms fontSize='1.5rem'/>
        <FaRegUserCircle fontSize='1.5rem'/>

      </div>

    </nav>
  )
}

export default Adminnavbar