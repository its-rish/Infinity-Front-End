import React from 'react'
import Hero from './component/video';
import ServicePage from './component/ServicePage';
import Offers from './component/Offers';
import Email from './component/Email';
import Topservice from "./component/Topservice";
import Navbar from "./component/Navbar"
function Home() {
    return (
        <div>

            
            <Navbar/>
            <Hero />

            <ServicePage />
           
            <Offers />
            
            <Topservice/>

            <Email />


        </div>

    )
}

export default Home