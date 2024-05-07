import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import brandLogo from '../public/assets/brandLogo.webp';
const Footerabout = () => {
  return (
    <>
        <div className='w-[80%]'>
        {/* <h4 className='text-white font-bold text-[26px] pb-2'>About</h4> */}
        <Link href="/"><Image src={brandLogo} width={251} alt="market" /></Link>
        {/* <hr className='w-28 border-navactive'/> */}
        <p className='text-white pt-2'>Assignment Help Saudi Arabia helps students with their assignment projects. By assigning expert and related academic writers, we help them create high quality and genuine assignments. We prohibit the use of our samples to violate any academic integrity rule and encourage the use of our samples for learning and guidance only. </p>
       
        </div>
    </>
  )
}

export default Footerabout