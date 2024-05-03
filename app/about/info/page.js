import Link from 'next/link'
import React from 'react'

const InfoPage = () => {
  return (
    <div>
      <h1 className='text-7xl'>Info Page</h1>
      <Link href='/' className='text-2xl' >Home Page</Link>
      <Link href='/about' className='text-2xl' >About Page</Link>
    </div>
  )
}

export default InfoPage