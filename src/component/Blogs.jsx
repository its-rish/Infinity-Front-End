import React from 'react'
import Navbar from './Navbar'
import Blogscomponent from './Blogscomponent'
import women from '../assets/women.jpg'
import Books from '../assets/books.jpg'

function Blogs() {
  return (
    <>
      <Navbar />
      <div className=' w-screen h-full bg-slate-300 flex flex-col mt-[5rem]  '>

      <Blogscomponent img={women} name='The Ultimate Reading And Prodcast List For Women in Media'/>
      <Blogscomponent img={Books} name='The Ultimate Reading And Prodcast List For Women in Media'/>  
      </div>

    </>
  )
}

export default Blogs