import React from 'react'
import marketing from '../public/assets/marketing.svg';
import marketinginactive from '../public/assets/marketinginactive.svg';
import Image from 'next/image';

const Subjectitems = () => {
return (
<>
<div className='py-4 flex justify-between items-center flex-wrap gap-3'>
    <div className='flex justify-center items-center flex-col flex-[20%] relative z-0'>
        <div className='rounded-full w-14 h-14 border-2 border-navactive flex justify-center items-center'>
            <Image src={marketing} width={30} />
        </div>
        <hr className='rotate-0 h-6 mt-0 border-2 border-navactive z-[-1] pb-3' />
        <div className='border-dashed border-2 rounded-[16px] border-navactive w-full text-center'>
        <div className='py-2 px-10 rounded-[16px] text-white' style={{background:'radial-gradient(50% 50% at 50% 50%, rgba(40, 208, 126, 0.60) 0%, rgba(40, 208, 126, 0.30) 100%)'}}>Marketing</div>
        </div>
    </div>
    <div className='flex justify-center items-center flex-col flex-[20%] relative z-0'>
        <div className='rounded-full w-14 h-14 border-2 border-navactive flex justify-center items-center'>
            <Image src={marketinginactive} width={30} />
        </div>
        <hr className='rotate-0 h-6 mt-0 border-2 border-navactive z-[-1] pb-3' />
        <div className='border-dashed border-2 rounded-[16px] border-navactive  w-full text-center'>
        <div className='py-2 px-10 rounded-[16px] text-white' >Nursing</div>
        </div>
    </div>
    <div className='flex justify-center items-center flex-col flex-[20%] relative z-0'>
        <div className='rounded-full w-14 h-14 border-2 border-navactive flex justify-center items-center'>
            <Image src={marketinginactive} width={30} />
        </div>
        <hr className='rotate-0 h-6 mt-0 border-2 border-navactive z-[-1] pb-3' />
        <div className='border-dashed border-2 rounded-[16px] border-navactive  w-full text-center'>
        <div className='py-2 px-10 rounded-[16px] text-white' >Law</div>
        </div>
    </div>
    <div className='flex justify-center items-center flex-col flex-[20%] relative z-0'>
        <div className='rounded-full w-14 h-14 border-2 border-navactive flex justify-center items-center'>
            <Image src={marketinginactive} width={30} />
        </div>
        <hr className='rotate-0 h-6 mt-0 border-2 border-navactive z-[-1] pb-3' />
        <div className='border-dashed border-2 rounded-[16px] border-navactive  w-full text-center'>
        <div className='py-2 px-10 rounded-[16px] text-white' >Economics</div>
        </div>
    </div>
    <div className='flex justify-center items-center flex-col flex-[20%] relative z-0'>
        <div className='rounded-full w-14 h-14 border-2 border-navactive flex justify-center items-center'>
            <Image src={marketinginactive} width={30} />
        </div>
        <hr className='rotate-0 h-6 mt-0 border-2 border-navactive z-[-1] pb-3' />
        <div className='border-dashed border-2 rounded-[16px] border-navactive  w-full text-center'>
        <div className='py-2 px-10 rounded-[16px] text-white' >Finance</div>
        </div>
    </div>
    <div className='flex justify-center items-center flex-col flex-[20%] relative z-0'>
        <div className='rounded-full w-14 h-14 border-2 border-navactive flex justify-center items-center'>
            <Image src={marketinginactive} width={30} />
        </div>
        <hr className='rotate-0 h-6 mt-0 border-2 border-navactive z-[-1] pb-3' />
        <div className='border-dashed border-2 rounded-[16px] border-navactive  w-full text-center'>
        <div className='py-2 px-10 rounded-[16px] text-white' >IT</div>
        </div>
    </div>
    <div className='flex justify-center items-center flex-col flex-[20%] relative z-0'>
        <div className='rounded-full w-14 h-14 border-2 border-navactive flex justify-center items-center'>
            <Image src={marketinginactive} width={30} />
        </div>
        <hr className='rotate-0 h-6 mt-0 border-2 border-navactive z-[-1] pb-3' />
        <div className='border-dashed border-2 rounded-[16px] border-navactive  w-full text-center'>
        <div className='py-2 px-10 rounded-[16px] text-white' >English Literature</div>
        </div>
    </div>
    <div className='flex justify-center items-center flex-col flex-[20%] relative z-0'>
        <div className='rounded-full w-14 h-14 border-2 border-navactive flex justify-center items-center'>
            <Image src={marketinginactive} width={30} />
        </div>
        <hr className='rotate-0 h-6 mt-0 border-2 border-navactive z-[-1] pb-3' />
        <div className='border-dashed border-2 rounded-[16px] border-navactive  w-full text-center'>
        <div className='py-2 px-10 rounded-[16px] text-white' >Psychology</div>
        </div>
    </div>
    <div className='flex justify-center items-center flex-col flex-[20%] relative z-0'>
        <div className='rounded-full w-14 h-14 border-2 border-navactive flex justify-center items-center'>
            <Image src={marketinginactive} width={30} />
        </div>
        <hr className='rotate-0 h-6 mt-0 border-2 border-navactive z-[-1] pb-3' />
        <div className='border-dashed border-2 rounded-[16px] border-navactive  w-full text-center'>
        <div className='py-2 px-10 rounded-[16px] text-white' >Business</div>
        </div>
    </div>
    <div className='flex justify-center items-center flex-col flex-[20%] relative z-0'>
        <div className='rounded-full w-14 h-14 border-2 border-navactive flex justify-center items-center'>
            <Image src={marketinginactive} width={30} />
        </div>
        <hr className='rotate-0 h-6 mt-0 border-2 border-navactive z-[-1] pb-3' />
        <div className='border-dashed border-2 rounded-[16px] border-navactive  w-full text-center'>
        <div className='py-2 px-10 rounded-[16px] text-white' >Management</div>
        </div>
    </div>
    <div className='flex justify-center items-center flex-col flex-[20%] relative z-0'>
        <div className='rounded-full w-14 h-14 border-2 border-navactive flex justify-center items-center'>
            <Image src={marketinginactive} width={30} />
        </div>
        <hr className='rotate-0 h-6 mt-0 border-2 border-navactive z-[-1] pb-3' />
        <div className='border-dashed border-2 rounded-[16px] border-navactive  w-full text-center'>
        <div className='py-2 px-10 rounded-[16px] text-white' >Accounting</div>
        </div>
    </div>
    <div className='flex justify-center items-center flex-col flex-[20%] relative z-0'>
        <div className='rounded-full w-14 h-14 border-2 border-navactive flex justify-center items-center'>
            <Image src={marketinginactive} width={30} />
        </div>
        <hr className='rotate-0 h-6 mt-0 border-2 border-navactive z-[-1] pb-3' />
        <div className='border-dashed border-2 rounded-[16px] border-navactive  w-full text-center'>
        <div className='py-2 px-10 rounded-[16px] text-white' >Supply Chain</div>
        </div>
    </div>
   
</div>
</>
)
}

export default Subjectitems