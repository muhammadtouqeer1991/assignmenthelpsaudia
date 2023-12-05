import React from 'react'
import email from '../public/assets/email.svg';
import whatsapp from '../public/assets/whatsapp.svg';
import Link from 'next/link';
import Image from 'next/image';

const Topinfo = () => {
  return (
    <>
        <div className='flex gap-6'>
            <Link href="#" className='flex items-center text-white gap-2 font-normal text-[18px]'>
                <Image src={email} />
                AssignmentHelpSaudia
            </Link>
            <Link href="#" className='flex items-center text-white gap-2 font-normal text-[18px]'>
                <Image src={whatsapp} />
                +44 161 381 0000
            </Link>
        </div>
    </>
  )
}

export default Topinfo