import React from 'react'
import Navbar from './component/Navbar';
import Hero from './component/video';
import ServicePage from './component/ServicePage';
import Offers from './component/Offers'
function App() {
  return (
    <>
    
    <div className='h-[50vh] w-screen bg-gradient-to-t from-gray-500 '>

        <Hero/>
      
      <div className=' fixed w-full h-full top-0 '>
      <Navbar/>
      </div>
     
    </div>

    <div className='w-full h-full  justify-center items-center  flex bg-gradient-to-b from-gray-500 '>
        <ServicePage/>
    </div>
    <div className=''>
      <Offers/>
    </div>
    
    </>

  )
}

export default App
