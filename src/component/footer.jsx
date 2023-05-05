import React from 'react'

function footer() {
  return (
    <div className='w-screen h-full bottom-0 bg-[rgb(203,213,225)] flex justify-between'>
      <div>
      <h1>
        Infinity
      </h1>
      <p>
        @solution to your problem
      </p>
      <a href="http://google.com">Legal Disclaimer - Privacy Statement</a>

      </div>
      <div className='relative w-40% flex px-4 py-1'>
       <div className='w-full flex flex-col px-2'>
       <a href="http://" target="_blank" rel="noopener noreferrer">twitter</a>
        <a href="http://" target="_blank" rel="noopener noreferrer">Instagram</a>
       </div>
       <div className='w-full flex flex-col px-2'>
       <a href="http://" target="_blank" rel="noopener noreferrer">twitter</a>
        <a href="http://" target="_blank" rel="noopener noreferrer">Instagram</a>
       </div>
       <div className='w-full flex flex-col px-2'>
       <a href="http://" target="_blank" rel="noopener noreferrer">twitter</a>
        <a href="http://" target="_blank" rel="noopener noreferrer">Instagram</a>
       </div>
       
      </div>
        
    </div>
  )
}

export default footer