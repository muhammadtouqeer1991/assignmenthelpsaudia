import React from 'react'
import Topinfo from './Topinfo'
import Topsocial from './Topsocial'

const Topbar = () => {
  return (
    <>
       <div className='bg-topbarcolor relative overflow-hidden z-0 md:py-0 py-3'>
        <div className='container mx-auto flex justify-between md:items-center flex-col md:flex-row gap-2 md:gap-0'>
          <Topinfo />
          <Topsocial />
        </div>
       </div>
    </>
  )
}

export default Topbar