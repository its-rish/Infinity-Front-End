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
import Login from "./component/login"
import Sidebar from '../src/component/adminpanel/Sidebar'
import Dashbord from "../src/component/adminpanel/AdminPages/Dashbord"
import Profile from "../src/component/adminpanel/AdminPages/Profile"
import History from "../src/component/adminpanel/AdminPages/History"
import Cart from '../src/component/Addtocart/cart'
import Blogs from '../src/component/Blogs'
import About from '../src/component/About'


function App() {
  return (
    <Router>
     
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/servicecomponent/Barbar' element={<Barbar />} />
        <Route path='/servicecomponent/Makeup' element={<Makeup/>} />
        <Route path='/servicecomponent/Plumber' element={<Plumber/>} />
        <Route path='/servicecomponent/Carpenter' element ={<Carpenter/>}/>
        <Route path='/servicecomponent/Electrician' element ={<Electrician/>}/>
        <Route path='/servicecomponent/Painter' element = {<Painter/>}/>
        <Route path='/component/Email' element = { <Email/> }/>
        <Route path='/component/login' element = {<Login/>}/>
        <Route path='/sidebar' element={<Sidebar/>}/>
        <Route path='/dashbord' element={<Dashbord/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/history' element={<History/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        
        
      </Routes>
      <Footer />
    </Router>



  )

}

export default App