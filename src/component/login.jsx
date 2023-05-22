import React from 'react'
import Bglogin from "../assets/bglogin.jpg"
import{Link} from 'react-router-dom'

function login() {
  return (


    <div className='h-full w-scree '>
      <div className='relative cover grid overflow-hidden'>

        <img src={Bglogin} alt="background-img" className='cover overflow-hidden animate-trans-right' />
        <div className='absolute w-screen h-full md:h-[100vh] p-20  items-center flex justify-evenly'>
          <div>
            <h1 className='text-white items-center justify-center flex p-3'>USER SIGNUP</h1>
            <form action="" className=' bg-[rgba(0,0,0,0.5)]  border px-[6rem] py-2 shadow-2xl  hover:scale-105 duration-300  '>

              <div className='flex flex-col items-center  text-white pb-4 pt-3'>
                <label htmlFor="Name">Name</label>
                <input className='mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
invalid:border-pink-500 invalid:text-pink-600
focus:invalid:border-pink-500 focus:invalid:ring-pink-500 text-black' type="text" name='name' placeholder='Name' autoComplete='off' required />
              </div>

              <div className='flex flex-col items-center  text-white pb-4'>
                <label htmlFor="email">Email</label>
                <input className='mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
invalid:border-pink-500 invalid:text-pink-600
focus:invalid:border-pink-500 focus:invalid:ring-pink-500 text-black' type="text" name='email' placeholder='xyz@gmail.com' autoComplete='off' required />
              </div>

              <div className='flex flex-col items-center  text-white pb-4 '>
                <label htmlFor="phone">Phone</label>
                <input className='mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
invalid:border-pink-500 invalid:text-pink-600
focus:invalid:border-pink-500 focus:invalid:ring-pink-500 text-black' type="tel" name='phone' placeholder='+91' autoComplete='off' required />
              </div>

              <div className='flex flex-col items-center  text-white pb-4'>
                <label htmlFor="address">Address</label>
                <input className='mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
invalid:border-pink-500 invalid:text-pink-600
focus:invalid:border-pink-500 focus:invalid:ring-pink-500 text-black' type="text" name='address' autoComplete='off' required />
              </div>

              <div className='flex flex-col items-center  text-white pb-4'>
                <label htmlFor="password">password</label>
                <input className='mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
invalid:border-pink-500 invalid:text-pink-600
focus:invalid:border-pink-500 focus:invalid:ring-pink-500 text-black' type="password" name='password' autoComplete='off' required />
              </div>

              <div className='flex flex-col items-center  text-white '>
                <label htmlFor="email">confirm Password</label>
                <input className='mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
invalid:border-pink-500 invalid:text-pink-600
focus:invalid:border-pink-500 focus:invalid:ring-pink-500 text-black' type="password" name='password' autoComplete='off' required />
              </div>

              <div className='flex pt-10 pb-4 text-white justify-around'>
                <button className='bg-purple-600 hover:bg-sky-500 text-white font-bold py-2 px-4 rounded-full'>Sign Up</button>
                  <Link to='/' className='text-sky-500 hover:text-sky-300 flex items-center ml-3 '>Service provider</Link>
              </div>

            </form>
            
          </div>
          
          <div className='h-[80%] w-[.12rem] hover:bg-sky-500 scale-105 duration-300   bg-purple-600'>
              
              </div>

          <div>
            <form action="" className=' bg-[rgba(0,0,0,0.5)]  border px-[6rem] py-2 shadow-2xl ml-[11vh] hover:scale-105 duration-300   '>

              

              <div className='flex flex-col items-center  text-white pb-4 pt-3'>
                <label htmlFor="email">Email</label>
                <input className='mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
invalid:border-pink-500 invalid:text-pink-600
focus:invalid:border-pink-500 focus:invalid:ring-pink-500 text-black' type="text" name='email' placeholder='xyz@gmail.com' autoComplete='off' required />
              </div>

            
              <div className='flex flex-col items-center  text-white pb-4'>
                <label htmlFor="password">password</label>
                <input className='mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
invalid:border-pink-500 invalid:text-pink-600
focus:invalid:border-pink-500 focus:invalid:ring-pink-500 text-black' type="password" name='password' autoComplete='off' required />
              </div>

              
              <div className='flex  pb-4 text-white justify-center'>
                
                <Link to='/sidebar' className='bg-purple-600 hover:bg-sky-500 text-white font-bold py-2 px-4 rounded-full'> Log in   </Link>
              </div>

            </form>
          </div>
        </div>
      </div>


    </div>

  )
}

export default login