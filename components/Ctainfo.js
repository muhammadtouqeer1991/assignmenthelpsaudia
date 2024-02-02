import Link from 'next/link'
import React from 'react'

const Ctainfo = ({CtaContent}) => {
return (
<>
<div className='md:w-[450px] pl-5 md:pl-0'>
<h5 className='text-[14px] font-normal text-white'>{CtaContent == null || CtaContent == '' || CtaContent == undefined ? 'Choose Your Experts to Help You Give  Exams Online ' : CtaContent.heading}</h5>
<hr className='w-[168.012px] border-2 border-navactive mt-2 mb-2' />
<h3 className='text-[26px] font-bold text-white'>{CtaContent == null || CtaContent == '' || CtaContent == undefined ? 'Ace Your Online Exams & Score Top Grade' : CtaContent.subheading}</h3>
<div className='flex gap-4 pt-4 items-center pb-5 md:pb-0'>
    <Link href="/order-now" className='py-3 px-8 bg-navactive rounded-[10px]'>Order Now</Link>
    <Link href="javascript:void(Tawk_API.toggle())" className='py-3 px-8 border-2 border-navactive text-white rounded-[10px]'>Live Chat</Link>
</div>
</div>
</>
)
}

export default Ctainfo