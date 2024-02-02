import React from 'react'
import Quicklinks from './Quicklinks'
import Getintouch from './Getintouch'
import Follow from './Follow'
import Footerabout from './Footerabout'

const Footer = () => {
  return (
    <>
      <div className='bg-navcolor py-16'>
        <div className="container mx-auto flex md:flex-row flex-col justify-between gap-6">
          <Quicklinks />
          <Getintouch />
          <Follow />
          <Footerabout />
        </div>
      </div>
      <div className='flex justify-center items-center bg-navactive py-2 pb-2'>
        <p>Copyright © 2024 Assignment Help Sa | All Rights Reserved</p>
      </div>
    </>
  )
}

export default Footer