import React from 'react'
import Navbar from './component/Navbar';
import Bgvideo from './component/Video';
import serviceicon from './component/Serviceicon'

function App() {
  return (
    
    <>
      <div className='  h-screen w-screen bg-gradient-to-t from-indigo-500'>
      
      <div className='bg-fixed'>
      <Bgvideo/>
      </div>
      <div className=' absolute w-full h-full top-0 '>
      <Navbar/>
      </div>
      
    </div>
   
    </>
  
  )
}

export default App
