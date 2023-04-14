import React from 'react'
import Navbar from './component/Navbar';
import Hero from './component/video';

function App() {
  return (
    <div className='h-screen w-screen bg-gradient-to-t from-indigo-500'>
      <Navbar/>
      <Hero/>
    </div>
  )
}

export default App
