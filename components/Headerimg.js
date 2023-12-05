import React from 'react'
import headerGirl from '../public/assets/headerGirl.png';
import Image from 'next/image';
const Headerimg = () => {
  return (
    <>
     <div className='w-[20%]'>
      <Image src={headerGirl} className='max-w-[524px] relative right-[160px] z-[-1]' />
     </div>
    </>
  )
}

export default Headerimg