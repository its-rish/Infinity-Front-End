import React from 'react'

function Carpenter() {
  return (
    <div>
    <div>
      <h1 className='text-xl md:text-2xl font-bold text-center py-10 mt-10 uppercase'>Ready to watch ? <br /> Enter your email to create or restart your membership</h1>
  <div className='w-full py-10 text-black'></div>
  <div className='  max-w-[1240px] mx-auto grid lg:grid-cols-3'>
    <div>
      <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>want tips & tricks to optimize your works</h1>
      <p>Sign up to our newsletter and stay up to date.</p>
    </div>
    <div className='my-4'>
      <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
        <input className='p-3 flex w-full rounded-md shadow text-black' type="email" placeholder='Enter Email' />
        <button className='bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>Notify Me</button>
      </div>
      <p className='font-bold'>
        we care abaout the protection of your data. 
      </p>
    </div>

  </div>
  
  </div>
  </div>
  )
}

export default Carpenter