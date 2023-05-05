import React from 'react'
import elctriclogo from '../assets/electrician.png'
import barber from '../assets/barber.png'
import makeup from '../assets/makeup-artist.png'
import plumber from '../assets/plumber.png'
import carpenterlogo from '../assets/carpenter.png'
import painter from '../assets/painter.png'
import { Link } from 'react-router-dom'



function ServicePage() {
  return (
   
     <div className='h-[40vh] w-screen  bg-slate-300 -mt-10  drop-shadow-md hover:drop-shadow-xl max-w-[1240px] mx-auto'>
      <div className='w-full h-full items-center justify-items-center grid gap-4 grid-cols-3 '>
        <div>
          <Link to="./servicecomponent/Barbar"><img className='h-12  sepia hover:sepia-0' src={barber} alt="https://www.flaticon.com/free-icon/barber_10221682?term=barber&page=1&position=2&origin=search&related_id=10221682" />Barber</Link>
        </div>
        <div>
          <Link to="./servicecomponent/Makeup"><img className='h-12 ml-6 sepia hover:sepia-0' src={makeup} alt="https://www.flaticon.com/free-icon/makeup-artist_8734935?term=makeup+artist&page=1&position=1&origin=search&related_id=8734935" />Makeup-Artist</Link>
        </div>
        <div>
          <Link to="./servicecomponent/Plumber"><img className='h-12 ml-1 sepia hover:sepia-0 ' src={plumber} alt="https://www.flaticon.com/free-icon/plumber_2365110?term=plumbers&page=1&position=8&origin=search&related_id=2365110" />plumber</Link>
        </div>
        <div>
          <Link to="./servicecomponent/Carpenter"><img className='h-12 ml-2 sepia hover:sepia-0' src={carpenterlogo} alt="https://www.flaticon.com/free-icon/carpenter_5188679?term=carpenter&page=1&position=27&origin=search&related_id=5188679" />Carpenter</Link>
        </div>
        <div>
          <Link to="./servicecomponent/Electrician"><img className='h-12 ml-4 sepia hover:sepia-0' src={elctriclogo} alt="https://www.flaticon.com/free-icon/electrician_8734819?term=electrician&page=1&position=4&origin=search&related_id=8734819" />Electrician</Link>
        </div>
        <div>
          <Link to="./servicecomponent/Painter"><img className='h-12  sepia hover:sepia-0' src={painter} alt="https://www.flaticon.com/free-icon/painter_2365020?term=painter&page=1&position=4&origin=search&related_id=2365020" />Painter</Link>
        </div>

      </div>
    </div>
   
  )
}

export default ServicePage