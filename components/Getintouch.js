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
      <Link href="mailto:info@assignmenthelp.sa.com" className='flex flex-col justify-center items-center'><Image src={email} alt="market" /> <p>Email</p> info@assignmenthelp.sa.com</Link>
      <Link href="https://wa.me/+966557355156" className='flex flex-col justify-center items-center'><Image src={whatsapp} alt="market" /> <p>Whatsapp</p> +966 55 735 5156</Link>
  </nav>
  </div>
</>
)
}

export default Getintouch