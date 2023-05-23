import React from 'react'
import {FaStackExchange} from 'react-icons/fa'
import {Link  } from "react-router-dom"
function Blogscomponent(props) {
  return (
    <Link to='https://en.wikipedia.org/wiki/Main_Page'>
    <div className='h-full p-[3rem] mb-3 hover:scale-105 duration-300'>
       <div className='w-[70%] h-[45vh]  flex flex-col '>
          <div className='h-full w-[100%] border-solid border-2 shadow-2xl shadow-yellow-400 '>
            <img className='h-full w-full' src={props.img} alt="background img" />
          </div>
          <div className='flex  justify-between pt-3 text-xl'>
          <h2>{props.name}</h2>
          <p>{<FaStackExchange/>} 5 minute read</p>
          </div>
        </div>
    </div>
    </Link>
  )
}

export default Blogscomponent