import React from 'react'
import arrow from '../public/assets/arrow.svg';
import Image from 'next/image';
const Headerinfo = () => {
  return (
    <>
        <div className='w-[45%]'>
        <h1 className='text-[43px] font-bold leading-[62px] pb-2 text-white'>Boost your Grades with the Best Dissertation Help Services in Saudi Arabia</h1>
        <hr className='w-[295.002px] border-navactive mb-4 mt-1'/>
        <p className='pb-3 text-[16px] text-white'>Need cost-effective online assignment help services in Saudi Arabia? Call us! For a reasonable price, the subject experts in our team will provide plagiarism-free and customized assignment solutions for all subjects without delay.</p>
        <ul className='flex flex-col gap-3 text-white pt-2'>
          <li className='flex gap-2 items-center'><Image src={arrow} /> Raise Your Grades with Assignment Help Pro</li>
          <li className='flex gap-2 items-center'><Image src={arrow} /> Raise Your Grades with Assignment Help Pro</li>
          <li className='flex gap-2 items-center'><Image src={arrow} /> Raise Your Grades with Assignment Help Pro</li>
        </ul>
        </div>
    </>
  )
}

export default Headerinfo