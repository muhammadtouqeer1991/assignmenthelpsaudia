import Link from 'next/link'
import React from 'react'

const Ctainfo = () => {
return (
<>
<div className='md:w-[450px] pl-5 md:pl-0'>
<h5 className='text-[14px] font-normal text-white'>Choose Your Experts to Help You Give  Exams Online </h5>
<hr className='w-[168.012px] border-2 border-navactive mt-2 mb-2' />
<h3 className='text-[26px] font-bold text-white'>Ace Your Online Exams & Score Top Grade</h3>
<div className='flex gap-4 pt-4 items-center pb-5 md:pb-0'>
    <Link href="#" className='py-3 px-8 bg-navactive rounded-[10px]'>Order Now</Link>
    <Link href="#" className='py-3 px-8 border-2 border-navactive text-white rounded-[10px]'>Live Chat</Link>
</div>
</div>
</>
)
}

export default Ctainfo