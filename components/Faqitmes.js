"use client"
import React, { useState } from 'react'

const Faqitmes = ({FaqItems}) => {

const [activeIndex, setActiveIndex] = useState(-0);
const handleClick = (index) => {
setActiveIndex(index === activeIndex ? -1 : index);
};

return (
<>
<div className='flex-1 md:pl-12 pb-8'>

{
FaqItems && FaqItems.map((item,index) => {
return (
<div className='border-2 border-navactive rounded-[16px] py-4 px-4' key={item.title}>
<div className='flex items-center justify-between border-b-2 border-navactive pb-2' tabindex="1" key={item.title} onClick={() =>handleClick(index)}>
<div className='text-[16px] text-white font-bold'>{item.title}</div>
<div>
{
index === activeIndex ? <svg xmlns="http://www.w3.org/2000/svg" width="15" height="1" viewBox="0 0 15 1" fill="none">
<line y1="0.5" x2="15" y2="0.5" stroke="white"/>
</svg> : <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
<line y1="7.5" x2="15" y2="7.5" stroke="white"/>
<line x1="7.5" y1="15" x2="7.5" stroke="white"/>
</svg>
}
</div>
</div>
{index === activeIndex && 
<div className={`text-[14px] text-white font-normal pt-2`}>{item.para}</div>
}

</div>
)
})
}


{/* <div className='border-2 border-navactive rounded-[16px] py-4 px-4'>
<div className='flex items-center justify-between'>
<div className='text-[20px] text-white font-bold'>Can I hire you to edit my dissertation?</div>
<div><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
<line y1="7.5" x2="15" y2="7.5" stroke="white"/>
<line x1="7.5" y1="15" x2="7.5" stroke="white"/>
</svg></div>
</div>
<div className='text-[16px] text-white font-normal pt-2 hidden'>Of course! We have PhD dissertation helpers and former professors of well-known universities, who can edit your dissertation in a professional way. They thoroughly proofread the whole content according to your university guidelines and make the correction which definitely improves your grade.</div>
</div>
<div className='border-2 border-navactive rounded-[16px] py-4 px-4'>
<div className='flex items-center justify-between '>
<div className='text-[20px] text-white font-bold'>Can I hire you to edit my dissertation?</div>
<div><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
<line y1="7.5" x2="15" y2="7.5" stroke="white"/>
<line x1="7.5" y1="15" x2="7.5" stroke="white"/>
</svg></div>
</div>
<div className='text-[16px] text-white font-normal pt-2 hidden'>Of course! We have PhD dissertation helpers and former professors of well-known universities, who can edit your dissertation in a professional way. They thoroughly proofread the whole content according to your university guidelines and make the correction which definitely improves your grade.</div>
</div>

<div className='border-2 border-navactive rounded-[16px] py-4 px-4'>
<div className='flex items-center justify-between '>
<div className='text-[20px] text-white font-bold'>Can I hire you to edit my dissertation?</div>
<div><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
<line y1="7.5" x2="15" y2="7.5" stroke="white"/>
<line x1="7.5" y1="15" x2="7.5" stroke="white"/>
</svg></div>
</div>
<div className='text-[16px] text-white font-normal pt-2 hidden'>Of course! We have PhD dissertation helpers and former professors of well-known universities, who can edit your dissertation in a professional way. They thoroughly proofread the whole content according to your university guidelines and make the correction which definitely improves your grade.</div>
</div>
<div className='border-2 border-navactive rounded-[16px] py-4 px-4'>
<div className='flex items-center justify-between '>
<div className='text-[20px] text-white font-bold'>Can I hire you to edit my dissertation?</div>
<div><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
<line y1="7.5" x2="15" y2="7.5" stroke="white"/>
<line x1="7.5" y1="15" x2="7.5" stroke="white"/>
</svg></div>
</div>
<div className='text-[16px] text-white font-normal pt-2 hidden'>Of course! We have PhD dissertation helpers and former professors of well-known universities, who can edit your dissertation in a professional way. They thoroughly proofread the whole content according to your university guidelines and make the correction which definitely improves your grade.</div>
</div> */}

</div>
</>
)
}

export default Faqitmes