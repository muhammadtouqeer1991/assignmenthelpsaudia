import React from 'react'
import Whychooseimg from './Whychooseimg'
import Choosebenifit from './Choosebenifit'
import Choosecircle from './Choosecircle'

const Whychoose = ({WhychooseContent}) => {
return (
<>
<div className='bg-topbarcolor'>
<div className='container mx-auto py-6 px-4 md:px-0'>
    <div>
    <h4 className='md:text-[34px] text-[22px] md:text-center text-left text-white font-bold'>{WhychooseContent == null || WhychooseContent == '' || WhychooseContent == undefined ? 'Order us and Avail the Amazing Benefits that you Deserve!' : WhychooseContent.heading }</h4>
    <p className='text-white text-[16px] md:text-center text-left py-2 md:py-0 font-normal'>{WhychooseContent == null || WhychooseContent == '' || WhychooseContent == undefined ? 'Order us and Avail the Amazing Benefits that you Deserve!' : WhychooseContent.para }</p>
    </div>
    <div className='flex flex-col md:flex-row justify-between items-center pt-4 md:pt-0'>
        <Choosebenifit WhychooseContent={WhychooseContent} />
        <Choosecircle />
        <Whychooseimg />
    </div>
</div>
</div>
</>
)
}

export default Whychoose