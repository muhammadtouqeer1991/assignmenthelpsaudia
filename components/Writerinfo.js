import React from 'react'
import arrow from '../public/assets/arrow.svg';
import Image from 'next/image';
import Link from 'next/link';
const Writerinfo = ({AboutwritersContent}) => {
return (
<>
<div className='w-[100%] py-10 px-10 md:px-0'>
<h6 className='text-[40px] text-white font-bold'>{AboutwritersContent == null || AboutwritersContent == '' || AboutwritersContent == undefined ? 'Assuring Excellent Results with our Exclusive Help With Dissertation Writing' : AboutwritersContent.heading }</h6>
<hr className='md:w-[338.037px] border-navactive border-2 mt-3 mb-3' />
<p className='text-[16px] text-white pt-2 pb-3'>{AboutwritersContent == null || AboutwritersContent == '' || AboutwritersContent == undefined ? 'You won’t be able to find many such platforms that guarantee you to gain brilliant results with their exclusive dissertation writing help services. However, we are here with our highly qualified writers offering the guarantee of attaining good grades with our services.You won’t be able to find many such platforms that guarantee you to gain brilliant results with their exclusive dissertation writing help services. However, we are here with our highly qualified writers offering the guarantee of attaining good grades with our services.' : AboutwritersContent.para }</p>
{AboutwritersContent == null || AboutwritersContent == '' || AboutwritersContent == undefined ? <ul className='flex flex-col gap-3 text-white pt-2'>
<li className='flex gap-2 items-center'><Image src={arrow} alt="market" /> Raise Your Grades with Assignment Help Pro</li>
<li className='flex gap-2 items-center'><Image src={arrow} alt="market" /> Raise Your Grades with Assignment Help Pro</li>
<li className='flex gap-2 items-center'><Image src={arrow} alt="market" /> Raise Your Grades with Assignment Help Pro</li>
</ul> : 
<ul className='flex flex-col gap-3 text-white pt-2'>
{
AboutwritersContent.option.map((item,key) => {
return (
<li className='flex gap-2 items-center' key={key+1}><Image src={arrow} alt="market" /> {item.title}</li>
)
})
}

</ul>  }

<div className='flex gap-4 pt-4 items-center'>
<Link href="#" className='py-3 px-8 bg-navactive rounded-[10px]'>Order Now</Link>
<Link href="#" className='py-3 px-8 border-2 border-navactive text-white rounded-[10px]'>Live Chat</Link>
</div>
</div>
</>
)
}

export default Writerinfo