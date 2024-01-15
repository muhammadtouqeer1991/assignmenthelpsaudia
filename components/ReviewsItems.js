    import React from 'react'
    import { FaStar } from "react-icons/fa6";
    import writerImg from '../public/assets/writerImg.png';
    import Image from 'next/image';

    const ReviewsItems = ({myReview}) => {
    return (
    <>
    <div className='pt-24 flex flex-wrap gap-20 pb-[5rem]'>

    {
    myReview.map((item,key) => {
    return (
      <>
        <div className='bg-navactive py-5 px-5 rounded-[25px] relative h-fit w-[45%]'>

    <div style={{background:'radial-gradient(50% 50% at 50% 50%, rgba(22, 27, 33, 0.80) 0%, rgba(22, 27, 33, 0.78) 100%)',backdropFilter:'blur(20px)'}} className='py-4 px-6 rounded-[25px] relative top-[-3rem] md:right-[-2.6rem] border-2 border-navactive'>
    <div className='flex items-center'>
    <div>
    <h4 className='text-[16px] font-bold text-white'>Ian Wesley</h4>
    <div className='flex items-center justify-between gap-10'>
    <h5 className='text-[16px] text-white'>Riyadh, Saudia Arabia </h5>
    <div className='flex gap-1'><FaStar color='#FED207' size={23} /><FaStar color='#FED207' size={23}  /><FaStar color='#FED207' size={23}  /><FaStar color='#FED207' size={23}  /><FaStar color='#FED207' size={23}  /></div>
    </div>
    </div>

    <div>
    <div className='flex z-0 relative md:left-[4rem]'>
    <div className='absolute top-[-33.9px] left-[-3rem] z-[-1]'>
    <svg xmlns="http://www.w3.org/2000/svg" width="122" height="62" viewBox="0 0 131 85" fill="none">
    <path d="M43.5 84.5C43.5 54 41 10.5 0.115082 0L130.885 0L43.5 84.5Z" fill="#28D07E"/>
    </svg>
    </div>

    <div className='rounded-full w-[115px] h-[115px] bg-navactive flex justify-center items-center relative top-[-2.1rem] left-[-0.2rem]'>
    <Image src={writerImg} width={80} alt="market" />
    </div>

    </div>
    </div>
    </div>
    <p className='text-[16px] text-white'>{item.para}</p>

    </div>

    <div className='absolute bottom-[-5rem] left-[-10px]'>
    <svg xmlns="http://www.w3.org/2000/svg" width="105" height="113" viewBox="0 0 105 113" fill="none">
    <g filter="url(#filter0_d_23_371)">
    <path d="M10 9.5C16.0549 35.7944 42 29.5 95 31L10 102V9.5Z" fill="#28D07E"/>
    </g>
    <defs>
    <filter id="filter0_d_23_371" x="0" y="0.5" width="105" height="112.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dy="1"/>
    <feGaussianBlur stdDeviation="5"/>
    <feComposite in2="hardAlpha" operator="out"/>
    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_23_371"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_23_371" result="shape"/>
    </filter>
    </defs>
    </svg>
    </div>

    </div>
      </>
    )
    })
    }

    </div>
    </>
    )
    }

    export default ReviewsItems