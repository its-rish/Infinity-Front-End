import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from "./component/Navbar"
import Home from "./Home"
import Footer from "./component/footer"
import Barbar from './component/servicecomponent/Barbar'
import Makeup from "./component/servicecomponent/Makeup"
import Plumber from "./component/servicecomponent/Plumber"
import Carpenter from "./component/servicecomponent/Carpenter"
import Electrician from "./component/servicecomponent/Electrician"
import Painter from "./component/servicecomponent/Painter"
import Email from "./component/Email"




function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/servicecomponent/Barbar' element={<Barbar />} />
        <Route path='/servicecomponent/Makeup' element={<Makeup/>} />
        <Route path='/servicecomponent/Plumber' element={<Plumber/>} />
        <Route path='/servicecomponent/Carpenter' element ={<Carpenter/>}/>
        <Route path='/servicecomponent/Electrician' element ={<Electrician/>}/>
        <Route path='/servicecomponent/Painter' element = {<Painter/>}/>
        <Route path='/component/Email' element = { <Email/> }/>
      </Routes>
      <Footer />
    </Router>



  )

}

export default App