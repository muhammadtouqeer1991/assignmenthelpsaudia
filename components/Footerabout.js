import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
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

const Footerabout = () => {
  return (
    <>
        <div>
        <h4 className='text-white font-bold text-[26px] pb-2'>About</h4>
        <hr className='w-28 border-navactive'/>
        <p className='text-white pt-2'>Assignment Help Writers offers its assignment writing services purely for the help of students. Our  assignments are for reference purposes and help students</p>
       <div className='flex'>
       <nav className='flex mt-3 text-white gap-2 flex-wrap flex-[20%]'>
            <Link href="#" className='flex flex-col justify-center items-center'><Image src={paYPAL2} /></Link>
            <Link href="#" className='flex flex-col justify-center items-center'><Image src={mastercard} /></Link>
            <Link href="#" className='flex flex-col justify-center items-center'><Image src={bank} /></Link>
            <Link href="#" className='flex flex-col justify-center items-center'><Image src={visa} /></Link>
        </nav>
        <nav className='flex mt-3 text-white gap-2 flex-1'>
            <Link href="#" className='flex flex-col justify-center items-center'><Image src={clutch} className='w-[100%]' /></Link>
        </nav>
       </div>
        </div>
    </>
  )
}

export default Footerabout