import Link from 'next/link';
import React from 'react'
import { FaFacebookSquare , FaInstagramSquare , FaLinkedin , FaPinterestSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Topsocial = () => {
  return (
    <>
        <div className='flex'>
            <Link href="#" className='py-3 px-4 bg-[#527BDA]'>
                <FaFacebookSquare fill='#fff' size={20} />
            </Link>
            <Link href="#" className='py-3 px-4 bg-[#000]'>
                <FaSquareXTwitter fill='#fff' size={20} />
            </Link>
            <Link href="#" className='py-3 px-4 bg-[#0086CF]'>
                <FaLinkedin fill='#fff' size={20} />
            </Link>
            <Link href="#" className='py-3 px-4 bg-[#F95151]'>
                <FaInstagramSquare fill='#fff' size={20} />
            </Link>
            <Link href="#" className='py-3 px-4 bg-[#EF0014]'>
                <FaPinterestSquare  fill='#fff' size={20} />
            </Link>
        </div>
    </>
  )
}

export default Topsocial