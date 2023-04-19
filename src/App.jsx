import React from 'react'
import Navbar from './component/Navbar';
import Hero from './component/video';

function App() {
  return (
    <div className='h-screen w-screen bg-gradient-to-t from-indigo-500'>
      
      <div className='h-[100vh] w-full object-cover top-0 '>
      <Hero/>
      </div>
      <div className=' absolute w-full h-full top-0 '>
      <Navbar/>
      </div>
      
      
      
    </div>
  )
}

export default App
