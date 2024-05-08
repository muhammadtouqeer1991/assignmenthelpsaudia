import React from 'react'
import Processitems from './Processitems'

const Process = ({ProcessContent}) => {
return (
<>
<div className='py-7 pb-0 px-4 bg-topbarcolor md:h-[670px]'>
    <div className='container mx-auto'>
        <h4 className='md:text-[40px] text-[25px] text-white font-bold text-center'>{ProcessContent == null || ProcessContent == '' || ProcessContent == undefined ? 'Curious To Know More About Our Service? We Are Just A Click Away' : ProcessContent.heading}</h4>
    </div>
    <div className='container mx-auto py-3 md:block '>
        <Processitems ProcessContent={ProcessContent} />
    </div>
</div>
</>
)
}

export default Process