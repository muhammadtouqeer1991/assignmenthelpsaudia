import React from 'react'
import Premiumitems from './Premiumitems'

const Premiumservices = ({PremiumservicesContent}) => {
return (
<>
<div className='bg-navcolor overflow-hidden pb-12'>
<div className='container mx-auto py-8 px-5 md:px-0'>
<h2 className='md:text-[40px] text-[30px] font-bold text-center text-white'>{PremiumservicesContent == null || PremiumservicesContent == '' || PremiumservicesContent == undefined ? 'Our Premium Services' : PremiumservicesContent.heading }</h2>
<p className='text-[16px] text-center text-white'>{PremiumservicesContent == null || PremiumservicesContent == '' || PremiumservicesContent == undefined ? 'Take a look at what we got in hand for you' : PremiumservicesContent.para }</p>
</div>
<Premiumitems PremiumservicesContent={PremiumservicesContent} />
</div>
</>
)
}

export default Premiumservices