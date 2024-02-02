"use client"
import React, { useRef } from 'react'
import leftarrow from '../public/assets/leftarrow.svg';
import rightarrow from '../public/assets/rightarrow.svg';
import assignemnt from '../public/assets/assignemnt.svg';
import essay from '../public/assets/essay.svg';
import dissertation from '../public/assets/dissertation.svg';
import homework from '../public/assets/homework.svg';
import Image from 'next/image';
import Link from 'next/link';
import { LuCopyPlus } from "react-icons/lu";
import { Swiper, SwiperSlide,useSwiper, useSwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination,Navigation } from 'swiper/modules';

const Premiumitems = ({PremiumservicesContent}) => {

const swiperRef = useRef();
const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)
return (
<>
<div className='md:w-[1500px] mx-auto flex-col md:flex-row flex gap-7 items-center'>
{
PremiumservicesContent == null || PremiumservicesContent == undefined || PremiumservicesContent == '' ? <>
<div className='text-center border-2 border-navactive py-16 px-5 rounded-[10px]'>
<h6 className='text-[40px] text-left pb-8 text-white font-semibold leading-[44px]'>Our Premium Services</h6>
<div className='flex justify-center items-center gap-5'>
<Link href="#"><Image src={leftarrow} alt="market" /></Link>
<Link href="#"><Image src={rightarrow} alt="market" /></Link>
</div>
</div>

<div className='flex flex-col justify-center items-center text-center border-2 border-navactive py-6 px-5 rounded-[10px]' style={{background:'radial-gradient(50% 50% at 50% 50%, rgba(40, 208, 126, 0.40) 0%, rgba(40, 208, 126, 0.30) 100%)'}}>
<Image src={assignemnt} alt="market" />
<h5 className='text-[26px] text-white font-semibold pt-2 pb-1'>Assignments</h5>
<p className='text-[14px] leading-normal text-white'>Troubling assignments every day? Don’t let yourself down with too many assignments on hand and let us conquer your Assignment troubles for you.</p>
<div className='flex justify-end items-end w-full'>
<Link href="#" className='mt-5 flex items-center gap-2 text-white'>Read more <LuCopyPlus /></Link>
</div>
</div>
<div className='flex flex-col justify-center items-center text-center border-2 border-navactive py-6 px-5 rounded-[10px]'>
<Image src={essay} alt="market" />
<h5 className='text-[26px] text-white font-semibold pt-2 pb-1'>Essays</h5>
<p className='text-[14px] leading-normal text-white'>Crafting your essays to perfection is what we do best! With our essay experts on board, we can compose & customize any essay on demand.</p>
<div className='flex justify-end items-end w-full'>
<Link href="#" className='mt-5 flex items-center gap-2 text-white'>Read more <LuCopyPlus color='#28D07E' /></Link>
</div>
</div>
<div className='flex flex-col justify-center items-center text-center border-2 border-navactive py-6 px-5 rounded-[10px]'>
<Image src={dissertation} alt="market" />
<h5 className='text-[26px] text-white font-semibold pt-2 pb-1'>Dissertations</h5>
<p className='text-[14px] leading-normal text-white'>Troubling assignments every day? Don’t let yourself down with too many assignments on hand and let us conquer your Assignment troubles for you.</p>
<div className='flex justify-end items-end w-full'>
<Link href="#" className='mt-5 flex items-center gap-2 text-white'>Read more <LuCopyPlus color='#28D07E'  /></Link>
</div>
</div>
<div className='flex flex-col justify-center items-center text-center border-2 border-navactive py-6 px-5 rounded-[10px]'>
<Image src={homework} alt="market" />
<h5 className='text-[26px] text-white font-semibold pt-2 pb-1'>Homework</h5>
<p className='text-[14px] leading-normal text-white'>Troubling assignments every day? Don’t let yourself down with too many assignments on hand and let us conquer your Assignment troubles for you.</p>
<div className='flex justify-end items-end w-full'>
<Link href="#" className='mt-5 flex items-center gap-2 text-white'>Read more <LuCopyPlus color='#28D07E'  /></Link>
</div>
</div>
</> : <>

<div className='text-center border-2 border-navactive py-16 px-5 rounded-[10px]' style={{height:'401px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
<h6 className='text-[40px] text-left pb-8 text-white font-semibold leading-[44px]'>Our Premium Services</h6>
<div className='flex justify-center items-center gap-5'>
<Link href="javascript:;" ref={navigationPrevRef}><Image src={leftarrow} alt="market" /></Link>
<Link href="#" ref={navigationNextRef}><Image src={rightarrow} alt="market" /></Link>
</div>
</div>
<Swiper
onSwiper={(swiper) => {
swiperRef.current = swiper;
}}
pagination={{
clickable: true,
}}
slidesPerView={1}
spaceBetween={10}
navigation={{
    prevEl: navigationPrevRef.current,
    nextEl: navigationNextRef.current,
  }}
onBeforeInit={(swiper) => {
swiper.params.navigation.prevEl = navigationPrevRef.current;
swiper.params.navigation.nextEl = navigationNextRef.current;
}}
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
slidesPerView: 4,
spaceBetween: 10,
},
}}
modules={[Pagination,Navigation]}
className="mySwiper"
>
{
PremiumservicesContent.option.map((item,key) => {
return (
<SwiperSlide key={key+1}>
    <div className='flex flex-col justify-center items-center text-center border-2 border-navactive py-6 px-5 rounded-[10px]' style={{background:'radial-gradient(50% 50% at 50% 50%, rgba(40, 208, 126, 0.40) 0%, rgba(40, 208, 126, 0.30) 100%)',height:'100%'}} key={key+1}>
    <Image src={item.icon} alt="market" />
    <h5 className='text-[26px] text-white font-semibold pt-2 pb-1'>{item.title}</h5>
    <p className='text-[14px] leading-normal text-white'>{item.para}</p>
    <div className='flex justify-end items-end w-full'>
    <Link href="#" className='mt-5 flex items-center gap-2 text-white'>Read more <LuCopyPlus /></Link>
    </div>
    </div>
</SwiperSlide>
)
})
}
</Swiper>
{/* <div className='flex flex-col justify-center items-center text-center border-2 border-navactive py-6 px-5 rounded-[10px]'>
<Image src={essay} alt="market" />
<h5 className='text-[26px] text-white font-semibold pt-2 pb-1'>Essays</h5>
<p className='text-[14px] leading-normal text-white'>Crafting your essays to perfection is what we do best! With our essay experts on board, we can compose & customize any essay on demand.</p>
<div className='flex justify-end items-end w-full'>
<Link href="#" className='mt-5 flex items-center gap-2 text-white'>Read more <LuCopyPlus color='#28D07E' /></Link>
</div>
</div>
<div className='flex flex-col justify-center items-center text-center border-2 border-navactive py-6 px-5 rounded-[10px]'>
<Image src={dissertation} alt="market" />
<h5 className='text-[26px] text-white font-semibold pt-2 pb-1'>Dissertations</h5>
<p className='text-[14px] leading-normal text-white'>Troubling assignments every day? Don’t let yourself down with too many assignments on hand and let us conquer your Assignment troubles for you.</p>
<div className='flex justify-end items-end w-full'>
<Link href="#" className='mt-5 flex items-center gap-2 text-white'>Read more <LuCopyPlus color='#28D07E'  /></Link>
</div>
</div>
<div className='flex flex-col justify-center items-center text-center border-2 border-navactive py-6 px-5 rounded-[10px]'>
<Image src={homework} alt="market" />
<h5 className='text-[26px] text-white font-semibold pt-2 pb-1'>Homework</h5>
<p className='text-[14px] leading-normal text-white'>Troubling assignments every day? Don’t let yourself down with too many assignments on hand and let us conquer your Assignment troubles for you.</p>
<div className='flex justify-end items-end w-full'>
<Link href="#" className='mt-5 flex items-center gap-2 text-white'>Read more <LuCopyPlus color='#28D07E'  /></Link>
</div>
</div> */}

</>
}


</div> 
</>
)
}

export default Premiumitems