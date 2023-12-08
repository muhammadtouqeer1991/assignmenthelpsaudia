import React from 'react'
import revision from '../public/assets/revision.svg';
import specialist from '../public/assets/specialist.svg';
import ownership from '../public/assets/ownership.svg';
import plagiarism from '../public/assets/plagiarism.svg';
import reference from '../public/assets/reference.svg';
import Image from 'next/image';

const Choosebenifit = () => {
  return (
   <>
     <div className='flex flex-col gap-4'>
        <div className='bg-navactive rounded-[65.5px] relative py-4 px-10 pl-7 font-semibold pr-[8rem] left-[8rem]'>
            <h6>Free Unlimited Revisions</h6>
            <div className='absolute top-0 right-[-1px] rounded-full bg-navcolor w-14 h-14 flex justify-center items-center'>
                <Image src={revision} alt="market" />
            </div>
        </div>
        <div className='bg-benifitcolor rounded-[65.5px] relative py-4 px-10 pl-7 font-semibold pr-[8rem] left-[4rem]'>
            <h6 className='text-white'>650+ Subject Specialist</h6>
            <div className='absolute top-0 right-[-1px] rounded-full bg-navactive w-14 h-14 flex justify-center items-center'>
                <Image src={specialist} alt="market" />
            </div>
        </div>
        <div className='bg-benifitcolor rounded-[65.5px] relative py-4 px-10 pl-7 font-semibold pr-[8rem]'>
            <h6 className='text-white'>Complete Ownership</h6>
            <div className='absolute top-0 right-[-1px] rounded-full bg-navactive w-14 h-14 flex justify-center items-center'>
                <Image src={ownership} alt="market" />
            </div>
        </div>
        <div className='bg-benifitcolor rounded-[65.5px] relative py-4 px-10 pl-7 font-semibold pr-[8rem] left-[4rem]'>
            <h6 className='text-white'>Free Plagiarism Report</h6>
            <div className='absolute top-0 right-[-1px] rounded-full bg-navactive w-14 h-14 flex justify-center items-center'>
                <Image src={plagiarism} alt="market" />
            </div>
        </div>
        <div className='bg-benifitcolor rounded-[65.5px] relative py-4 px-10 pl-7 font-semibold pr-[8rem] left-[8rem]'>
            <h6 className='text-white'>Free Title and References</h6>
            <div className='absolute top-0 right-[-1px] rounded-full bg-navactive w-14 h-14 flex justify-center items-center'>
                <Image src={reference} alt="market" />
            </div>
        </div>
     </div>
   </>
  )
}

export default Choosebenifit