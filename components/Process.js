import React from 'react'
import Processitems from './Processitems'

const Process = ({ProcessContent}) => {
return (
<>
<div className='py-7 pb-0 bg-topbarcolor'>
    <div className='container mx-auto'>
        <h4 className='text-[40px] text-white font-bold text-center'>{ProcessContent == null || ProcessContent == '' || ProcessContent == undefined ? 'Curious To Know More About Our Service? We Are Just A Click Away' : ProcessContent.heading}</h4>
    </div>
    <div className='container mx-auto py-3 md:block hidden'>
        <Processitems ProcessContent={ProcessContent} />
    </div>
</div>
</>
)
}

export default Process