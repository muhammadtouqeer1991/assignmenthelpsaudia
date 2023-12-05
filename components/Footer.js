import React from 'react'
import Quicklinks from './Quicklinks'
import Getintouch from './Getintouch'
import Follow from './Follow'
import Footerabout from './Footerabout'

const Footer = () => {
  return (
    <>
      <div className='bg-navcolor py-16'>
        <div className="container mx-auto flex justify-between gap-6">
          <Quicklinks />
          <Getintouch />
          <Follow />
          <Footerabout />
        </div>
      </div>
    </>
  )
}

export default Footer