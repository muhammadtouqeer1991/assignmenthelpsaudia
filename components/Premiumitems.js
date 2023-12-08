import React from 'react'
import leftarrow from '../public/assets/leftarrow.svg';
import rightarrow from '../public/assets/rightarrow.svg';
import assignemnt from '../public/assets/assignemnt.svg';
import essay from '../public/assets/essay.svg';
import dissertation from '../public/assets/dissertation.svg';
import homework from '../public/assets/homework.svg';
import Image from 'next/image';
import Link from 'next/link';
import { LuCopyPlus } from "react-icons/lu";

const Premiumitems = () => {
  return (
    <>
    <div className='md:w-[1500px] mx-auto flex-col md:flex-row flex gap-7 items-center'>
        <div className='text-center border-2 border-navactive py-16 px-5 rounded-[10px]'>
            <h6 className='text-[40px] text-left pb-8 text-white font-semibold leading-[44px]'>Our Premium Services</h6>
            <div className='flex justify-center items-center gap-5'>
            <Link href="#"><Image src={leftarrow} alt="market" /></Link>
            <Link href="#"><Image src={rightarrow} alt="market" /></Link>
            </div>
        </div>
        <div className='flex flex-col justify-center items-center text-center border-2 border-navactive py-6 px-5 rounded-[10px]' style={{background:'radial-gradient(50% 50% at 50% 50%, rgba(40, 208, 126, 0.40) 0%, rgba(40, 208, 126, 0.30) 100%)'}}>
            <Image src={assignemnt} alt="market" />
            <h5 className='text-[26px] text-white font-semibold pt-2 pb-1'>Assignments</h5>
            <p className='text-[14px] leading-normal text-white'>Troubling assignments every day? Don’t let yourself down with too many assignments on hand and let us conquer your Assignment troubles for you.</p>
           <div className='flex justify-end items-end w-full'>
           <Link href="#" className='mt-5 flex items-center gap-2 text-white'>Read more <LuCopyPlus /></Link>
           </div>
        </div>
        <div className='flex flex-col justify-center items-center text-center border-2 border-navactive py-6 px-5 rounded-[10px]'>
            <Image src={essay} alt="market" />
            <h5 className='text-[26px] text-white font-semibold pt-2 pb-1'>Essays</h5>
            <p className='text-[14px] leading-normal text-white'>Crafting your essays to perfection is what we do best! With our essay experts on board, we can compose & customize any essay on demand.</p>
            <div className='flex justify-end items-end w-full'>
           <Link href="#" className='mt-5 flex items-center gap-2 text-white'>Read more <LuCopyPlus color='#28D07E' /></Link>
           </div>
        </div>
        <div className='flex flex-col justify-center items-center text-center border-2 border-navactive py-6 px-5 rounded-[10px]'>
            <Image src={dissertation} alt="market" />
            <h5 className='text-[26px] text-white font-semibold pt-2 pb-1'>Dissertations</h5>
            <p className='text-[14px] leading-normal text-white'>Troubling assignments every day? Don’t let yourself down with too many assignments on hand and let us conquer your Assignment troubles for you.</p>
            <div className='flex justify-end items-end w-full'>
           <Link href="#" className='mt-5 flex items-center gap-2 text-white'>Read more <LuCopyPlus color='#28D07E'  /></Link>
           </div>
        </div>
        <div className='flex flex-col justify-center items-center text-center border-2 border-navactive py-6 px-5 rounded-[10px]'>
            <Image src={homework} alt="market" />
            <h5 className='text-[26px] text-white font-semibold pt-2 pb-1'>Homework</h5>
            <p className='text-[14px] leading-normal text-white'>Troubling assignments every day? Don’t let yourself down with too many assignments on hand and let us conquer your Assignment troubles for you.</p>
            <div className='flex justify-end items-end w-full'>
           <Link href="#" className='mt-5 flex items-center gap-2 text-white'>Read more <LuCopyPlus color='#28D07E'  /></Link>
           </div>
        </div>
    </div> 
    </>
  )
}

export default Premiumitems