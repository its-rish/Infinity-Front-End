import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from "./component/Navbar"
import Home from "./Home"
import Footer from "./component/footer"



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
       <Route path='/' element= {<Home/>}/>

      </Routes>
      <Footer/>
    </Router>



  )

}

export default App