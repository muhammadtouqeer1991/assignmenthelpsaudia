import Link from 'next/link'
import React from 'react'

const Quicklinks = () => {
  return (
    <>
        <div className='flex-[30%]'>
          <h4 className='text-white font-bold text-[26px] pb-2'>Quick Links</h4>
          <hr className='w-28 border-navactive'/>
          <nav className='flex flex-col mt-3 text-white gap-2'>
              <Link href="/">Home</Link>
              <Link href="/blog/">Blog</Link>
              <Link href="/topics">Topics</Link>
              <Link href="/privacy-policy/">Privacy Policy</Link>
              <Link href="/term-and-condition/">Term & Conditions</Link>
              <Link href="/refund-policy/">Refund Policy</Link>
          </nav>
        </div>
    </>
  )
}

export default Quicklinks