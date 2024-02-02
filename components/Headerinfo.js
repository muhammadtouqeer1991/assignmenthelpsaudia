import React from 'react'
import arrow from '../public/assets/arrow.svg';
import Image from 'next/image';
import Link from 'next/link';
const Headerinfo = ({HeaderContent}) => {
return (
<>
<div className='md:w-[45%] md:pb-0 pb-10 pl-5 md:pl-0'>
<h1 className='text-[42px] font-bold leading-[62px] pb-2 text-white'>{HeaderContent == null || HeaderContent == '' || HeaderContent == undefined ? 'Boost your Grades with the Best Dissertation Help Services in Saudi Arabia' : HeaderContent.heading}</h1>
<hr className='w-[295.002px] border-navactive mb-4 mt-1'/>
<p className='pb-3 text-[16px] text-white'>{HeaderContent == null || HeaderContent == '' || HeaderContent == undefined ? 'Need cost-effective online assignment help services in Saudi Arabia? Call us! For a reasonable price, the subject experts in our team will provide plagiarism-free and customized assignment solutions for all subjects without delay.' : HeaderContent.para }</p>
{HeaderContent == null || HeaderContent == '' || HeaderContent == undefined ?  <ul className='flex flex-col gap-3 text-white pt-2'>
<li className='flex gap-2 items-center'><Image src={arrow} alt="market" /> Raise Your Grades with Assignment Help Pro</li>
<li className='flex gap-2 items-center'><Image src={arrow} alt="market" /> Raise Your Grades with Assignment Help Pro</li>
<li className='flex gap-2 items-center'><Image src={arrow} alt="market" /> Raise Your Grades with Assignment Help Pro</li>
</ul> :  
<ul className='flex flex-col gap-3 text-white pt-2'>
{
HeaderContent.option.map((item,key)=>{
  return (
    <li className='flex gap-2 items-center' key={key+1}><Image src={arrow} alt="market" /> {item.title}</li>
  )
})
}

</ul> }

<div className='flex gap-4 pt-4 items-center'>
    <Link href="/order-now" className='py-3 px-8 bg-navactive rounded-[10px]'>Order Now</Link>
    <Link href="javascript:void(Tawk_API.toggle())" className='py-3 px-8 border-2 border-navactive text-white rounded-[10px]'>Live Chat</Link>
</div>
</div>
</>
)
}

export default Headerinfo