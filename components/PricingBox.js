import Image from 'next/image'
import React from 'react'
import basic from '../public/assets/basic.svg';

const PricingBox = () => {
return (
<>
<div className='py-5 bg-topbarcolor'>
<div className='container mx-auto'>
<div className='text-center'>
<h4 className='text-[50px] font-bold text-white'>Get Service Excellence Beyond Expectations at Budget-Friendly Rates</h4>
<hr className='w-[326.025px] h-[1px] border-navactive mx-auto mb-2' />
<p className='text-white text-[16px]'>We are a student-friendly service, and our accessible and feasible work charges endorse that.</p>

<div className='flex justify-between border-navactive border-2 pt-6 items-center py-6 px-7 mt-[10rem] gap-4'>
<div className='flex-1'>
<h3 className='text-[40px] font-bold text-left text-white pr-[3rem]'>Choose Your Plan</h3>
</div>
<div className='flex-1 relative top-[-9rem]'>
<div className='text-center py-7 px-5 bg-[#2C3539] rounded-tr-[20px] rounded-tl-[20px] relative'>
    <h5 className='text-white text-[40px] font-bold pb-3'>Passing</h5>
    <Image src={basic} className='block m-auto' alt="basic" />
    <h6 className='text-[26px] font-semibold text-navactive pt-3'>£8.90</h6>
    <p className='text-[16px] text-white pt-2'>50% - 60%</p>
    <p className='text-[16px] text-white'>for 100 words</p>
    <div className="pricingBoxPath"></div>
</div>
</div>
<div className='flex-1 relative top-[-9rem]'>
<div className='text-center py-7 px-5 bg-[#2C3539] rounded-tr-[20px] rounded-tl-[20px] relative'>
    <h5 className='text-white text-[40px] font-bold pb-3'>Passing</h5>
    <Image src={basic} className='block m-auto' alt="basic" />
    <h6 className='text-[26px] font-semibold text-navactive pt-3'>£8.90</h6>
    <p className='text-[16px] text-white pt-2'>50% - 60%</p>
    <p className='text-[16px] text-white'>for 100 words</p>
    <div className="pricingBoxPath"></div>
</div>
</div>
<div className='flex-1 relative top-[-9rem]'>
<div className='text-center py-7 px-5 bg-[#2C3539] rounded-tr-[20px] rounded-tl-[20px] relative'>
    <h5 className='text-white text-[40px] font-bold pb-3'>Passing</h5>
    <Image src={basic} className='block m-auto' alt="basic" />
    <h6 className='text-[26px] font-semibold text-navactive pt-3'>£8.90</h6>
    <p className='text-[16px] text-white pt-2'>50% - 60%</p>
    <p className='text-[16px] text-white'>for 100 words</p>
    <div className="pricingBoxPath"></div>
</div>
</div>
</div>

</div>
</div>
</div>
</>
)
}

export default PricingBox