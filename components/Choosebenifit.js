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
<div className='flex flex-col gap-4'>
<div className='bg-navactive rounded-[65.5px] relative py-4 px-10 pl-7 font-semibold pr-[8rem] md:left-[8rem]'>
<h6>{WhychooseContent == null || WhychooseContent == '' || WhychooseContent == undefined ? 'Free Unlimited Revisions' : WhychooseContent.option[0].title}</h6>
<div className='absolute top-0 right-[-1px] rounded-full bg-navcolor w-14 h-14 flex justify-center items-center'>
    <Image src={revision} alt="market" />
</div>
</div>
<div className='bg-benifitcolor rounded-[65.5px] relative py-4 px-10 pl-7 font-semibold pr-[8rem] md:left-[4rem]'>
<h6 className='text-white'>{WhychooseContent == null || WhychooseContent == '' || WhychooseContent == undefined ? '650+ Subject Specialist' : WhychooseContent.option[1].title}</h6>
<div className='absolute top-0 right-[-1px] rounded-full bg-navactive w-14 h-14 flex justify-center items-center'>
    <Image src={specialist} alt="market" />
</div>
</div>
<div className='bg-benifitcolor rounded-[65.5px] relative py-4 px-10 pl-7 font-semibold pr-[8rem]'>
<h6 className='text-white'>{WhychooseContent == null || WhychooseContent == '' || WhychooseContent == undefined ? 'Complete Ownership' : WhychooseContent.option[2].title}</h6>
<div className='absolute top-0 right-[-1px] rounded-full bg-navactive w-14 h-14 flex justify-center items-center'>
    <Image src={ownership} alt="market" />
</div>
</div>
<div className='bg-benifitcolor rounded-[65.5px] relative py-4 px-10 pl-7 font-semibold pr-[8rem] md:left-[4rem]'>
<h6 className='text-white'>{WhychooseContent == null || WhychooseContent == '' || WhychooseContent == undefined ? 'Free Plagiarism Report' : WhychooseContent.option[3].title}</h6>
<div className='absolute top-0 right-[-1px] rounded-full bg-navactive w-14 h-14 flex justify-center items-center'>
    <Image src={plagiarism} alt="market" />
</div>
</div>
<div className='bg-benifitcolor rounded-[65.5px] relative py-4 px-10 pl-7 font-semibold pr-[8rem] md:left-[8rem]'>
<h6 className='text-white'>{WhychooseContent == null || WhychooseContent == '' || WhychooseContent == undefined ? 'Free Title and References' : WhychooseContent.option[4].title}</h6>
<div className='absolute top-0 right-[-1px] rounded-full bg-navactive w-14 h-14 flex justify-center items-center'>
    <Image src={reference} alt="market" />
</div>
</div>
</div>
</>
)
}

export default Choosebenifit