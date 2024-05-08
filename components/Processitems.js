import Image from 'next/image'
import React from 'react'

const Processitems = ({ProcessContent}) => {
return (
<>
<div className='pt-8 md:pb-0 pb-[3rem]'>

<div className='flex'>
<div className='flex-[10%] md:flex-[50%]'></div>
<div className='flex md:flex-nowrap flex-wrap'>
<div className='flex-[70%] relative'>
<div className='absolute'><svg xmlns="http://www.w3.org/2000/svg" width="83" height="85" viewBox="0 0 83 85" fill="none">
<path d="M0.00395725 0.151453L0.00397904 84.4429L82.612 0.176765L0.00395725 0.151453Z" fill="#45484B"/>
</svg></div>
<div className='flex items-center justify-center h-[83px] rounded-br-[70px] overflow-hidden' style={{fill:'radial-gradient(50% 50% at 50% 50%, rgba(40, 208, 126, 0.40) 0%, rgba(40, 208, 126, 0.30) 100%)',background:'radial-gradient(50% 50% at 50% 50%, rgba(40, 208, 126, 0.40) 0%, rgba(40, 208, 126, 0.30) 100%)'}}>
<div className='w-[70px] h-[70px] rounded-full border-4 border-b-navcolor relative bottom-[-1rem]'></div>
<div className='text-[87px] text-white font-bold relative left-[5px] bottom-[-10px]'>1</div>
</div>
</div>
<div>
<div>
<svg xmlns="http://www.w3.org/2000/svg" width="84" height="19" viewBox="0 0 84 19" fill="none">
<path d="M84 18.5002L82.2717 7.08331L73.2485 14.2886L84 18.5002ZM0.556804 4.49622C20.0265 3.39008 35.6174 1.71367 48.2958 2.1412C60.9295 2.56722 70.4052 5.08414 77.6854 12.1826L79.0816 10.7506C71.2808 3.14453 61.2056 0.575393 48.3632 0.142333C35.5655 -0.28922 19.7552 1.40226 0.443359 2.49944L0.556804 4.49622Z" fill="white"/>
</svg>
</div>
<div className='flex'>

<div className='pt-4'>
<div className='flex items-center gap-3'>
<div><Image src={ProcessContent == null || ProcessContent == '' || ProcessContent == undefined ? 'Inquiry' : ProcessContent.option[0].image} alt="icon" /></div>
<div className='text-[32px] font-bold text-white'>{ProcessContent == null || ProcessContent == '' || ProcessContent == undefined ? 'Inquiry' : ProcessContent.option[0].title}</div>
</div>
<div className='text-[16px] text-white'>{ProcessContent == null || ProcessContent == '' || ProcessContent == undefined ? 'Provide the assignments details for evaluation Provide the assignments details for evaluation' : ProcessContent.option[0].para}</div>
</div>
</div>
</div>
</div>
</div> 

<div className='flex relative md:top-[-3rem] top-[1rem]'>

<div className='flex flex-wrap md:flex-nowrap flex-col-reverse md:flex-row justify-center'>

<div className='md:w-[70%] w-[100%]'>
<div className='flex'>

<div className='pt-4'>
<div className='flex items-center gap-3'>
<div><Image src={ProcessContent == null || ProcessContent == '' || ProcessContent == undefined ? 'Inquiry' : ProcessContent.option[1].image} alt="icon" /></div>
<div className='text-[32px] font-bold text-white'>{ProcessContent == null || ProcessContent == '' || ProcessContent == undefined ? 'Inquiry' : ProcessContent.option[1].title}</div>
</div>
<div className='text-[16px] text-white'>{ProcessContent == null || ProcessContent == '' || ProcessContent == undefined ? 'Provide the assignments details for evaluation Provide the assignments details for evaluation' : ProcessContent.option[1].para}</div>
</div>
</div>
</div>
<div className='md:flex-[70%] relative'>
<div className='absolute right-0'><svg xmlns="http://www.w3.org/2000/svg" width="84" height="85" viewBox="0 0 84 85" fill="none">
<path d="M83.5825 0.208582L83.5824 84.5L0.97439 0.233894L83.5825 0.208582Z" fill="#45484B"/>
</svg></div>
<div className='absolute left-[-5.3rem]'>
<svg xmlns="http://www.w3.org/2000/svg" width="85" height="20" viewBox="0 0 85 20" fill="none">
<path d="M0.558316 19.1755L2.28667 7.75861L11.3098 14.9639L0.558316 19.1755ZM84.0015 5.17151C64.5319 4.06537 48.941 2.38896 36.2626 2.81649C23.6289 3.24251 14.1531 5.75943 6.87298 12.8579L5.47675 11.4259C13.2775 3.81982 23.3527 1.25069 36.1951 0.817625C48.9928 0.386073 64.8031 2.07755 84.115 3.17473L84.0015 5.17151Z" fill="white"/>
</svg>
</div>
<div className='flex items-center justify-start h-[83px] rounded-bl-[70px] overflow-hidden pl-8' style={{fill:'radial-gradient(50% 50% at 50% 50%, rgba(40, 208, 126, 0.40) 0%, rgba(40, 208, 126, 0.30) 100%)',background:'radial-gradient(50% 50% at 50% 50%, rgba(40, 208, 126, 0.40) 0%, rgba(40, 208, 126, 0.30) 100%)'}}>

<div className='w-[70px] h-[70px] rounded-full border-4 border-b-navcolor relative bottom-[-1rem]'></div>
<div className='text-[87px] text-white font-bold relative left-[5px] bottom-[-10px]'>2</div>
</div>
</div>
</div>
<div className='flex-[10%] md:flex-[80%]'></div>
</div> 


<div className='flex relative md:top-[-6.3rem] top-[1rem]'>
<div className='flex-[10%] md:flex-[50%]'></div>
<div className='flex md:flex-nowrap flex-wrap'>
<div className='flex-[70%] relative'>
<div className='absolute'>
<svg xmlns="http://www.w3.org/2000/svg" width="83" height="85" viewBox="0 0 83 85" fill="none">
<path d="M0.00395725 0.151453L0.00397904 84.4429L82.612 0.176765L0.00395725 0.151453Z" fill="#45484B"/>
</svg>
</div>
<div className='flex items-center justify-center h-[83px] rounded-br-[70px] overflow-hidden' style={{fill:'radial-gradient(50% 50% at 50% 50%, rgba(40, 208, 126, 0.40) 0%, rgba(40, 208, 126, 0.30) 100%)',background:'radial-gradient(50% 50% at 50% 50%, rgba(40, 208, 126, 0.40) 0%, rgba(40, 208, 126, 0.30) 100%)'}}>
<div className='w-[70px] h-[70px] rounded-full border-4 border-b-navcolor relative bottom-[-1rem]'></div>
<div className='text-[87px] text-white font-bold relative left-[5px] bottom-[-10px]'>3</div>
</div>
</div>
<div>
<div>
<svg xmlns="http://www.w3.org/2000/svg" width="84" height="19" viewBox="0 0 84 19" fill="none">
<path d="M84 18.5002L82.2717 7.08331L73.2485 14.2886L84 18.5002ZM0.556804 4.49622C20.0265 3.39008 35.6174 1.71367 48.2958 2.1412C60.9295 2.56722 70.4052 5.08414 77.6854 12.1826L79.0816 10.7506C71.2808 3.14453 61.2056 0.575393 48.3632 0.142333C35.5655 -0.28922 19.7552 1.40226 0.443359 2.49944L0.556804 4.49622Z" fill="white"/>
</svg>
</div>
<div className='flex'>

<div className='pt-4'>
<div className='flex items-center gap-3'>
<div>
<Image src={ProcessContent == null || ProcessContent == '' || ProcessContent == undefined ? 'Inquiry' : ProcessContent.option[2].image} alt="icon" /></div>
<div className='text-[32px] font-bold text-white'>{ProcessContent == null || ProcessContent == '' || ProcessContent == undefined ? 'Inquiry' : ProcessContent.option[2].title}</div>
</div>
<div className='text-[16px] text-white'>{ProcessContent == null || ProcessContent == '' || ProcessContent == undefined ? 'Provide the assignments details for evaluation Provide the assignments details for evaluation' : ProcessContent.option[2].para}</div>
</div>
</div>
</div>
</div>
</div> 

<div className='flex relative md:top-[-9.3rem] top-[2rem]'>

<div className='flex md:flex-nowrap flex-wrap flex-col-reverse md:flex-row'>

<div className='md:w-[70%] w-[100%]'>
<div className='flex'>

<div className='pt-4'>
<div className='flex items-center gap-3'>
<div>
<Image src={ProcessContent == null || ProcessContent == '' || ProcessContent == undefined ? 'Inquiry' : ProcessContent.option[3].image} alt="icon" /></div>
<div className='text-[28px] font-bold text-white'>{ProcessContent == null || ProcessContent == '' || ProcessContent == undefined ? 'Inquiry' : ProcessContent.option[3].title}</div>
</div>
<div className='text-[16px] text-white'>{ProcessContent == null || ProcessContent == '' || ProcessContent == undefined ? 'Provide the assignments details for evaluation Provide the assignments details for evaluation' : ProcessContent.option[3].para}</div>
</div>
</div>
</div>
<div className='md:flex-[70%] relative'>
<div className='absolute right-0'><svg xmlns="http://www.w3.org/2000/svg" width="84" height="85" viewBox="0 0 84 85" fill="none">
<path d="M83.5825 0.208582L83.5824 84.5L0.97439 0.233894L83.5825 0.208582Z" fill="#45484B"/>
</svg></div>
<div className='absolute left-[-5.3rem]'>
<svg xmlns="http://www.w3.org/2000/svg" width="85" height="20" viewBox="0 0 85 20" fill="none">
<path d="M0.558316 19.1755L2.28667 7.75861L11.3098 14.9639L0.558316 19.1755ZM84.0015 5.17151C64.5319 4.06537 48.941 2.38896 36.2626 2.81649C23.6289 3.24251 14.1531 5.75943 6.87298 12.8579L5.47675 11.4259C13.2775 3.81982 23.3527 1.25069 36.1951 0.817625C48.9928 0.386073 64.8031 2.07755 84.115 3.17473L84.0015 5.17151Z" fill="white"/>
</svg>
</div>
<div className='flex items-center justify-start h-[83px] rounded-bl-[70px] overflow-hidden pl-8' style={{fill:'radial-gradient(50% 50% at 50% 50%, rgba(40, 208, 126, 0.40) 0%, rgba(40, 208, 126, 0.30) 100%)',background:'radial-gradient(50% 50% at 50% 50%, rgba(40, 208, 126, 0.40) 0%, rgba(40, 208, 126, 0.30) 100%)'}}>

<div className='w-[70px] h-[70px] rounded-full border-4 border-b-navcolor relative bottom-[-1rem]'></div>
<div className='text-[87px] text-white font-bold relative left-[5px] bottom-[-10px]'>4</div>
</div>
</div>
</div>
<div className='md:flex-[80%] flex-[10%]'></div>
</div> 

</div> 
</>
)
}

export default Processitems