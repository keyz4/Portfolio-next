import { NavBar } from '@/components/NavBar'
import Projects from '@/components/Projects'
import React from 'react'

function page() {
  return (
    <div className='pt-20'>
      <NavBar/>
      <Projects/>
    </div>
  )
}

export default page