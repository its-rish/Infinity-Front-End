import React from 'react'
import Navbar from './Navbar'
import {Link} from 'react-router-dom'
import Ritwik from '../assets/Ritwik.jpeg'
import Ansh from '../assets/Ansh.jpeg'
import Soumyadip from '../assets/soumyadip.jpeg'
import Ravi from '../assets/Ravi.jpg'
import Bgabout from '../assets/aboutbg.jpg'
function About() {
  return (
    <>

      <Navbar />
      <div className=' w-screen absolute top-0  h-[150vh] overflow-hidden -z-10'>

        <img className='h-[160vh]  w-full overflow-hidden animate-trans-right  ' src={Bgabout} alt="" />
      </div>
      <div className='w-screen   h-[150vh]'>
        <div className=' w-screen  h-[150vh] '>
          <div className='flex flex-col items-center mt-[12vh]'>
            <h1 className='p-4 font-bold text-4xl text-white'>Join our Team.</h1>
            <p className='p-[10rem] pt-0 pb-4 text-white'>Welcome to Infinite, your one-stop solution for all your home service needs including barbering, carpentry, plumbing, home painting, and electrical services.</p>
            <p className='text-white'>Helps us on our quest to make good software even better</p>
            <Link to='/component/Email' className='mt-10 p-5 rounded-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500'>Work With Us</Link>
          </div>
          <div className='flex flex-col '>
            <div className='flex flex-row justify-between pt-6 p-[15%] pb-0'>
              <span className='flex flex-col items-center text-white font-bold hover:scale-105 duration-300 hover:text-yellow-500 '><img className='h-[10rem] w-[10rem] rounded-full ' src={Ritwik} alt="img" /> Ritwik Pal (Front-End Developer)</span>
              <span className='flex flex-col items-center text-white font-bold hover:scale-105 duration-300 hover:text-yellow-500 '><img className='h-[10rem] w-[10rem] rounded-full ' src={Ansh} alt="img" />Ashish Mishra (Back-End Developer)</span>
            </div>
            <div className='flex justify-evenly pt-5 '>
              <span className='flex flex-col items-center text-white font-bold hover:scale-105 duration-300 hover:text-yellow-500 '> <img className='h-[10rem] w-[10rem] rounded-full ' src={Soumyadip} alt="img" />Soumyadip Roy (UI/UX Developer)</span>
              <span className='flex flex-col items-center text-white font-bold hover:scale-105 duration-300 hover:text-yellow-500 '><img className='h-[10rem] w-[10rem] rounded-full ' src={Ravi} alt="img" />Ravi Anshuman (Tester)</span>
            </div>
          </div>
          <div className='text-white flex items-center justify-center pt-10 pb-0 p-[20rem] hover:text-yellow-300'>
            <p className=''>
              Our team of experienced professionals is dedicated to providing you with the highest quality service in the industry. We understand the importance of a well-maintained home, and we are committed to helping you maintain your home's beauty and functionality.

              At Infinite, we pride ourselves on our exceptional customer service. We understand that your time is valuable, which is why we offer convenient scheduling and on-time arrivals. Our team of experts will work with you to identify your needs and provide you with the best solution possible.

              Our barbers are skilled in a variety of styles and techniques, ensuring that you receive the perfect haircut every time. Our carpenters are trained in all types of woodwork, including furniture building and repair. Our plumbers are knowledgeable in all types of plumbing services, including repairs and installations. Our home painters are experts in color and design and will transform your living space into a work of art. And our electricians are trained to handle all your electrical needs, from installations to repairs.
            </p>
          </div>
        </div>

      </div>

    </>
  )
}

export default About