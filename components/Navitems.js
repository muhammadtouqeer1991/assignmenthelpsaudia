'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import brandLogo from '../public/assets/brandLogo.webp';
import { BiHomeAlt,BiUserPin } from "react-icons/bi";
import { GrServices } from "react-icons/gr";
import { ImPriceTags } from "react-icons/im";
import { RiUserHeartLine } from "react-icons/ri";
import { FiUserCheck } from "react-icons/fi";
import { FaBars } from "react-icons/fa";
import { usePathname } from 'next/navigation'


const Navitems = () => {


const [active, setActive] = useState(false);
const [actives, setActives] = useState(false);
const pathname = usePathname();
const HamburgerBtn = () => {
    setActive(!active);
}
const HamburgerBtn2 = () => {
    setActives(!actives);
}


return (
<>  
<Link href="/"><Image src={brandLogo} alt="market" className='md:w-[251px] w-[180px]' /></Link>
<FaBars className='md:hidden lg:hidden sm:hidden' size={30} color='#fff' onClick={()=>HamburgerBtn()} />
<nav className={`mobileMenu md:flex ${active == true ? 'mobileMenu' : 'hidden'} items-center border-b-[10px] border-navactive z-[1] md:w-[610px]`}>
<Link href="/" className={`${pathname == '/' ? 
'md:pb-[1.5rem] md:pt-[1.2rem] pb-[0.4rem] pt-[0.4rem] flex md:flex-col flex-row justify-center items-center bg-navactive px-[30px] rounded-tr-[18px] relative md:before:absolute md:before:w-[81px] before:w-[0px] before:h-[86%] before:bg-navactive before:skew-x-[17deg] before:top-[13px] before:bottom-0 before:right-[-12px] before:z-[-1] z-[1]' : 

'md:pb-[1.5rem] md:pt-[1.2rem] pb-[0.4rem] pt-[0.4rem]  flex md:flex-col flex-row justify-center items-center bg-navinactive px-[30px] rounded-tr-[18px] relative md:before:absolute md:before:w-[81px] before:w-[0px] before:h-[86%] before:bg-navinactive before:skew-x-[17deg] before:top-[13px] before:bottom-0 before:right-[-13px] before:z-[-1] z-[-1] text-white' } `} onClick={()=>HamburgerBtn(setActive(true))}>
    <BiHomeAlt size={25} />
    Home
</Link>
<Link href="/about-us" className={`${pathname == '/about-us' ? 

'md:pb-[1.5rem] md:pt-[1.2rem] pb-[0.4rem] pt-[0.4rem] flex md:flex-col flex-row justify-center items-center bg-navactive px-[30px] rounded-tr-[18px] relative md:before:absolute before:w-[0px] md:before:w-[81px] before:h-[86%] before:bg-navactive before:skew-x-[17deg] before:top-[13px] before:bottom-0 before:right-[-12px] before:z-[-1] z-[1]' : 

'md:pb-[1.5rem] md:pt-[1.2rem] pb-[0.4rem] pt-[0.4rem]  flex md:flex-col flex-row justify-center items-center bg-navinactive px-[30px] rounded-tr-[18px] relative md:before:absolute before:w-[0px] md:before:w-[81px] before:h-[86%] before:bg-navinactive before:skew-x-[17deg] before:top-[13px] before:bottom-0 before:right-[-13px] before:z-[-1] z-[-1] text-white' } `} onClick={()=>HamburgerBtn(setActive(true))}>
    <BiUserPin size={25} color={`${pathname == '/about-us' ? '':'#28D07E' } `} />
    About
</Link>

<Link href="javascript:;" className={`serviceHover ${pathname == '/essay-writing' || pathname == '/cipd-assignment' || pathname == '/homework-help' || pathname == '/personal-statement' ? 
'md:pb-[1.5rem] md:pt-[1.2rem] pb-[0.4rem] pt-[0.4rem]  flex md:flex-col justify-center items-center bg-navactive px-[30px] rounded-tr-[18px] relative md:before:absolute before:w-[0px] md:before:w-[81px] before:h-[86%] before:bg-navactive before:skew-x-[17deg] before:top-[13px] before:bottom-0 before:right-[-12px] before:z-[-1] z-[1]' : 

'md:pb-[1.5rem] md:pt-[1.2rem] pb-[0.4rem] pt-[0.4rem]  flex md:flex-col justify-center items-center bg-navinactive px-[30px] rounded-tr-[18px] relative md:before:absolute before:w-[0px] md:before:w-[81px] before:h-[86%] before:bg-navinactive before:skew-x-[17deg] before:top-[13px] before:bottom-0 before:right-[-13px] before:z-[-1] z-[-1] text-white' } flex-row flex-wrap `} onClick={()=>HamburgerBtn2()}>
    <GrServices size={25} color={`${pathname == '/essay-writing' || pathname == '/cipd-assignment' || pathname == '/homework-help' || pathname == '/personal-statement' ? '':'#28D07E' } `} />
    Services
    
    <ul className={`dropdown ${actives == true ? 'block' : 'hidden'}`}>
        <li><Link href="/essay-writing" onClick={()=>HamburgerBtn(setActive(true))}>Essay Writing</Link></li>
        <li><Link href="/cipd-assignment" onClick={()=>HamburgerBtn(setActive(true))}>CIPD Assignment</Link></li>
        <li><Link href="/homework-help" onClick={()=>HamburgerBtn(setActive(true))}>Homework Help</Link></li>
        <li><Link href="/personal-statement" onClick={()=>HamburgerBtn(setActive(true))}>Personal Statement</Link></li>
        <li><Link href="/thesis-help" onClick={()=>HamburgerBtn(setActive(true))}>Thesis Help</Link></li>
        <li><Link href="/dissertation-help" onClick={()=>HamburgerBtn(setActive(true))}>Dissertation Help</Link></li>
        <li><Link href="/dissertation-editing" onClick={()=>HamburgerBtn(setActive(true))}>Dissertation Editing</Link></li>
        <li><Link href="/mba-assignment">MBA Assignment</Link></li>
        <li><Link href="/report-writing">Report Writing</Link></li>
        <li><Link href="/hr-assignment">HR Assignment</Link></li>
        <li><Link href="/law-assignment">Law Assignment</Link></li>
        <li><Link href="/btec-assignment">BTEC Assignment</Link></li>
        {/* <li><Link href="/nebosh-assignment">Nebosh Assignment</Link></li> */}
    </ul>
</Link>

<Link href="/pricing" className={`${pathname == '/pricing' ?
'md:pb-[1.5rem] md:pt-[1.2rem] pb-[0.4rem] pt-[0.4rem]  flex md:flex-col justify-center items-center bg-navactive px-[30px] rounded-tr-[18px] relative md:before:absolute before:w-[0px] md:before:w-[81px] before:h-[86%] before:bg-navactive before:skew-x-[17deg] before:top-[13px] before:bottom-0 before:right-[-12px] before:z-[-1] z-[1]' : 

'md:pb-[1.5rem] md:pt-[1.2rem] pb-[0.4rem] pt-[0.4rem]  flex md:flex-col justify-center items-center bg-navinactive px-[30px] rounded-tr-[18px] relative md:before:absolute before:w-[0px] md:before:w-[81px] before:h-[86%] before:bg-navinactive before:skew-x-[17deg] before:top-[13px] before:bottom-0 before:right-[-13px] before:z-[-1] z-[-1] text-white' } `} onClick={()=>HamburgerBtn(setActive(true))}>
    <ImPriceTags size={25} color={`${pathname == '/pricing' ? '':'#28D07E' } `} />
    Pricing
</Link>
<Link href="/reviews" className={`${pathname == '/reviews' ? 
'md:pb-[1.5rem] md:pt-[1.2rem] pb-[0.4rem] pt-[0.4rem] flex md:flex-col justify-center items-center bg-navactive px-[30px] rounded-tr-[18px] relative md:before:absolute before:w-[0px] md:before:w-[81px] before:h-[86%] before:bg-navactive before:skew-x-[17deg] before:top-[13px] before:bottom-0 before:right-[-12px] before:z-[-1] z-[1]' : 

'md:pb-[1.5rem] md:pt-[1.2rem] pb-[0.4rem] pt-[0.4rem] flex md:flex-col justify-center items-center bg-navinactive px-[30px] rounded-tr-[18px] relative md:before:absolute before:w-[0px] md:before:w-[81px] before:h-[86%] before:bg-navinactive before:skew-x-[17deg] before:top-[13px] before:bottom-0 before:right-[-13px] before:z-[-1] z-[-1] text-white' } `} onClick={()=>HamburgerBtn(setActive(true))}>
    <RiUserHeartLine size={25} color={`${pathname == '/reviews' ? '':'#28D07E' } `} />
    Reviews
</Link>

</nav>
<nav className='md:flex hidden justify-end flex-1 gap-4 items-center'>
<Link href="/order-now" className='bg-navactive py-3 px-6 rounded-[11px] font-bold text-dark'>
    Order Now
</Link>
<Link href="/login/" className='flex gap-1 items-center border-navactive border-2 py-[9px] px-8 rounded-[11px] text-white font-bold'>
<FiUserCheck size={25} color='#28D07E' />
Login
</Link>
</nav>

</>
)
}

export default Navitems