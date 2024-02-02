'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import brandLogo from '../public/assets/brandLogo.svg';
import { BiHomeAlt,BiUserPin } from "react-icons/bi";
import { GrServices } from "react-icons/gr";
import { ImPriceTags } from "react-icons/im";
import { RiUserHeartLine } from "react-icons/ri";
import { FiUserCheck } from "react-icons/fi";
import { FaBars } from "react-icons/fa";
import { usePathname } from 'next/navigation'


const Navitems = () => {

const pathname = usePathname();
const HamburgerBtn = () => {
    
}
return (
<>  
<Link href="/"><Image src={brandLogo} width={251} alt="market" /></Link>
<FaBars className='md:hidden lg:hidden sm:hidden' size={30} color='#fff' onClick={()=>HamburgerBtn()} />
<nav className={`mobileMenu md:flex hidden items-center border-b-[10px] border-navactive z-[1] md:w-[610px]`}>
<Link href="/" className={`${pathname == '/' ? 
'pb-[1.5rem] pt-[1.2rem] flex flex-col justify-center items-center bg-navactive px-[30px] rounded-tr-[18px] relative md:before:absolute before:w-[81px] before:h-[86%] before:bg-navactive before:skew-x-[17deg] before:top-[13px] before:bottom-0 before:right-[-12px] before:z-[-1] z-[1]' : 

'pb-[1.5rem] pt-[1.2rem]  flex flex-col justify-center items-center bg-navinactive px-[30px] rounded-tr-[18px] relative md:before:absolute before:w-[81px] before:h-[86%] before:bg-navinactive before:skew-x-[17deg] before:top-[13px] before:bottom-0 before:right-[-13px] before:z-[-1] z-[-1] text-white' } `}>
    <BiHomeAlt size={25} />
    Home
</Link>
<Link href="/about-us" className={`${pathname == '/about-us' ? 

'pb-[1.5rem] pt-[1.2rem]  flex flex-col justify-center items-center bg-navactive px-[30px] rounded-tr-[18px] relative md:before:absolute before:w-[81px] before:h-[86%] before:bg-navactive before:skew-x-[17deg] before:top-[13px] before:bottom-0 before:right-[-12px] before:z-[-1] z-[1]' : 

'pb-[1.5rem] pt-[1.2rem]  flex flex-col justify-center items-center bg-navinactive px-[30px] rounded-tr-[18px] relative md:before:absolute before:w-[81px] before:h-[86%] before:bg-navinactive before:skew-x-[17deg] before:top-[13px] before:bottom-0 before:right-[-13px] before:z-[-1] z-[-1] text-white' } `}>
    <BiUserPin size={25} color={`${pathname == '/about-us' ? '':'#28D07E' } `} />
    About
</Link>

<Link href="#" className={`serviceHover ${pathname == '/essay-writing' || pathname == '/cipd-assignment-help-ksa' || pathname == '/homework-help-ksa' || pathname == '/personal-statement-writing' ? 
'pb-[1.5rem] pt-[1.2rem]  flex flex-col justify-center items-center bg-navactive px-[30px] rounded-tr-[18px] relative md:before:absolute before:w-[81px] before:h-[86%] before:bg-navactive before:skew-x-[17deg] before:top-[13px] before:bottom-0 before:right-[-12px] before:z-[-1] z-[1]' : 

'pb-[1.5rem] pt-[1.2rem]  flex flex-col justify-center items-center bg-navinactive px-[30px] rounded-tr-[18px] relative md:before:absolute before:w-[81px] before:h-[86%] before:bg-navinactive before:skew-x-[17deg] before:top-[13px] before:bottom-0 before:right-[-13px] before:z-[-1] z-[-1] text-white' } `}>
    <GrServices size={25} color={`${pathname == '/essay-writing' || pathname == '/cipd-assignment-help-ksa' || pathname == '/homework-help-ksa' || pathname == '/personal-statement-writing' ? '':'#28D07E' } `} />
    Services
    <ul className='dropdown hidden'>
        <li><Link href="/essay-writing">Essay Writing</Link></li>
        <li><Link href="/cipd-assignment-help-ksa">CIPD Assignment Help KSA</Link></li>
        <li><Link href="/homework-help-ksa">Homework Help KSA</Link></li>
        <li><Link href="/personal-statement-writing">Personal Statement Writing</Link></li>
    </ul>
</Link>

<Link href="/pricing" className={`${pathname == '/pricing' ?
'pb-[1.5rem] pt-[1.2rem]  flex flex-col justify-center items-center bg-navactive px-[30px] rounded-tr-[18px] relative md:before:absolute before:w-[81px] before:h-[86%] before:bg-navactive before:skew-x-[17deg] before:top-[13px] before:bottom-0 before:right-[-12px] before:z-[-1] z-[1]' : 

'pb-[1.5rem] pt-[1.2rem]  flex flex-col justify-center items-center bg-navinactive px-[30px] rounded-tr-[18px] relative md:before:absolute before:w-[81px] before:h-[86%] before:bg-navinactive before:skew-x-[17deg] before:top-[13px] before:bottom-0 before:right-[-13px] before:z-[-1] z-[-1] text-white' } `}>
    <ImPriceTags size={25} color={`${pathname == '/pricing' ? '':'#28D07E' } `} />
    Pricing
</Link>
<Link href="/reviews" className={`${pathname == '/reviews' ? 
'pb-[1.5rem] pt-[1.2rem]  flex flex-col justify-center items-center bg-navactive px-[30px] rounded-tr-[18px] relative md:before:absolute before:w-[81px] before:h-[86%] before:bg-navactive before:skew-x-[17deg] before:top-[13px] before:bottom-0 before:right-[-12px] before:z-[-1] z-[1]' : 

'pb-[1.5rem] pt-[1.2rem]  flex flex-col justify-center items-center bg-navinactive px-[30px] rounded-tr-[18px] relative md:before:absolute before:w-[81px] before:h-[86%] before:bg-navinactive before:skew-x-[17deg] before:top-[13px] before:bottom-0 before:right-[-13px] before:z-[-1] z-[-1] text-white' } `}>
    <RiUserHeartLine size={25} color={`${pathname == '/reviews' ? '':'#28D07E' } `} />
    Reviews
</Link>

</nav>
<nav className='md:flex hidden justify-end flex-1 gap-4 items-center'>
<Link href="/order-now" className='bg-navactive py-3 px-6 rounded-[11px] font-bold text-dark'>
    Order Now
</Link>
<Link href="#" className='flex gap-1 items-center border-navactive border-2 py-[9px] px-8 rounded-[11px] text-white font-bold'>
<FiUserCheck size={25} color='#28D07E' />
Login
</Link>
</nav>

</>
)
}

export default Navitems