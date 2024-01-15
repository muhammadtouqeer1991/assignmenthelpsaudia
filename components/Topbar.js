import React from 'react'
import Topinfo from './Topinfo'
import Topsocial from './Topsocial'

const Topbar = () => {
  return (
    <>
       <div className='bg-topbarcolor relative overflow-hidden z-0'>
        <div className='container mx-auto flex justify-between md:items-center flex-col md:flex-row gap-2 md:gap-0'>
          <Topinfo />
          <Topsocial />
        </div>
        {/* <div className='w-[430px] h-[90px] md:flex hidden absolute top-[-15px] right-0 bg-navactive rounded-tl-full z-[-1]'></div> */}
       </div>
    </>
  )
}

export default Topbar