import React from 'react'
import email from '../public/assets/email.svg';
import whatsapp from '../public/assets/whatsapp.svg';
import Link from 'next/link';
import Image from 'next/image';

const Topinfo = () => {
return (
<>
    <div className='flex gap-6 items-center'>
        <Link href="#" className='md:flex md:flex-row hidden items-center text-white gap-2 font-normal text-[16px]'>
            <Image src={email} alt="market" />
            info@assignmenthelpsaudia.com
        </Link>
        <Link href="#" className='md:flex md:flex-row hidden items-center text-white gap-2 font-normal text-[16px]'>
            <Image src={whatsapp} alt="market" />
            +97 142 473 777
        </Link>
    </div>
</>
)
}

export default Topinfo