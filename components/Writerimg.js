import React from 'react'
import assuringImg from '../public/assets/assuringImg.png';
import Image from 'next/image';

const Writerimg = () => {
  return (
    <>
        <div className='w-[80%] relative left-[-7rem]'>
        <Image src={assuringImg} alt="market" />
        </div>
    </>
  )
}

export default Writerimg