import React from 'react'
import {FaPowerOff,FaSmileWink,FaTrashAlt,FaTv} from 'react-icons/fa'
import Adminnavbar from './Adminnavbar'
import { NavLink } from 'react-router-dom'


function Sidebar() {
  const items=[{name:"Dashbord",
  icon:<FaTv/>,
  path:"/dashbord"
},
  {name:"History",
  icon:<FaTrashAlt/>,
  path:"/history"

},
  {name:"Profile",
  icon:<FaSmileWink/>,
  path:"/profile"


},
  {name:"log out",
  icon:<FaPowerOff/>,
  path:"/logout"
}
  ]
  return (
   <div>
    <div> 
      <Adminnavbar/>
    </div>
    
    <div>
   {
    items.map((item,index)=>(
      <NavLink to={item.path} key={index}>
        <div>{items.name}</div>
      </NavLink>
    ))
   }
    </div>
    

   </div>
  );
};

export default Sidebar