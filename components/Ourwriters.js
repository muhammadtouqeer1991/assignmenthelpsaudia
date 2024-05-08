import React from 'react'
import Writeritems from './Writeritems'

const Ourwriters = ({OurwritersContent}) => {
return (
<>
<div className='py-8 bg-navcolor overflow-hidden'>
<div class="container mx-auto">
    <h5 className='md:text-[40px] text-[25px] font-bold text-white text-center'>{OurwritersContent == '' || OurwritersContent == null || OurwritersContent == undefined ? 'Why Choose Our Writer' : OurwritersContent.heading}</h5>
</div>
<div className='container mx-auto relative z-0'>
    <Writeritems OurwritersContent={OurwritersContent} />
    <div className='text-[118px] font-bold rotate-[-90deg] absolute left-[-5.6rem] top-0 bottom-0 z-[-1] mt-8 text-navactive opacity-[0.3]' >
    Writers
    </div>
</div>
</div>
</>
)
}

export default Ourwriters