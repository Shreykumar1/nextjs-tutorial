'use client';
import React, { useState } from 'react'

const ClientPage = () => {
  const [count,setCount] = useState(0);
  return (
    <div>
      <h1 className='text-7xl font-bold'>{count}</h1>
      <button className='btn btn-primary mt-4' onClick={()=>setCount(count+1)} >INCREASE</button>
    </div>
  )
}

export default ClientPage