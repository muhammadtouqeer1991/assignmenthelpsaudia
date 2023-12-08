import React from 'react'
import arrow from '../public/assets/arrow.svg';
import Image from 'next/image';
import Link from 'next/link';
const Writerinfo = () => {
  return (
    <>
        <div className='w-[100%] py-10 '>
            <h6 className='text-[40px] text-white font-bold'>Assuring Excellent Results with our Exclusive Help With Dissertation Writing</h6>
            <hr className='w-[338.037px] border-navactive border-2 mt-3 mb-3' />
            <p className='text-[16px] text-white pt-2 pb-3'>You won’t be able to find many such platforms that guarantee you to gain brilliant results with their exclusive dissertation writing help services. However, we are here with our highly qualified writers offering the guarantee of attaining good grades with our services.You won’t be able to find many such platforms that guarantee you to gain brilliant results with their exclusive dissertation writing help services. However, we are here with our highly qualified writers offering the guarantee of attaining good grades with our services.</p>
            <ul className='flex flex-col gap-3 text-white pt-2'>
            <li className='flex gap-2 items-center'><Image src={arrow} alt="market" /> Raise Your Grades with Assignment Help Pro</li>
            <li className='flex gap-2 items-center'><Image src={arrow} alt="market" /> Raise Your Grades with Assignment Help Pro</li>
            <li className='flex gap-2 items-center'><Image src={arrow} alt="market" /> Raise Your Grades with Assignment Help Pro</li>
            </ul>
            <div className='flex gap-4 pt-4 items-center'>
                <Link href="#" className='py-3 px-8 bg-navactive rounded-[10px]'>Order Now</Link>
                <Link href="#" className='py-3 px-8 border-2 border-navactive text-white rounded-[10px]'>Live Chat</Link>
            </div>
        </div>
    </>
  )
}

export default Writerinfo