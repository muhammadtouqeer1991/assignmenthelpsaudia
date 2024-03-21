import React from 'react'
import marketing from '../public/assets/marketing.svg';
import marketinginactive from '../public/assets/marketinginactive.svg';
import Accounting from '../public/assets/Accounting.svg';
import Business from '../public/assets/Business.svg';
import economics from '../public/assets/economics.svg';
import EnglishLiterature from '../public/assets/EnglishLiterature.svg';
import Finance from '../public/assets/Finance.svg';
import IT from '../public/assets/IT.svg';
import Law from '../public/assets/Law.svg';
import Management from '../public/assets/Management.svg';
import Nursing from '../public/assets/Nursing.svg';
import Psychology from '../public/assets/Psychology.svg';
import SupplyChain from '../public/assets/SupplyChain.svg';
import Image from 'next/image';

const Subjectitems = ({SubjectContentitems}) => {
return (
<>
<div className='py-4 flex justify-between items-center flex-wrap gap-3 submainitems'>
    <div className='flex justify-center items-center flex-col flex-[20%] relative z-0'>
        <div className='rounded-full w-14 h-14 border-2 border-navactive flex justify-center items-center'>
            <Image src={SubjectContentitems == undefined || SubjectContentitems[0].img == undefined ? marketing : SubjectContentitems[0].img} width={30} alt="market" />
        </div>
        <hr className='rotate-0 h-6 mt-0 border-2 border-navactive z-[-1] pb-3' />
        <div className='border-dashed border-2 rounded-[16px] border-navactive w-full text-center'>
        <div className='py-2 px-10 rounded-[16px] text-white active' style={{background:'radial-gradient(50% 50% at 50% 50%, rgba(40, 208, 126, 0.60) 0%, rgba(40, 208, 126, 0.30) 100%)'}}>{SubjectContentitems == '' || SubjectContentitems == null || SubjectContentitems == undefined ? 'Marketing' : SubjectContentitems[0].title}</div>
        </div>
    </div>
    <div className='flex justify-center items-center flex-col flex-[20%] relative z-0'>
        <div className='rounded-full w-14 h-14 border-2 border-navactive flex justify-center items-center '>
            <Image src={SubjectContentitems == undefined || SubjectContentitems[1].img == undefined ? Nursing : SubjectContentitems[1].img} width={30} alt="market" />
        </div>
        <hr className='rotate-0 h-6 mt-0 border-2 border-navactive z-[-1] pb-3' />
        <div className='border-dashed border-2 rounded-[16px] border-navactive  w-full text-center active'>
        <div className='py-2 px-10 rounded-[16px] text-white' >{SubjectContentitems == '' || SubjectContentitems == null || SubjectContentitems == undefined ? 'Nursing' : SubjectContentitems[1].title}</div>
        </div>
    </div>
    <div className='flex justify-center items-center flex-col flex-[20%] relative z-0'>
        <div className='rounded-full w-14 h-14 border-2 border-navactive flex justify-center items-center'>
            <Image src={SubjectContentitems == undefined || SubjectContentitems[2].img == undefined ? Law : SubjectContentitems[2].img} width={30} alt="market" />
        </div>
        <hr className='rotate-0 h-6 mt-0 border-2 border-navactive z-[-1] pb-3' />
        <div className='border-dashed border-2 rounded-[16px] border-navactive  w-full text-center active'>
        <div className='py-2 px-10 rounded-[16px] text-white' >{SubjectContentitems == '' || SubjectContentitems == null || SubjectContentitems == undefined ? 'Law' : SubjectContentitems[2].title}</div>
        </div>
    </div>
    <div className='flex justify-center items-center flex-col flex-[20%] relative z-0'>
        <div className='rounded-full w-14 h-14 border-2 border-navactive flex justify-center items-center'>
            <Image src={SubjectContentitems == undefined || SubjectContentitems[3].img == undefined ? economics : SubjectContentitems[3].img} width={30} alt="market" />
        </div>
        <hr className='rotate-0 h-6 mt-0 border-2 border-navactive z-[-1] pb-3' />
        <div className='border-dashed border-2 rounded-[16px] border-navactive  w-full text-center active'>
        <div className='py-2 px-10 rounded-[16px] text-white' >{SubjectContentitems == '' || SubjectContentitems == null || SubjectContentitems == undefined ? 'Economics' : SubjectContentitems[3].title}</div>
        </div>
    </div>
    <div className='flex justify-center items-center flex-col flex-[20%] relative z-0'>
        <div className='rounded-full w-14 h-14 border-2 border-navactive flex justify-center items-center'>
            <Image src={SubjectContentitems == undefined || SubjectContentitems[4].img == undefined ? Finance : SubjectContentitems[4].img} width={30} alt="market" />
        </div>
        <hr className='rotate-0 h-6 mt-0 border-2 border-navactive z-[-1] pb-3' />
        <div className='border-dashed border-2 rounded-[16px] border-navactive  w-full text-center active'>
        <div className='py-2 px-10 rounded-[16px] text-white' >{SubjectContentitems == '' || SubjectContentitems == null || SubjectContentitems == undefined ? 'Finance' : SubjectContentitems[4].title}</div>
        </div>
    </div>
    <div className='flex justify-center items-center flex-col flex-[20%] relative z-0'>
        <div className='rounded-full w-14 h-14 border-2 border-navactive flex justify-center items-center'>
            <Image src={SubjectContentitems == undefined || SubjectContentitems[5].img == undefined ? IT : SubjectContentitems[5].img} width={30} alt="market" />
        </div>
        <hr className='rotate-0 h-6 mt-0 border-2 border-navactive z-[-1] pb-3' />
        <div className='border-dashed border-2 rounded-[16px] border-navactive  w-full text-center active'>
        <div className='py-2 px-10 rounded-[16px] text-white' >{SubjectContentitems == '' || SubjectContentitems == null || SubjectContentitems == undefined ? 'IT' : SubjectContentitems[5].title}</div>
        </div>
    </div>
    <div className='flex justify-center items-center flex-col flex-[20%] relative z-0'>
        <div className='rounded-full w-14 h-14 border-2 border-navactive flex justify-center items-center'>
            <Image src={SubjectContentitems == undefined || SubjectContentitems[6].img == undefined ? EnglishLiterature : SubjectContentitems[6].img} width={30} alt="market" />
        </div>
        <hr className='rotate-0 h-6 mt-0 border-2 border-navactive z-[-1] pb-3' />
        <div className='border-dashed border-2 rounded-[16px] border-navactive  w-full text-center active'>
        <div className='py-2 px-10 rounded-[16px] text-white' >{SubjectContentitems == '' || SubjectContentitems == null || SubjectContentitems == undefined ? 'English Literature' : SubjectContentitems[6].title}</div>
        </div>
    </div>
    <div className='flex justify-center items-center flex-col flex-[20%] relative z-0'>
        <div className='rounded-full w-14 h-14 border-2 border-navactive flex justify-center items-center'>
            <Image src={SubjectContentitems == undefined || SubjectContentitems[7].img == undefined ? Psychology : SubjectContentitems[7].img} width={30} alt="market" />
        </div>
        <hr className='rotate-0 h-6 mt-0 border-2 border-navactive z-[-1] pb-3' />
        <div className='border-dashed border-2 rounded-[16px] border-navactive  w-full text-center active'>
        <div className='py-2 px-10 rounded-[16px] text-white' >{SubjectContentitems == '' || SubjectContentitems == null || SubjectContentitems == undefined ? 'Psychology' : SubjectContentitems[7].title}</div>
        </div>
    </div>
    <div className='flex justify-center items-center flex-col flex-[20%] relative z-0'>
        <div className='rounded-full w-14 h-14 border-2 border-navactive flex justify-center items-center'>
            <Image src={SubjectContentitems == undefined || SubjectContentitems[8].img == undefined ? Business : SubjectContentitems[8].img} width={30} alt="market" />
        </div>
        <hr className='rotate-0 h-6 mt-0 border-2 border-navactive z-[-1] pb-3' />
        <div className='border-dashed border-2 rounded-[16px] border-navactive  w-full text-center active'>
        <div className='py-2 px-10 rounded-[16px] text-white' >{SubjectContentitems == '' || SubjectContentitems == null || SubjectContentitems == undefined ? 'Business' : SubjectContentitems[8].title}</div>
        </div>
    </div>
    <div className='flex justify-center items-center flex-col flex-[20%] relative z-0'>
        <div className='rounded-full w-14 h-14 border-2 border-navactive flex justify-center items-center'>
            <Image src={SubjectContentitems == undefined || SubjectContentitems[9].img == undefined ? Management : SubjectContentitems[9].img} width={30} alt="market" />
        </div>
        <hr className='rotate-0 h-6 mt-0 border-2 border-navactive z-[-1] pb-3' />
        <div className='border-dashed border-2 rounded-[16px] border-navactive  w-full text-center active'>
        <div className='py-2 px-10 rounded-[16px] text-white' >{SubjectContentitems == '' || SubjectContentitems == null || SubjectContentitems == undefined ? 'Management' : SubjectContentitems[9].title}</div>
        </div>
    </div>
    <div className='flex justify-center items-center flex-col flex-[20%] relative z-0'>
        <div className='rounded-full w-14 h-14 border-2 border-navactive flex justify-center items-center'>
            <Image src={SubjectContentitems == undefined || SubjectContentitems[10].img == undefined ? Accounting : SubjectContentitems[10].img} width={30} alt="market" />
        </div>
        <hr className='rotate-0 h-6 mt-0 border-2 border-navactive z-[-1] pb-3' />
        <div className='border-dashed border-2 rounded-[16px] border-navactive  w-full text-center active'>
        <div className='py-2 px-10 rounded-[16px] text-white' >{SubjectContentitems == '' || SubjectContentitems == null || SubjectContentitems == undefined ? 'Accounting' : SubjectContentitems[10].title}</div>
        </div>
    </div>
    <div className='flex justify-center items-center flex-col flex-[20%] relative z-0'>
        <div className='rounded-full w-14 h-14 border-2 border-navactive flex justify-center items-center'>
            <Image src={SubjectContentitems == undefined || SubjectContentitems[11].img == undefined ? SupplyChain : SubjectContentitems[11].img} width={30} alt="market" />
        </div>
        <hr className='rotate-0 h-6 mt-0 border-2 border-navactive z-[-1] pb-3' />
        <div className='border-dashed border-2 rounded-[16px] border-navactive  w-full text-center active'>
        <div className='py-2 px-10 rounded-[16px] text-white' >{SubjectContentitems == '' || SubjectContentitems == null || SubjectContentitems == undefined ? 'Supply Chain' : SubjectContentitems[11].title}</div>
        </div>
    </div>
   
</div>
</>
)
}

export default Subjectitems