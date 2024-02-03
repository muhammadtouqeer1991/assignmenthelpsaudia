import React from 'react'
import revision from '../public/assets/revision.svg';
import specialist from '../public/assets/specialist.svg';
import ownership from '../public/assets/ownership.svg';
import plagiarism from '../public/assets/plagiarism.svg';
import reference from '../public/assets/reference.svg';
import Image from 'next/image';

const Choosebenifit = ({WhychooseContent}) => {
return (
<>
<div className='flex flex-col gap-4 maiChoose'>
<div className='bg-navactive rounded-[65.5px] relative py-4 px-10 pl-7 font-semibold pr-[8rem] md:left-[8rem] itemchoose'>
<h6>{WhychooseContent == null || WhychooseContent == '' || WhychooseContent == undefined ? 'Free Unlimited Revisions' : WhychooseContent.option[0].title}</h6>
<div className='absolute top-0 right-[-1px] rounded-full bg-navcolor w-14 h-14 flex justify-center items-center'>
    <Image src={WhychooseContent == null || WhychooseContent == '' || WhychooseContent == undefined ? '' : WhychooseContent.option[0].icon} alt="market" width={30} />
</div>
</div>
<div className='bg-benifitcolor rounded-[65.5px] relative py-4 px-10 pl-7 font-semibold pr-[8rem] md:left-[4rem] itemchoose'>
<h6 className='text-white'>{WhychooseContent == null || WhychooseContent == '' || WhychooseContent == undefined ? '650+ Subject Specialist' : WhychooseContent.option[1].title}</h6>
<div className='absolute top-0 right-[-1px] rounded-full bg-navactive w-14 h-14 flex justify-center items-center'>
    <Image src={WhychooseContent == null || WhychooseContent == '' || WhychooseContent == undefined ? '' : WhychooseContent.option[1].icon} alt="market" width={30} style={{mixBlendMode:'difference'}} />
</div>
</div>
<div className='bg-benifitcolor rounded-[65.5px] relative py-4 px-10 pl-7 font-semibold pr-[8rem] itemchoose'>
<h6 className='text-white'>{WhychooseContent == null || WhychooseContent == '' || WhychooseContent == undefined ? 'Complete Ownership' : WhychooseContent.option[2].title}</h6>
<div className='absolute top-0 right-[-1px] rounded-full bg-navactive w-14 h-14 flex justify-center items-center'>
    <Image src={WhychooseContent == null || WhychooseContent == '' || WhychooseContent == undefined ? '' : WhychooseContent.option[2].icon} alt="market" width={30} style={{mixBlendMode:'difference'}} />
</div>
</div>
<div className='bg-benifitcolor rounded-[65.5px] relative py-4 px-10 pl-7 font-semibold pr-[8rem] md:left-[4rem] itemchoose'>
<h6 className='text-white'>{WhychooseContent == null || WhychooseContent == '' || WhychooseContent == undefined ? 'Free Plagiarism Report' : WhychooseContent.option[3].title}</h6>
<div className='absolute top-0 right-[-1px] rounded-full bg-navactive w-14 h-14 flex justify-center items-center'>
    <Image src={WhychooseContent == null || WhychooseContent == '' || WhychooseContent == undefined ? '' : WhychooseContent.option[3].icon} alt="market" width={30} style={{mixBlendMode:'difference'}} />
</div>
</div>
<div className='bg-benifitcolor rounded-[65.5px] relative py-4 px-10 pl-7 font-semibold pr-[8rem] md:left-[8rem] itemchoose'>
<h6 className='text-white'>{WhychooseContent == null || WhychooseContent == '' || WhychooseContent == undefined ? 'Free Title and References' : WhychooseContent.option[4].title}</h6>
<div className='absolute top-0 right-[-1px] rounded-full bg-navactive w-14 h-14 flex justify-center items-center'>
    <Image src={WhychooseContent == null || WhychooseContent == '' || WhychooseContent == undefined ? '' : WhychooseContent.option[4].icon} alt="market" width={30} style={{mixBlendMode:'difference'}} />
</div>
</div>
</div>
</>
)
}

export default Choosebenifit