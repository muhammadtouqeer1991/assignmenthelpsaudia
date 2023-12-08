import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import email from '../public/assets/email.svg';
import whatsapp from '../public/assets/whatsapp.svg';

const Getintouch = () => {
  return (
    <>
        <div>
        <h4 className='text-white font-bold text-[26px] pb-2'>Get In Touch</h4>
        <hr className='w-28 border-navactive'/>
        <nav className='flex flex-col mt-3 text-white gap-2'>
            <Link href="#" className='flex flex-col justify-center items-center'><Image src={email} alt="market" /> <p>Email</p> AssignmentHelpSaudia</Link>
            <Link href="#" className='flex flex-col justify-center items-center'><Image src={whatsapp} alt="market" /> <p>Whatsapp</p> +44 161 381 0000</Link>
        </nav>
        </div>
    </>
  )
}

export default Getintouch