import React from 'react'
import {Link  } from "react-router-dom"
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
       <a href="https://cp-algorithms.com/" >Reference</a>
        <a href="https://react.dev/" >React</a>
       </div>
       <div className='w-full flex flex-col px-2'>
       <a href="https://www.linkedin.com/feed/" >linkedin</a>
        <Link href="https://www.pexels.com/search/women%20in%20tech/" >pixels</Link>
       </div>
       <div className='w-full flex flex-col px-2'>
       <a href="https://slack.com/intl/en-in" >slack</a>
        <a href="https://github.com/" >Github</a>
       </div>
       
      </div>
        
    </div>
  )
}

export default footer