import React from 'react'
import Navbar from './component/Navbar';
import Hero from './component/video';
import ServicePage from './component/ServicePage';

function App() {
  return (
    <>
    
    <div className='h-[50vh] w-screen bg-gradient-to-t from-indigo-500'>

        <Hero/>
      
      <div className=' fixed w-full h-full top-0 '>
      <Navbar/>
      </div>
     
    </div>

    <div className='w-full h-full  justify-center items-center  flex bg-gradient-to-b from-indigo-500'>
        <ServicePage/>
    </div>
    
    </>

  )
}

export default App
