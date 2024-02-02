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
        <div className='w-[80%]'>
        <h4 className='text-white font-bold text-[26px] pb-2'>About</h4>
        <hr className='w-28 border-navactive'/>
        <p className='text-white pt-2'>Assignment Help Saudi Arabia helps students with their assignment projects. By assigning expert and related academic writers, we help them create high quality and genuine assignments. We prohibit the use of our samples to violate any academic integrity rule and encourage the use of our samples for learning and guidance only. </p>
       <div className='flex'>
       <nav className='flex mt-3 text-white gap-2 flex-wrap flex-[20%]'>
            <Link href="#" className='flex flex-col justify-center items-center'><Image src={paYPAL2} alt="market" width={120} /></Link>
            <Link href="#" className='flex flex-col justify-center items-center'><Image src={mastercard} alt="market" width={120} /></Link>
            <Link href="#" className='flex flex-col justify-center items-center'><Image src={bank} alt="market" width={120} /></Link>
            <Link href="#" className='flex flex-col justify-center items-center'><Image src={visa} alt="market" width={120} /></Link>
        </nav>
        <nav className='flex mt-3 text-white gap-2 flex-1'>
            <Link href="#" className='flex flex-col justify-center items-center'><Image src={clutch} className='w-[100%]' alt="market" /></Link>
        </nav>
       </div>
        </div>
    </>
  )
}

export default Footerabout