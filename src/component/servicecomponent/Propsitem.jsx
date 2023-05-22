import React,{useState} from 'react'

export const itemsprops=(props)=>{
  const [value,setvalue]=useState(0);
  const increase=()=>{
   setvalue(value + 1);
  }
  const decrease=()=>{
    value>1 ?  setvalue(value - 1) : setvalue(1);
  }
   return (
    <div >
    <div className='flex'>
    <div className='items-center flex'>{props.icon}</div>
     <div>
       <p>{props.navname}</p>
     </div>
    </div>
    <h2 className='text-xl font-bold'>{props.name}</h2>
     <div className='flex flex-col'>
      
       <div className='flex'>
       <div className='flex items-center pr-1'>{props.nameicon}</div>
         <h3>{props.users}</h3>
       </div>
       <div>
       <h3>{props.money}</h3>
       </div>
     </div>
      
      <div className='flex  flex-col'>
      <div className='flex flex-row pt-4 pb-4'>
     
      <button className='border-2 w-5 mr-5 font-bold flex justify-center ' onClick={decrease}>-</button>
      <span className=''>{value}</span>
      <button className='border-2 w-5 ml-5 font-bold flex justify-center ' onClick={increase}>+</button>
      </div>
      <div className='pb-4'>
        <button className='bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500'>ADD TO CART</button>
      </div>
      
      </div>
      <hr/>
      

   </div>
   );
  }

export default itemsprops