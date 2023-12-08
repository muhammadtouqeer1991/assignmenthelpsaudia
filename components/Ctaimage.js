import Image from 'next/image'
import React from 'react'
import aceOnline from '../public/assets/aceOnline.webp';

const Ctaimage = () => {
  return (
    <>
        <Image src={aceOnline} alt="market" className='md:flex hidden' />
    </>
  )
}

export default Ctaimage