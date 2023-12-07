import React from 'react'
import writerImg from '../public/assets/writerImg.png';
import Image from 'next/image';
import { FaStar } from "react-icons/fa6";

const Writeritems = () => {
return (
<>
<div className='flex gap-8 pt-8'>

    <div className='w-full bg-topbarcolor rounded-[25px]'>
        <div className='flex z-0 relative left-[4rem]'>

            <div className='absolute top-[-22.4px] left-[-2.9rem] z-[-1]'>
            <svg xmlns="http://www.w3.org/2000/svg" width="131" height="85" viewBox="0 0 131 85" fill="none">
            <path d="M43.5 84.5C43.5 54 41 10.5 0.115082 0L130.885 0L43.5 84.5Z" fill="#28D07E"/>
            </svg>
            </div>

            <div className='rounded-full w-[260px] h-[187px] bg-navactive flex justify-center items-center relative top-[-1.4rem] left-[-0.2rem]'>
                <Image src={writerImg} width={120} />
            </div>
            <div className='bg-navactive w-full relative left-[-3rem] z-[-1] h-20 flex justify-center items-center text-[26px] text-white font-bold rounded-tr-[20px]'>
                Joseph Brown
            </div>
        </div>
        <div className='flex py-4 px-6 pt-0 gap-6'>
            <div className='flex-[80%]'>
                <h5 className='text-[26px] text-white font-bold'>PhD in Law</h5>
                <h6 className='text-[16px] font-normal text-white'>Years of Experience: 10+</h6>
                <h6 className='text-white text-[16px] font-bold pt-2'>Area of expertise</h6>
                <p className='text-[16px] text-white font-normal pt-2'>Doctorate from the University of Birmingham and having years of experience in practicing law, He is one of our most top-notch law dissertation writer.</p>
            </div>
            <div className='flex  flex-col items-start relative top-[-4rem]'>
                <div className='flex justify-between gap-4 items-center w-full'>
                <div className='flex gap-1'><FaStar color='#FED207' size={23} /><FaStar color='#FED207' size={23}  /><FaStar color='#FED207' size={23}  /><FaStar color='#FED207' size={23}  /><FaStar color='#FED207' size={23}  /></div>
                <div>
                    <button className='border-2 border-navactive py-3 px-8 rounded-[10px] text-[16px] text-white font-normal'>Hire Me</button>
                </div>
                </div>
                <div>
                    <h4 className='text-[16px] text-white font-normal pt-5'>Rated: (98% Success Rate)</h4>
                    <h5 className='text-[16px] text-white font-normal pt-4'>Completed Projects</h5>
                    <p className='text-[16px] font-bold text-white pt-4'>201 Projects Completed</p>
                    <p className='text-[16px] text-white font-normal pt-4 pb-4'>Expertise</p>
                    <ul className='flex flex-wrap items-center gap-2'>
                        <li className='bg-navcolor py-2 px-4 rounded-[16px] flex-1 text-[14px] text-white'>Business Law</li>
                        <li className='bg-navcolor py-2 px-4 rounded-[16px] flex-1 text-[14px] text-white'>Corporate Law</li>
                        <li className='bg-navcolor py-2 px-4 rounded-[16px] flex-1 text-[14px] text-white'>Family Law</li>
                        <li className='bg-navcolor py-2 px-4 rounded-[16px] flex-1 text-[14px] text-white'>Tort Law</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div className='w-full bg-topbarcolor rounded-[25px]'>
        <div className='flex z-0 relative left-[4rem]'>

            <div className='absolute top-[-22.4px] left-[-2.9rem] z-[-1]'>
            <svg xmlns="http://www.w3.org/2000/svg" width="131" height="85" viewBox="0 0 131 85" fill="none">
            <path d="M43.5 84.5C43.5 54 41 10.5 0.115082 0L130.885 0L43.5 84.5Z" fill="#28D07E"/>
            </svg>
            </div>

            <div className='rounded-full w-[260px] h-[187px] bg-navactive flex justify-center items-center relative top-[-1.4rem] left-[-0.2rem]'>
                <Image src={writerImg} width={120} />
            </div>
            <div className='bg-navactive w-full relative left-[-3rem] z-[-1] h-20 flex justify-center items-center text-[26px] text-white font-bold rounded-tr-[20px]'>
                Joseph Brown
            </div>
        </div>
        <div className='flex py-4 px-6 pt-0 gap-6'>
            <div className='flex-[80%]'>
                <h5 className='text-[26px] text-white font-bold'>PhD in Law</h5>
                <h6 className='text-[16px] font-normal text-white'>Years of Experience: 10+</h6>
                <h6 className='text-white text-[16px] font-bold pt-2'>Area of expertise</h6>
                <p className='text-[16px] text-white font-normal pt-2'>Doctorate from the University of Birmingham and having years of experience in practicing law, He is one of our most top-notch law dissertation writer.</p>
            </div>
            <div className='flex  flex-col items-start relative top-[-4rem]'>
                <div className='flex justify-between gap-4 items-center w-full'>
                <div className='flex gap-1'><FaStar color='#FED207' size={23} /><FaStar color='#FED207' size={23}  /><FaStar color='#FED207' size={23}  /><FaStar color='#FED207' size={23}  /><FaStar color='#FED207' size={23}  /></div>
                <div>
                    <button className='border-2 border-navactive py-3 px-8 rounded-[10px] text-[16px] text-white font-normal'>Hire Me</button>
                </div>
                </div>
                <div>
                    <h4 className='text-[16px] text-white font-normal pt-5'>Rated: (98% Success Rate)</h4>
                    <h5 className='text-[16px] text-white font-normal pt-4'>Completed Projects</h5>
                    <p className='text-[16px] font-bold text-white pt-4'>201 Projects Completed</p>
                    <p className='text-[16px] text-white font-normal pt-4 pb-4'>Expertise</p>
                    <ul className='flex flex-wrap items-center gap-2'>
                        <li className='bg-navcolor py-2 px-4 rounded-[16px] flex-1 text-[14px] text-white'>Business Law</li>
                        <li className='bg-navcolor py-2 px-4 rounded-[16px] flex-1 text-[14px] text-white'>Corporate Law</li>
                        <li className='bg-navcolor py-2 px-4 rounded-[16px] flex-1 text-[14px] text-white'>Family Law</li>
                        <li className='bg-navcolor py-2 px-4 rounded-[16px] flex-1 text-[14px] text-white'>Tort Law</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
</>
)
}

export default Writeritems