import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import brandLogo from '../public/assets/brandLogo.svg';
import { BiHomeAlt,BiUserPin } from "react-icons/bi";
import { GrServices } from "react-icons/gr";
import { ImPriceTags } from "react-icons/im";
import { RiUserHeartLine } from "react-icons/ri";
import { FiUserCheck } from "react-icons/fi";
import { FaBars } from "react-icons/fa";

const Navitems = () => {
  return (
    <>  
        <Link href="/"><Image src={brandLogo} width={251} alt="market" /></Link>
        <FaBars className='md:hidden' size={30} color='#fff' />
        <nav className='md:flex hidden items-center border-b-[10px] border-navactive z-[1]'>
            <Link href="/" className='py-7 flex flex-col justify-center items-center bg-navactive px-[30px] rounded-tr-[18px] relative md:before:absolute before:w-[81px] before:h-[88%] before:bg-navactive before:skew-x-[17deg] before:top-[13px] before:bottom-0 before:right-[-14px] before:z-[-1] z-[1] '>
                <BiHomeAlt size={25} />
                Home
            </Link>
            <Link href="/about-us" className='py-7 flex flex-col justify-center items-center bg-navinactive px-[30px] rounded-tr-[18px] relative md:before:absolute before:w-[81px] before:h-[88%] before:bg-navinactive before:skew-x-[17deg] before:top-[13px] before:bottom-0 before:right-[-13px] before:z-[-1] z-[-1] text-white'>
                <BiUserPin size={25} color='#28D07E' />
                About
            </Link>
            <Link href="/services" className='py-7 flex flex-col justify-center items-center bg-navinactive px-[30px] rounded-tr-[18px] relative md:before:absolute before:w-[81px] before:h-[88%] before:bg-navinactive before:skew-x-[17deg] before:top-[13px] before:bottom-0 before:right-[-13px] before:z-[-1] z-[-1] text-white'>
                <GrServices size={25} color='#28D07E' />
                Services
            </Link>
            <Link href="/pricing" className='py-7 flex flex-col justify-center items-center bg-navinactive px-[30px] rounded-tr-[18px] relative md:before:absolute before:w-[81px] before:h-[88%] before:bg-navinactive before:skew-x-[17deg] before:top-[13px] before:bottom-0 before:right-[-13px] before:z-[-1] z-[-1] text-white'>
                <ImPriceTags size={25} color='#28D07E' />
                Pricing
            </Link>
            <Link href="/reviews" className='py-7 flex flex-col justify-center items-center bg-navinactive px-[30px] rounded-tr-[18px] relative md:before:absolute before:w-[81px] before:h-[88%] before:bg-navinactive before:skew-x-[17deg] before:top-[13px] before:bottom-0 before:right-[-13px] before:z-[-1] z-[-1] text-white'>
                <RiUserHeartLine size={25} color='#28D07E' />
                Reviews
            </Link>
            
        </nav>
        <nav className='md:flex hidden justify-end flex-1 gap-5 items-center'>
            <Link href="#" className='bg-navactive py-3 px-10 rounded font-normal text-white'>
                Order Now
            </Link>
            <Link href="#" className='flex gap-1 items-center border-navactive border-2 py-[9px] px-10 rounded text-white'>
            <FiUserCheck size={25} color='#28D07E' />
            Login
            </Link>
        </nav>
        
    </>
  )
}

export default Navitems