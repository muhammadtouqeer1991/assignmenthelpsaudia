import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TiSocialInstagramCircular } from "react-icons/ti";
import { FaLinkedinIn } from "react-icons/fa";
import brandLogo from '../public/assets/brandLogo.svg';
import Link from 'next/link';
import Image from 'next/image';
const Follow = () => {
  return (
    <>
        <div className='flex-[40%] pt-[2.4rem] justify-center flex flex-col items-center'>
        <Link href="/"><Image src={brandLogo} width={251} alt="market" /></Link>
        <h4 className='text-white font-normal text-center text-[16px] pt-[2rem]'>Follow Us On</h4>
        <nav className='flex  text-white gap-2 justify-center'>
            <Link href="#" className='flex flex-col justify-center items-center'><FaFacebook size={30} /></Link>
            <Link href="#" className='flex flex-col justify-center items-center'><FaLinkedinIn size={30} /></Link>
            <Link href="#" className='flex flex-col justify-center items-center'><TiSocialInstagramCircular size={30} /></Link>
            <Link href="#" className='flex flex-col justify-center items-center'><AiFillTwitterCircle size={30} /></Link>
        </nav>
        </div> 
    </>
  )
}

export default Follow