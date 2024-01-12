import React from 'react'
import Whychooseimg from './Whychooseimg'
import Choosebenifit from './Choosebenifit'
import Choosecircle from './Choosecircle'

const Whychoose = ({WhychooseContent}) => {
return (
<>
<div className='bg-topbarcolor'>
<div className='container mx-auto py-6'>
    <div>
    <h4 className='text-[40px] text-center text-white font-bold'>{WhychooseContent == null || WhychooseContent == '' || WhychooseContent == undefined ? 'Order us and Avail the Amazing Benefits that you Deserve!' : WhychooseContent.heading }</h4>
    <p className='text-white text-[16px] text-center font-normal'>{WhychooseContent == null || WhychooseContent == '' || WhychooseContent == undefined ? 'Order us and Avail the Amazing Benefits that you Deserve!' : WhychooseContent.para }</p>
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