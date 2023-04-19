import React from 'react'
import Navbar from './component/Navbar';
import Bgvideo from './component/Video';
import serviceicon from './component/Serviceicon'

function App() {
  return (
    
      <div className=' absolute h-screen w-screen bg-gradient-to-t from-indigo-500'>
      
      
      <div className=' absolute w-full h-full top-0 '>
      <Navbar/>
      </div>
      <div >
      <Bgvideo/>
      </div>
      <div className='h-[40vh] w-[70%] items-center justify-center  bg-white   '>
      <serviceicon/>
      </div>
      
    </div>
   
    
  
  )
}

export default App
