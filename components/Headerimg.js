import React from 'react'
import headerGirl from '../public/assets/headerGirl.png';
import Image from 'next/image';
const Headerimg = () => {
  return (
    <>
     <div className='md:w-[20%] hidden md:flex'>
      <Image src={headerGirl} className='md:max-w-[524px] relative md:right-[160px] z-[-1]' alt="market" />
     </div>
    </>
  )
}

export default Headerimg