import React from 'react'
import elctriclogo from '../assets/electrician.png'
import barber from '../assets/barber.png'
import makeup from '../assets/makeup-artist.png'
import plumber from '../assets/plumber.png'
import carpenterlogo from '../assets/carpenter.png'
import painter from '../assets/painter.png'

function ServicePage() {
  return (
    <div className='h-[40vh] w-[70%] bg-slate-300 -mt-10  drop-shadow-md hover:drop-shadow-xl'>
       <div className='w-full h-full items-center justify-items-center grid gap-4 grid-cols-3 '>
        <div>
          <a  href="#"><img className='h-12  sepia hover:sepia-0' src={barber} alt="https://www.flaticon.com/free-icon/barber_10221682?term=barber&page=1&position=2&origin=search&related_id=10221682" />Barber</a>
        </div>
        <div>
          <a  href="#"><img className='h-12 ml-6 sepia hover:sepia-0' src={makeup} alt="https://www.flaticon.com/free-icon/makeup-artist_8734935?term=makeup+artist&page=1&position=1&origin=search&related_id=8734935" />Makeup-Artist</a>
        </div>
        <div>
          <a href="#"><img className='h-12 ml-1 sepia hover:sepia-0 ' src={plumber} alt="https://www.flaticon.com/free-icon/plumber_2365110?term=plumbers&page=1&position=8&origin=search&related_id=2365110" />plumber</a>
        </div>
        <div>
          <a href="#"><img className='h-12 ml-2 sepia hover:sepia-0' src={carpenterlogo} alt="https://www.flaticon.com/free-icon/carpenter_5188679?term=carpenter&page=1&position=27&origin=search&related_id=5188679" />Carpenter</a>
        </div>
        <div>
          <a href="#"><img className='h-12 ml-4 sepia hover:sepia-0' src={elctriclogo} alt="https://www.flaticon.com/free-icon/electrician_8734819?term=electrician&page=1&position=4&origin=search&related_id=8734819" />Electricain</a>
        </div>
        <div>
          <a href="#"><img className='h-12  sepia hover:sepia-0' src={painter} alt="https://www.flaticon.com/free-icon/painter_2365020?term=painter&page=1&position=4&origin=search&related_id=2365020" />Painter</a>
        </div>
       
       </div>
    </div>
  )
}

export default ServicePage