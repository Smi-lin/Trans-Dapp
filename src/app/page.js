import { Navbar, Welcome } from '@/components'
import React from 'react'

const page = () => {
  return (
    <div className='min-h-screen'>
      <div className='gradient-bg-welcome'>
        <Navbar/>
        <Welcome/>
      </div>

    </div>
  )
}

export default page