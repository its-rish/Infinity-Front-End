import React from 'react'
import Hero from './component/video';
import ServicePage from './component/ServicePage';
import Offers from './component/Offers';
import Email from './component/Email';
import Topservice from "./component/Topservice";
function Home() {
    return (
        <>

            <div className='h-[50vh]  w-screen bg-gradient-to-t from-gray-500 '>

                <Hero />

            </div>

            <div className='w-full h-full  justify-center items-center  flex bg-gradient-to-b from-gray-500 '>
                <ServicePage />
            </div>
            <div className='w-full h-full'>
                <Offers />
            </div>
            
            <Topservice/>
            <Email />


        </>

    )
}

export default Home