import Link from 'next/link'
import React from 'react'

const Featureinfo = ({FeaturesContent}) => {
return (
<>
<div className='md:w-[32%] w-100 px-4 md:px-0 py-5 md:py-0 pb-[2rem]'>
  <h4 className='text-[26px] text-navactive font-medium pb-1'>{FeaturesContent == '' || FeaturesContent == null || FeaturesContent == undefined ? 'Faetures' : FeaturesContent.heading}</h4>
  <hr className='w-[125px] border-navactive border-2 mb-3' />
  <h5 className='text-[40px] text-white font-semibold leading-[50px] pb-4'>{FeaturesContent == '' || FeaturesContent == null || FeaturesContent == undefined ? 'What Makes Assignment Help Incredible?' : FeaturesContent.subheading}</h5>
  <Link href="/about-us" className="py-2 px-10 rounded-[10px] text-white border-2 border-navactive">Read More</Link>
</div>
</>
)
}

export default Featureinfo