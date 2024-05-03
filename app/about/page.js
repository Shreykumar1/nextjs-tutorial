import Link from 'next/link'
import React from 'react'

const AboutPage = () => {
  return (
    <div>
      <h1 className='text-7xl'>About Page</h1>
      <Link href='/' className='text-2xl' >Home Page</Link>
      <Link href='/about/info' className='text-2xl' >Info Page</Link>
    </div>
  )
}

export default AboutPage