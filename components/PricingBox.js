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

<div className='flex justify-between border-navactive border-2 pt-6 items-center py-6 px-7 mt-[10rem] gap-2 border-b-0 rounded-tl-[2rem] rounded-tr-[2rem]'>

<div className='flex-1 relative top-[-9rem]'>
<div className='text-center py-7 px-5 bg-[#2C3539] rounded-tr-[20px] rounded-tl-[20px] relative'>
    <h5 className='text-white text-[20px] font-bold pb-1'>High School</h5>
    <h6 className='text-[26px] font-semibold text-navactive'>SAR 30</h6>
    <p className='text-[16px] text-white'>for 250 words</p>
    <div className="pricingBoxPath"></div>
</div>
</div>

<div className='flex-1 relative top-[-9rem]'>
<div className='text-center py-7 px-5 bg-[#2C3539] rounded-tr-[20px] rounded-tl-[20px] relative'>
    <h5 className='text-white text-[20px] font-bold pb-2'>College</h5>
    <h6 className='text-[26px] font-semibold text-navactive '>SAR 35</h6>
    {/* <p className='text-[16px] text-white pt-2'>50% - 60%</p> */}
    <p className='text-[16px] text-white'>for 250 words</p>
    <div className="pricingBoxPath"></div>
</div>
</div>

<div className='flex-1 relative top-[-9rem]'>
<div className='text-center py-7 px-5 bg-[#2C3539] rounded-tr-[20px] rounded-tl-[20px] relative'>
    <h5 className='text-white text-[20px] font-bold pb-2'>Undergraduate</h5>
    <h6 className='text-[26px] font-semibold text-navactive'>SAR 40</h6>
    {/* <p className='text-[16px] text-white pt-2'>50% - 60%</p> */}
    <p className='text-[16px] text-white'>for 250 words</p>
    <div className="pricingBoxPath"></div>
</div>
</div>

<div className='flex-1 relative top-[-9rem]'>
<div className='text-center py-7 px-5 bg-[#2C3539] rounded-tr-[20px] rounded-tl-[20px] relative'>
    <h5 className='text-white text-[20px] font-bold pb-2'>Masters</h5>
    <h6 className='text-[26px] font-semibold text-navactive'>SAR 50</h6>
    {/* <p className='text-[16px] text-white pt-2'>50% - 60%</p> */}
    <p className='text-[16px] text-white'>for 250 words</p>
    <div className="pricingBoxPath"></div>
</div>
</div>

<div className='flex-1 relative top-[-9rem]'>
<div className='text-center py-7 px-5 bg-[#2C3539] rounded-tr-[20px] rounded-tl-[20px] relative'>
    <h5 className='text-white text-[20px] font-bold pb-2'>Ph.D.</h5>
    <h6 className='text-[26px] font-semibold text-navactive'>SAR 60</h6>
    {/* <p className='text-[16px] text-white pt-2'>50% - 60%</p> */}
    <p className='text-[16px] text-white'>for 250 words</p>
    <div className="pricingBoxPath"></div>
</div>
</div>
<div className='flex-1 relative top-[-9rem]'>
<div className='text-center py-7 px-5 bg-[#2C3539] rounded-tr-[20px] rounded-tl-[20px] relative'>
    <h5 className='text-white text-[15px] font-bold pb-2'>Admission Essay</h5>
    <h6 className='text-[26px] font-semibold text-navactive'>SAR 70</h6>
    {/* <p className='text-[16px] text-white pt-2'>50% - 60%</p> */}
    <p className='text-[16px] text-white'>for 250 words</p>
    <div className="pricingBoxPath"></div>
</div>
</div>


</div>


<div className='flex justify-between border-navactive border-2 gap-3'>
   
    <div className='flex-1 gap-4 flex flex-col'>
        <div className='bg-navinactive block w-100 py-4'>
            <p className='text-white fw-bold text-[20px]'>SAR 30</p>
            <p className='text-white fw-bold text-[25px]'>20+ Days</p>
        </div>
        <div className='bg-navinactive block w-100 py-4'>
            <p className='text-white fw-bold text-[20px]'>SAR 35</p>
            <p className='text-white fw-bold text-[25px]'>15 Days</p>
        </div>
        <div className='bg-navinactive block w-100 py-4'>
            <p className='text-white fw-bold text-[20px]'>SAR 45</p>
            <p className='text-white fw-bold text-[25px]'>10 Days</p>
        </div>
        <div className='bg-navinactive block w-100 py-4'>
            <p className='text-white fw-bold text-[20px]'>SAR 50</p>
            <p className='text-white fw-bold text-[25px]'>7 Days</p>
        </div>
        <div className='bg-navinactive block w-100 py-4'>
            <p className='text-white fw-bold text-[20px]'>SAR 55</p>
            <p className='text-white fw-bold text-[25px]'>6 Days</p>
        </div>
        <div className='bg-navinactive block w-100 py-4'>
            <p className='text-white fw-bold text-[20px]'>SAR 60</p>
            <p className='text-white fw-bold text-[25px]'>5 Days</p>
        </div>
        <div className='bg-navinactive block w-100 py-4'>
            <p className='text-white fw-bold text-[20px]'>SAR 65</p>
            <p className='text-white fw-bold text-[25px]'>4 Days</p>
        </div>
        <div className='bg-navinactive block w-100 py-4'>
            <p className='text-white fw-bold text-[20px]'>SAR 75</p>
            <p className='text-white fw-bold text-[25px]'>3 Days</p>
        </div>
        <div className='bg-navinactive block w-100 py-4'>
            <p className='text-white fw-bold text-[20px]'>SAR 85</p>
            <p className='text-white fw-bold text-[25px]'>2 Days</p>
        </div>
        <div className='bg-navinactive block w-100 py-4'>
            <p className='text-white fw-bold text-[20px]'>SAR 105</p>
            <p className='text-white fw-bold text-[25px]'>24 Hours</p>
        </div>
        <div className='bg-navinactive block w-100 py-4'>
            <p className='text-white fw-bold text-[20px]'>SAR 145</p>
            <p className='text-white fw-bold text-[25px]'>12 Hours</p>
        </div>
        <div className='bg-navinactive block w-100 py-4'>
            <p className='text-white fw-bold text-[20px]'>SAR 165</p>
            <p className='text-white fw-bold text-[25px]'>6 Hours</p>
        </div>
    </div>
    <div className='flex-1 gap-4 flex flex-col'>
        <div className='bg-navinactive block w-100 py-4'>
            <p className='text-white fw-bold text-[20px]'>SAR 35</p>
            <p className='text-white fw-bold text-[25px]'>20+ Days</p>
        </div>
        <div className='bg-navinactive block w-100 py-4'>
            <p className='text-white fw-bold text-[20px]'>SAR 40</p>
            <p className='text-white fw-bold text-[25px]'>15 Days</p>
        </div>
        <div className='bg-navinactive block w-100 py-4'>
            <p className='text-white fw-bold text-[20px]'>SAR 50</p>
            <p className='text-white fw-bold text-[25px]'>10 Days</p>
        </div>
        <div className='bg-navinactive block w-100 py-4'>
            <p className='text-white fw-bold text-[20px]'>SAR 55</p>
            <p className='text-white fw-bold text-[25px]'>7 Days</p>
        </div>
        <div className='bg-navinactive block w-100 py-4'>
            <p className='text-white fw-bold text-[20px]'>SAR 60</p>
            <p className='text-white fw-bold text-[25px]'>6 Days</p>
        </div>
        <div className='bg-navinactive block w-100 py-4'>
            <p className='text-white fw-bold text-[20px]'>SAR 65</p>
            <p className='text-white fw-bold text-[25px]'>5 Days</p>
        </div>
        <div className='bg-navinactive block w-100 py-4'>
            <p className='text-white fw-bold text-[20px]'>SAR 70</p>
            <p className='text-white fw-bold text-[25px]'>4 Days</p>
        </div>
        <div className='bg-navinactive block w-100 py-4'>
            <p className='text-white fw-bold text-[20px]'>SAR 80</p>
            <p className='text-white fw-bold text-[25px]'>3 Days</p>
        </div>
        <div className='bg-navinactive block w-100 py-4'>
            <p className='text-white fw-bold text-[20px]'>SAR 90</p>
            <p className='text-white fw-bold text-[25px]'>2 Days</p>
        </div>
        <div className='bg-navinactive block w-100 py-4'>
            <p className='text-white fw-bold text-[20px]'>SAR 100</p>
            <p className='text-white fw-bold text-[25px]'>24 Hours</p>
        </div>
        <div className='bg-navinactive block w-100 py-4'>
            <p className='text-white fw-bold text-[20px]'>SAR 140</p>
            <p className='text-white fw-bold text-[25px]'>12 Hours</p>
        </div>
        <div className='bg-navinactive block w-100 py-4'>
            <p className='text-white fw-bold text-[20px]'>SAR 160</p>
            <p className='text-white fw-bold text-[25px]'>6 Hours</p>
        </div>
    </div>
    <div className='flex-1 gap-4 flex flex-col'>
        <div className='bg-navinactive block w-100 py-4'>
            <p className='text-white fw-bold text-[20px]'>SAR 40</p>
            <p className='text-white fw-bold text-[25px]'>20+ Days</p>
        </div>
        <div className='bg-navinactive block w-100 py-4'>
            <p className='text-white fw-bold text-[20px]'>SAR 45</p>
            <p className='text-white fw-bold text-[25px]'>15 Days</p>
        </div>
        <div className='bg-navinactive block w-100 py-4'>
            <p className='text-white fw-bold text-[20px]'>SAR 55</p>
            <p className='text-white fw-bold text-[25px]'>10 Days</p>
        </div>
        <div className='bg-navinactive block w-100 py-4'>
            <p className='text-white fw-bold text-[20px]'>SAR 60</p>
            <p className='text-white fw-bold text-[25px]'>7 Days</p>
        </div>
        <div className='bg-navinactive block w-100 py-4'>
            <p className='text-white fw-bold text-[20px]'>SAR 65</p>
            <p className='text-white fw-bold text-[25px]'>6 Days</p>
        </div>
        <div className='bg-navinactive block w-100 py-4'>
            <p className='text-white fw-bold text-[20px]'>SAR 70</p>
            <p className='text-white fw-bold text-[25px]'>5 Days</p>
        </div>
        <div className='bg-navinactive block w-100 py-4'>
            <p className='text-white fw-bold text-[20px]'>SAR 75</p>
            <p className='text-white fw-bold text-[25px]'>4 Days</p>
        </div>
        <div className='bg-navinactive block w-100 py-4'>
            <p className='text-white fw-bold text-[20px]'>SAR 85</p>
            <p className='text-white fw-bold text-[25px]'>3 Days</p>
        </div>
        <div className='bg-navinactive block w-100 py-4'>
            <p className='text-white fw-bold text-[20px]'>SAR 105</p>
            <p className='text-white fw-bold text-[25px]'>2 Days</p>
        </div>
        <div className='bg-navinactive block w-100 py-4'>
            <p className='text-white fw-bold text-[20px]'>SAR 115</p>
            <p className='text-white fw-bold text-[25px]'>24 Hours</p>
        </div>
        <div className='bg-navinactive block w-100 py-4'>
            <p className='text-white fw-bold text-[20px]'>SAR 155</p>
            <p className='text-white fw-bold text-[25px]'>12 Hours</p>
        </div>
        <div className='bg-navinactive block w-100 py-4'>
            <p className='text-white fw-bold text-[20px]'>SAR 175</p>
            <p className='text-white fw-bold text-[25px]'>6 Hours</p>
        </div>
    </div>
    <div className='flex-1 gap-4 flex flex-col'>
        <div className='bg-navinactive block w-100 py-4'>
            <p className='text-white fw-bold text-[20px]'>SAR 50</p>
            <p className='text-white fw-bold text-[25px]'>20+ Days</p>
        </div>
        <div className='bg-navinactive block w-100 py-4'>
            <p className='text-white fw-bold text-[20px]'>SAR 55</p>
            <p className='text-white fw-bold text-[25px]'>15 Days</p>
        </div>
        <div className='bg-navinactive block w-100 py-4'>
            <p className='text-white fw-bold text-[20px]'>SAR 65</p>
            <p className='text-white fw-bold text-[25px]'>10 Days</p>
        </div>
        <div className='bg-navinactive block w-100 py-4'>
            <p className='text-white fw-bold text-[20px]'>SAR 70</p>
            <p className='text-white fw-bold text-[25px]'>7 Days</p>
        </div>
        <div className='bg-navinactive block w-100 py-4'>
            <p className='text-white fw-bold text-[20px]'>SAR 75</p>
            <p className='text-white fw-bold text-[25px]'>6 Days</p>
        </div>
        <div className='bg-navinactive block w-100 py-4'>
            <p className='text-white fw-bold text-[20px]'>SAR 80</p>
            <p className='text-white fw-bold text-[25px]'>5 Days</p>
        </div>
        <div className='bg-navinactive block w-100 py-4'>
            <p className='text-white fw-bold text-[20px]'>SAR 85</p>
            <p className='text-white fw-bold text-[25px]'>4 Days</p>
        </div>
        <div className='bg-navinactive block w-100 py-4'>
            <p className='text-white fw-bold text-[20px]'>SAR 95</p>
            <p className='text-white fw-bold text-[25px]'>3 Days</p>
        </div>
        <div className='bg-navinactive block w-100 py-4'>
            <p className='text-white fw-bold text-[20px]'>SAR 115</p>
            <p className='text-white fw-bold text-[25px]'>2 Days</p>
        </div>
        <div className='bg-navinactive block w-100 py-4'>
            <p className='text-white fw-bold text-[20px]'>SAR 125</p>
            <p className='text-white fw-bold text-[25px]'>24 Hours</p>
        </div>
        <div className='bg-navinactive block w-100 py-4'>
            <p className='text-white fw-bold text-[20px]'>SAR 165</p>
            <p className='text-white fw-bold text-[25px]'>12 Hours</p>
        </div>
        <div className='bg-navinactive block w-100 py-4'>
            <p className='text-white fw-bold text-[20px]'>SAR 185</p>
            <p className='text-white fw-bold text-[25px]'>6 Hours</p>
        </div>
    </div>
    <div className='flex-1 gap-4 flex flex-col'>
        <div className='bg-navinactive block w-100 py-4'>
            <p className='text-white fw-bold text-[20px]'>SAR 60</p>
            <p className='text-white fw-bold text-[25px]'>20+ Days</p>
        </div>
        <div className='bg-navinactive block w-100 py-4'>
            <p className='text-white fw-bold text-[20px]'>SAR 65</p>
            <p className='text-white fw-bold text-[25px]'>15 Days</p>
        </div>
        <div className='bg-navinactive block w-100 py-4'>
            <p className='text-white fw-bold text-[20px]'>SAR 75</p>
            <p className='text-white fw-bold text-[25px]'>10 Days</p>
        </div>
        <div className='bg-navinactive block w-100 py-4'>
            <p className='text-white fw-bold text-[20px]'>SAR 80</p>
            <p className='text-white fw-bold text-[25px]'>7 Days</p>
        </div>
        <div className='bg-navinactive block w-100 py-4'>
            <p className='text-white fw-bold text-[20px]'>SAR 85</p>
            <p className='text-white fw-bold text-[25px]'>6 Days</p>
        </div>
        <div className='bg-navinactive block w-100 py-4'>
            <p className='text-white fw-bold text-[20px]'>SAR 90</p>
            <p className='text-white fw-bold text-[25px]'>5 Days</p>
        </div>
        <div className='bg-navinactive block w-100 py-4'>
            <p className='text-white fw-bold text-[20px]'>SAR 95</p>
            <p className='text-white fw-bold text-[25px]'>4 Days</p>
        </div>
        <div className='bg-navinactive block w-100 py-4'>
            <p className='text-white fw-bold text-[20px]'>SAR 105</p>
            <p className='text-white fw-bold text-[25px]'>3 Days</p>
        </div>
        <div className='bg-navinactive block w-100 py-4'>
            <p className='text-white fw-bold text-[20px]'>SAR 125</p>
            <p className='text-white fw-bold text-[25px]'>2 Days</p>
        </div>
        <div className='bg-navinactive block w-100 py-4'>
            <p className='text-white fw-bold text-[20px]'>SAR 135</p>
            <p className='text-white fw-bold text-[25px]'>24 Hours</p>
        </div>
        <div className='bg-navinactive block w-100 py-4'>
            <p className='text-white fw-bold text-[20px]'>SAR 175</p>
            <p className='text-white fw-bold text-[25px]'>12 Hours</p>
        </div>
        <div className='bg-navinactive block w-100 py-4'>
            <p className='text-white fw-bold text-[20px]'>SAR 195</p>
            <p className='text-white fw-bold text-[25px]'>6 Hours</p>
        </div>
    </div>
    <div className='flex-1 gap-4 flex flex-col'>
        <div className='bg-navinactive block w-100 py-4'>
            <p className='text-white fw-bold text-[20px]'>SAR 70</p>
            <p className='text-white fw-bold text-[25px]'>20+ Days</p>
        </div>
        <div className='bg-navinactive block w-100 py-4'>
            <p className='text-white fw-bold text-[20px]'>SAR 75</p>
            <p className='text-white fw-bold text-[25px]'>15 Days</p>
        </div>
        <div className='bg-navinactive block w-100 py-4'>
            <p className='text-white fw-bold text-[20px]'>SAR 85</p>
            <p className='text-white fw-bold text-[25px]'>10 Days</p>
        </div>
        <div className='bg-navinactive block w-100 py-4'>
            <p className='text-white fw-bold text-[20px]'>SAR 90</p>
            <p className='text-white fw-bold text-[25px]'>7 Days</p>
        </div>
        <div className='bg-navinactive block w-100 py-4'>
            <p className='text-white fw-bold text-[20px]'>SAR 95</p>
            <p className='text-white fw-bold text-[25px]'>6 Days</p>
        </div>
        <div className='bg-navinactive block w-100 py-4'>
            <p className='text-white fw-bold text-[20px]'>SAR 100</p>
            <p className='text-white fw-bold text-[25px]'>5 Days</p>
        </div>
        <div className='bg-navinactive block w-100 py-4'>
            <p className='text-white fw-bold text-[20px]'>SAR 105</p>
            <p className='text-white fw-bold text-[25px]'>4 Days</p>
        </div>
        <div className='bg-navinactive block w-100 py-4'>
            <p className='text-white fw-bold text-[20px]'>SAR 115</p>
            <p className='text-white fw-bold text-[25px]'>3 Days</p>
        </div>
        <div className='bg-navinactive block w-100 py-4'>
            <p className='text-white fw-bold text-[20px]'>SAR 135</p>
            <p className='text-white fw-bold text-[25px]'>2 Days</p>
        </div>
        <div className='bg-navinactive block w-100 py-4'>
            <p className='text-white fw-bold text-[20px]'>SAR 145</p>
            <p className='text-white fw-bold text-[25px]'>24 Hours</p>
        </div>
        <div className='bg-navinactive block w-100 py-4'>
            <p className='text-white fw-bold text-[20px]'>SAR 185</p>
            <p className='text-white fw-bold text-[25px]'>12 Hours</p>
        </div>
        <div className='bg-navinactive block w-100 py-4'>
            <p className='text-white fw-bold text-[20px]'>SAR 205</p>
            <p className='text-white fw-bold text-[25px]'>6 Hours</p>
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