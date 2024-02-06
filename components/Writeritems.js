"use client"
import React, { useRef } from 'react'
import writerImg from '../public/assets/writerImg.png';
import Image from 'next/image';
import { FaStar } from "react-icons/fa6";
import { Swiper, SwiperSlide,useSwiper } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination,Navigation } from 'swiper/modules';

const Writeritems = ({OurwritersContent}) => {
const swiperRef = useRef();
return (
<>
<div className='md:flex flex-col md:flex-row  gap-8 pt-8 writerD'>
<Swiper
onSwiper={(swiper) => {
swiperRef.current = swiper;
}}
pagination={{
clickable: true,
}}
slidesPerView={1}
spaceBetween={10}
navigation
breakpoints={{
640: {
slidesPerView: 1,
spaceBetween: 10,
},
768: {
slidesPerView: 1,
spaceBetween: 10,
},
1024: {
slidesPerView: 2,
spaceBetween: 10,
},
}}
modules={[Pagination,Navigation]}
className="mySwiper"
>
{
OurwritersContent == null || OurwritersContent == '' || OurwritersContent == undefined ? <>
<SwiperSlide>
<div className='w-full bg-topbarcolor rounded-[25px]'>
<div className='flex z-0 relative md:left-[4rem]'>

<div className='absolute top-[-22.4px] left-[-2.9rem] z-[-1]'>
<svg xmlns="http://www.w3.org/2000/svg" width="131" height="85" viewBox="0 0 131 85" fill="none">
<path d="M43.5 84.5C43.5 54 41 10.5 0.115082 0L130.885 0L43.5 84.5Z" fill="#28D07E"/>
</svg>
</div>

<div className='rounded-full w-[260px] h-[187px] bg-navactive flex justify-center items-center relative top-[-1.4rem] left-[-0.2rem]'>
<Image src={writerImg} width={120} alt="market" />
</div>
<div className='bg-navactive w-full relative left-[-3rem] z-[-1] h-20 flex justify-center items-center text-[26px] text-white font-bold rounded-tr-[20px]'>
Joseph Brown
</div>
</div>
<div className='flex md:flex-row flex-col py-4 px-6 pt-0 gap-6'>
<div className='flex-[80%]'>
<h5 className='text-[26px] text-white font-bold'>PhD in Law</h5>
<h6 className='text-[16px] font-normal text-white'>Years of Experience: 10+</h6>
<h6 className='text-white text-[16px] font-bold pt-2'>Area of expertise</h6>
<p className='text-[16px] text-white font-normal pt-2'>Doctorate from the University of Birmingham and having years of experience in practicing law, He is one of our most top-notch law dissertation writer.</p>
</div>
<div className='flex md:flex-auto flex-col items-start relative md:top-[-4rem]'>
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
</SwiperSlide>
<SwiperSlide>
<div className='w-full bg-topbarcolor rounded-[25px]'>
<div className='flex z-0 relative left-[4rem]'>

<div className='absolute top-[-22.4px] left-[-2.9rem] z-[-1]'>
<svg xmlns="http://www.w3.org/2000/svg" width="131" height="85" viewBox="0 0 131 85" fill="none">
<path d="M43.5 84.5C43.5 54 41 10.5 0.115082 0L130.885 0L43.5 84.5Z" fill="#28D07E"/>
</svg>
</div>

<div className='rounded-full w-[260px] h-[187px] bg-navactive flex justify-center items-center relative top-[-1.4rem] left-[-0.2rem]'>
<Image src={writerImg} width={120} alt="market" />
</div>
<div className='bg-navactive w-full relative left-[-3rem] z-[-1] h-20 flex justify-center items-center text-[26px] text-white font-bold rounded-tr-[20px]'>
Joseph Brown
</div>
</div>
<div className='flex md:flex-row flex-col py-4 px-6 pt-0 gap-6'>
<div className='flex-[80%]'>
<h5 className='text-[26px] text-white font-bold'>PhD in Law</h5>
<h6 className='text-[16px] font-normal text-white'>Years of Experience: 10+</h6>
<h6 className='text-white text-[16px] font-bold pt-2'>Area of expertise</h6>
<p className='text-[16px] text-white font-normal pt-2'>Doctorate from the University of Birmingham and having years of experience in practicing law, He is one of our most top-notch law dissertation writer.</p>
</div>
<div className='flex  flex-col items-start relative md:top-[-4rem]'>
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
</SwiperSlide>

<SwiperSlide>
<div className='w-full bg-topbarcolor rounded-[25px]'>
<div className='flex z-0 relative md:left-[4rem]'>

<div className='absolute top-[-22.4px] left-[-2.9rem] z-[-1]'>
<svg xmlns="http://www.w3.org/2000/svg" width="131" height="85" viewBox="0 0 131 85" fill="none">
<path d="M43.5 84.5C43.5 54 41 10.5 0.115082 0L130.885 0L43.5 84.5Z" fill="#28D07E"/>
</svg>
</div>

<div className='rounded-full w-[260px] h-[187px] bg-navactive flex justify-center items-center relative top-[-1.4rem] left-[-0.2rem]'>
<Image src={writerImg} width={120} alt="market" />
</div>
<div className='bg-navactive w-full relative left-[-3rem] z-[-1] h-20 flex justify-center items-center text-[26px] text-white font-bold rounded-tr-[20px]'>
Joseph Brown
</div>
</div>
<div className='flex md:flex-row flex-col py-4 px-6 pt-0 gap-6'>
<div className='flex-[80%]'>
<h5 className='text-[26px] text-white font-bold'>PhD in Law</h5>
<h6 className='text-[16px] font-normal text-white'>Years of Experience: 10+</h6>
<h6 className='text-white text-[16px] font-bold pt-2'>Area of expertise</h6>
<p className='text-[16px] text-white font-normal pt-2'>Doctorate from the University of Birmingham and having years of experience in practicing law, He is one of our most top-notch law dissertation writer.</p>
</div>
<div className='flex md:flex-auto flex-col items-start relative md:top-[-4rem]'>
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
</SwiperSlide>
<SwiperSlide>
<div className='w-full bg-topbarcolor rounded-[25px]'>
<div className='flex z-0 relative left-[4rem]'>

<div className='absolute top-[-22.4px] left-[-2.9rem] z-[-1]'>
<svg xmlns="http://www.w3.org/2000/svg" width="131" height="85" viewBox="0 0 131 85" fill="none">
<path d="M43.5 84.5C43.5 54 41 10.5 0.115082 0L130.885 0L43.5 84.5Z" fill="#28D07E"/>
</svg>
</div>

<div className='rounded-full w-[260px] h-[187px] bg-navactive flex justify-center items-center relative top-[-1.4rem] left-[-0.2rem]'>
<Image src={writerImg} width={120} alt="market" />
</div>
<div className='bg-navactive w-full relative left-[-3rem] z-[-1] h-20 flex justify-center items-center text-[26px] text-white font-bold rounded-tr-[20px]'>
Joseph Brown
</div>
</div>
<div className='flex md:flex-row flex-col py-4 px-6 pt-0 gap-6'>
<div className='flex-[80%]'>
<h5 className='text-[26px] text-white font-bold'>PhD in Law</h5>
<h6 className='text-[16px] font-normal text-white'>Years of Experience: 10+</h6>
<h6 className='text-white text-[16px] font-bold pt-2'>Area of expertise</h6>
<p className='text-[16px] text-white font-normal pt-2'>Doctorate from the University of Birmingham and having years of experience in practicing law, He is one of our most top-notch law dissertation writer.</p>
</div>
<div className='flex  flex-col items-start relative md:top-[-4rem]'>
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
</SwiperSlide>
<SwiperSlide>
<div className='w-full bg-topbarcolor rounded-[25px]'>
<div className='flex z-0 relative md:left-[4rem]'>

<div className='absolute top-[-22.4px] left-[-2.9rem] z-[-1]'>
<svg xmlns="http://www.w3.org/2000/svg" width="131" height="85" viewBox="0 0 131 85" fill="none">
<path d="M43.5 84.5C43.5 54 41 10.5 0.115082 0L130.885 0L43.5 84.5Z" fill="#28D07E"/>
</svg>
</div>

<div className='rounded-full w-[260px] h-[187px] bg-navactive flex justify-center items-center relative top-[-1.4rem] left-[-0.2rem]'>
<Image src={writerImg} width={120} alt="market" />
</div>
<div className='bg-navactive w-full relative left-[-3rem] z-[-1] h-20 flex justify-center items-center text-[26px] text-white font-bold rounded-tr-[20px]'>
Joseph Brown
</div>
</div>
<div className='flex md:flex-row flex-col py-4 px-6 pt-0 gap-6'>
<div className='flex-[80%]'>
<h5 className='text-[26px] text-white font-bold'>PhD in Law</h5>
<h6 className='text-[16px] font-normal text-white'>Years of Experience: 10+</h6>
<h6 className='text-white text-[16px] font-bold pt-2'>Area of expertise</h6>
<p className='text-[16px] text-white font-normal pt-2'>Doctorate from the University of Birmingham and having years of experience in practicing law, He is one of our most top-notch law dissertation writer.</p>
</div>
<div className='flex md:flex-auto flex-col items-start relative md:top-[-4rem]'>
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
</SwiperSlide>
<SwiperSlide>
<div className='w-full bg-topbarcolor rounded-[25px]'>
<div className='flex z-0 relative left-[4rem]'>

<div className='absolute top-[-22.4px] left-[-2.9rem] z-[-1]'>
<svg xmlns="http://www.w3.org/2000/svg" width="131" height="85" viewBox="0 0 131 85" fill="none">
<path d="M43.5 84.5C43.5 54 41 10.5 0.115082 0L130.885 0L43.5 84.5Z" fill="#28D07E"/>
</svg>
</div>

<div className='rounded-full w-[260px] h-[187px] bg-navactive flex justify-center items-center relative top-[-1.4rem] left-[-0.2rem]'>
<Image src={writerImg} width={120} alt="market" />
</div>
<div className='bg-navactive w-full relative left-[-3rem] z-[-1] h-20 flex justify-center items-center text-[26px] text-white font-bold rounded-tr-[20px]'>
Joseph Brown
</div>
</div>
<div className='flex md:flex-row flex-col py-4 px-6 pt-0 gap-6'>
<div className='flex-[80%]'>
<h5 className='text-[26px] text-white font-bold'>PhD in Law</h5>
<h6 className='text-[16px] font-normal text-white'>Years of Experience: 10+</h6>
<h6 className='text-white text-[16px] font-bold pt-2'>Area of expertise</h6>
<p className='text-[16px] text-white font-normal pt-2'>Doctorate from the University of Birmingham and having years of experience in practicing law, He is one of our most top-notch law dissertation writer.</p>
</div>
<div className='flex  flex-col items-start relative md:top-[-4rem]'>
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
</SwiperSlide>
</> : <>
{
OurwritersContent.option.map((item,key) => {
return (
<SwiperSlide key={key+1}>
<div className='w-full bg-topbarcolor rounded-[25px]'>
<div className='flex z-0 relative left-[4rem]' >

<div className='absolute top-[-22.4px] left-[-2.9rem] z-[-1]'>
<svg xmlns="http://www.w3.org/2000/svg" width="131" height="85" viewBox="0 0 131 85" fill="none">
<path d="M43.5 84.5C43.5 54 41 10.5 0.115082 0L130.885 0L43.5 84.5Z" fill="#28D07E"/>
</svg>
</div>

<div className='rounded-full w-[260px] h-[187px] bg-navactive flex justify-center items-center relative top-[-1.4rem] left-[-0.2rem]'>
<Image src={item.image} width={120} alt="market" />
</div>
<div className='bg-navactive w-full relative left-[-3rem] z-[-1] h-20 flex justify-center items-center text-[26px] text-white font-bold rounded-tr-[20px] flex-col'>
{item.name}
<div className='flex gap-0'><FaStar color='#FED207' size={18} /><FaStar color='#FED207' size={18}  /><FaStar color='#FED207' size={18}  /><FaStar color='#FED207' size={18}  /><FaStar color='#FED207' size={18}  /></div>
</div>
</div>
<div className='flex md:flex-row flex-col py-4 px-6 pt-0 gap-6 md:h-[200px]'>

<div className='flex  flex-col items-end relative md:top-[-5.4rem] md:w-[77%]'>
<div>
<h4 className='text-[16px] text-white font-normal pt-2'>{item.successrate}</h4>
<p className='text-[16px] font-bold text-white pt-2'>{item.completeProject}</p>
{/* <p className='text-[16px] text-white font-normal pt-2 pb-4'>Expertise</p> */}
</div>
</div>

</div>
<div className='py-4 px-6 pt-0 mt-[-11rem] flex flex-col w-100'>
<p className='text-[16px] text-white font-normal pt-2'>{item.para}</p>
</div>


<div className='py-4 px-2 mt-[-1rem]'>
    
<ul className='flex flex-wrap items-center gap-2'>
{
   item.Expertise.map((items,key) => {
    return (
        <li className={`bg-navcolor py-2 px-4 rounded-[16px] flex-[40%] text-[12px] text-white text-center`} key={key+1}>{items.title}</li> 
    )
   }) 
}
</ul>
</div>

</div>
</SwiperSlide>
)
})
}


</>
}


</Swiper>


</div>
</>
)
}

export default Writeritems