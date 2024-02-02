import Image from 'next/image'
import React from 'react'
import writers from '../public/assets/writers.svg';
import brilliant from '../public/assets/brilliant.svg';
import privacy from '../public/assets/privacy.svg';
import proofread from '../public/assets/proofread.svg';

const Featureitems = ({FeaturesContent}) => {
return (
<>
<div className='flex justify-between items-center mx-auto gap-5 bg-navcolor py-14 px-8 rounded-[16px] text-center mainFeatures flex-wrap w-[67%]'>
{
FeaturesContent == null || FeaturesContent == '' || FeaturesContent == undefined ? 
<>
<div className='flex flex-col justify-center items-center gap-4 '>
<Image src={writers} alt="market" />
<h5 className='text-white text-[16px] font-semibold'>Competent Writers</h5>
</div>
<div className='relative flex flex-col justify-center items-center gap-4'>
<Image src={brilliant} alt="market" />
<h5 className='text-white text-[16px] font-semibold'>Brilliant Content</h5>
</div>
<div className='flex flex-col justify-center items-center gap-4'>
<Image src={privacy} alt="market" />
<h5 className='text-white text-[16px] font-semibold'>Customer Privacy</h5>
</div>
<div className='flex flex-col justify-center items-center gap-4'>
<Image src={proofread} alt="market" />
<h5 className='text-white text-[14px] font-semibold'>Well Edited Content</h5>
</div>
</>
: 
<>
{
FeaturesContent.option.map((item,key) => {
return (
<div className='flex flex-col justify-center items-center gap-2' key={key+1}>
    <Image src={item.icon} alt="market" />
    <h5 className='text-white text-[14px] font-semibold'>{item.title}</h5>
</div>
)
})
}

</>
}

</div>
</>
)
}

export default Featureitems