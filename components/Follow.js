import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TiSocialInstagramCircular } from "react-icons/ti";
import { FaLinkedinIn } from "react-icons/fa";
import email from '../public/assets/email.svg';
import notgtp from '../public/assets/notgtp.png';
import paypal from '../public/assets/paypal.png';
import turniting from '../public/assets/turniting.png';
import copyleak from '../public/assets/copyleak.png';
import paYPAL2 from '../public/assets/paYPAL2.png';
import mastercard from '../public/assets/mastercard.png';
import bank from '../public/assets/bank.png';
import visa from '../public/assets/visa.png';
import clutch from '../public/assets/clutch.png';

import Link from 'next/link';
import Image from 'next/image';
const Follow = () => {
return (
  <>
      <div className='flex-[60%] pt-[2.4rem] justify-center flex flex-col items-center'>
      <div className='flex'>
       <nav className='flex mt-3 text-white gap-2 flex-wrap justify-center'>
            <Link href="#" className='flex flex-col justify-center items-center'><Image src={paYPAL2} alt="market" width={120} /></Link>
            <Link href="#" className='flex flex-col justify-center items-center'><Image src={mastercard} alt="market" width={120} /></Link>
            <Link href="#" className='flex flex-col justify-center items-center'><Image src={bank} alt="market" width={120} /></Link>
            <Link href="#" className='flex flex-col justify-center items-center'><Image src={visa} alt="market" width={120} /></Link>
        </nav>
        <nav className='flex mt-3 text-white gap-2 flex-1'>
            <Link href="#" className='flex flex-col justify-center items-center'><Image src={clutch} className='w-[100%]' alt="market" /></Link>
        </nav>
       </div>
      <h4 className='text-white font-normal text-center text-[16px] pt-[2rem]'>Follow Us On</h4>
      <nav className='flex  text-white gap-2 justify-center'>
          <Link href="https://www.facebook.com/AssignmentHelpKSA" className='flex flex-col justify-center items-center'><FaFacebook size={30} /></Link>
          <Link href="https://www.linkedin.com/company/assignment-help-saudi-arabia " className='flex flex-col justify-center items-center'><FaLinkedinIn size={30} /></Link>
          <Link href="#" className='flex flex-col justify-center items-center'><TiSocialInstagramCircular size={30} /></Link>
          <Link href="https://twitter.com/AssignmentKSA" className='flex flex-col justify-center items-center'><AiFillTwitterCircle size={30} /></Link>
      </nav>
      </div> 
  </>
)
}

export default Follow