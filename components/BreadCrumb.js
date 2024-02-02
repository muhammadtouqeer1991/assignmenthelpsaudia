import Link from 'next/link'
import React from 'react'

const BreadCrumb = ({title,para}) => {
return (
<>
<div className='py-7 bg-navcolor'>
    <div className="container mx-auto text-center">
        <h1 className='text-[45px] font-bold text-navactive'>{title}</h1>
        <hr className='w-[190px] mx-auto h-[1px] bg-navactive border-navactive' />
        <p className='w-[842px] mx-auto text-white py-4'>{para}</p>
        <div className='flex gap-4 pt-2 items-center justify-center'>
        <Link href="/order-now" className='py-3 px-8 bg-navactive rounded-[10px]'>Order Now</Link>
        <Link href="javascript:void(Tawk_API.toggle())" className='py-3 px-8 border-2 border-navactive text-white rounded-[10px]'>Live Chat</Link>
    </div>
    </div>
</div>

</>
)
}

export default BreadCrumb