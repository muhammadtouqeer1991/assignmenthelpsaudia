import Image from 'next/image'
import React from 'react'
import arrow from '../public/assets/arrow.svg';


const Backboneinfo = ({BackbonecontentData}) => {
return (
<>
<div className='flex flex-col md:flex-row h-[500px] overflow-auto backbone gap-7'>
<div className='md:w-[50%] w-full'>
<h5 className='text-[16px] font-semibold text-white'>{BackbonecontentData == null || BackbonecontentData == '' || BackbonecontentData == undefined ? 'Assuring Excellent Results with our Exclusive Help With Dissertation Writing' : BackbonecontentData.heading1 }</h5>
<p className='text-white text-[16px] font-normal pt-2 pb-2'>{BackbonecontentData == null || BackbonecontentData == '' || BackbonecontentData == undefined ? 'You won’t be able to find many such platforms that guarantee you to gain brilliant results with their exclusive dissertation writing help services. However, we are here with our highly qualified writers offering the guarantee of attaining good grades with our services. Our exclusive services include:' : BackbonecontentData.para1 }</p>
<h6 className='text-white text-[16px] font-semibold pt-2 pb-2'>{BackbonecontentData == null || BackbonecontentData == '' || BackbonecontentData == undefined ? 'Thoroughly Researched Dissertation:' : BackbonecontentData.heading2 }</h6>
<p className='text-white text-[16px] font-normal pt-2 pb-2'>{BackbonecontentData == null || BackbonecontentData == '' || BackbonecontentData == undefined ? 'The main crux of a well-written dissertation lies in the amount of research done in order to support the given argument. We know that and we make sure to gather as much relevant data as possible. We are known to be the best dissertation help online providers because our thorough research content is;' : BackbonecontentData.para2 }</p>
{
BackbonecontentData == null || BackbonecontentData == '' || BackbonecontentData == undefined ? <>
<ul className='flex flex-col gap-3 text-white pt-2'>
<li className='flex gap-2 items-center'><Image src={arrow} alt="market" /> Proficient qualitative data.</li>
<li className='flex gap-2 items-center'><Image src={arrow} alt="market" /> Critically analyzed quantitative data.</li>
<li className='flex gap-2 items-center'><Image src={arrow} alt="market" /> Collection of references from authentic sources only including journal articles, scholarly published work, etc.</li>
</ul>
</>:
<>
<ul className='flex flex-col gap-3 text-white pt-2'>
{
BackbonecontentData.option.map((item,key) => {
return (
<li className='flex gap-2 items-center' key={key+1}><Image src={arrow} alt="market" /> {item.title}</li>
)
})
}

</ul>
</>
}

<h5 className='text-[16px] font-semibold text-white pt-4'>{BackbonecontentData == null || BackbonecontentData == '' || BackbonecontentData == undefined ? 'Assuring Excellent Results with our Exclusive Help With Dissertation Writing' : BackbonecontentData.heading3 }</h5>
<p className='text-white text-[16px] font-normal pt-2 pb-2'>{BackbonecontentData == null || BackbonecontentData == '' || BackbonecontentData == undefined ? 'You won’t be able to find many such platforms that guarantee you to gain brilliant results with their exclusive dissertation writing help services. However, we are here with our highly qualified writers offering the guarantee of attaining good grades with our services. Our exclusive services include:' : BackbonecontentData.para3 }</p>
<h6 className='text-white text-[16px] font-semibold pt-2 pb-2'>{BackbonecontentData == null || BackbonecontentData == '' || BackbonecontentData == undefined ? 'Thoroughly Researched Dissertation:' : BackbonecontentData.heading4 }</h6>
<p className='text-white text-[16px] font-normal pt-2 pb-2'>{BackbonecontentData == null || BackbonecontentData == '' || BackbonecontentData == undefined ? 'The main crux of a well-written dissertation lies in the amount of research done in order to support the given argument. We know that and we make sure to gather as much relevant data as possible. We are known to be the best dissertation help online providers because our thorough research content is;' : BackbonecontentData.para4 }</p>

{
BackbonecontentData == null || BackbonecontentData == '' || BackbonecontentData == undefined ? <>
<ul className='flex flex-col gap-3 text-white pt-2'>
<li className='flex gap-2 items-center'><Image src={arrow} alt="market" /> Proficient qualitative data.</li>
<li className='flex gap-2 items-center'><Image src={arrow} alt="market" /> Critically analyzed quantitative data.</li>
<li className='flex gap-2 items-center'><Image src={arrow} alt="market" /> Collection of references from authentic sources only including journal articles, scholarly published work, etc.</li>
</ul>
</>:<>
<ul className='flex flex-col gap-3 text-white pt-2'>
{
BackbonecontentData.option2.map((item,key) => {
return (
<li className='flex gap-2 items-center' key={key+1}><Image src={arrow} alt="market" /> {item.title}</li>
)
})
}

</ul>
</>
}


</div>

<div className='md:w-[50%] w-full'>
<h5 className='text-[16px] font-semibold text-white'>{BackbonecontentData == null || BackbonecontentData == '' || BackbonecontentData == undefined ? 'Assuring Excellent Results with our Exclusive Help With Dissertation Writing' : BackbonecontentData.heading5 }</h5>
<p className='text-white text-[16px] font-normal pt-2 pb-2'>{BackbonecontentData == null || BackbonecontentData == '' || BackbonecontentData == undefined ? 'You won’t be able to find many such platforms that guarantee you to gain brilliant results with their exclusive dissertation writing help services. However, we are here with our highly qualified writers offering the guarantee of attaining good grades with our services. Our exclusive services include:' : BackbonecontentData.para5 }</p>
<h6 className='text-white text-[16px] font-semibold pt-2 pb-2'>{BackbonecontentData == null || BackbonecontentData == '' || BackbonecontentData == undefined ? 'Thoroughly Researched Dissertation:' : BackbonecontentData.heading6 }</h6>
<p className='text-white text-[16px] font-normal pt-2 pb-2'>{BackbonecontentData == null || BackbonecontentData == '' || BackbonecontentData == undefined ? 'The main crux of a well-written dissertation lies in the amount of research done in order to support the given argument. We know that and we make sure to gather as much relevant data as possible. We are known to be the best dissertation help online providers because our thorough research content is;' : BackbonecontentData.para6 }</p>

{
BackbonecontentData == null || BackbonecontentData == '' || BackbonecontentData == undefined ? <>
<ul className='flex flex-col gap-3 text-white pt-2'>
<li className='flex gap-2 items-center'><Image src={arrow} alt="market" /> Proficient qualitative data.</li>
<li className='flex gap-2 items-center'><Image src={arrow} alt="market" /> Critically analyzed quantitative data.</li>
<li className='flex gap-2 items-center'><Image src={arrow} alt="market" /> Collection of references from authentic sources only including journal articles, scholarly published work, etc.</li>
</ul>
</>:<>
<ul className='flex flex-col gap-3 text-white pt-2'>
{
BackbonecontentData.option3.map((item,key) => {
return (
<li className='flex gap-2 items-center' key={key+1}><Image src={arrow} alt="market" /> {item.title}</li>
)
})
}

</ul>
</>
}


<h5 className='text-[16px] font-semibold text-white pt-4'>{BackbonecontentData == null || BackbonecontentData == '' || BackbonecontentData == undefined ? 'Assuring Excellent Results with our Exclusive Help With Dissertation Writing' : BackbonecontentData.heading7 }</h5>
<p className='text-white text-[16px] font-normal pt-2 pb-2'>{BackbonecontentData == null || BackbonecontentData == '' || BackbonecontentData == undefined ? 'You won’t be able to find many such platforms that guarantee you to gain brilliant results with their exclusive dissertation writing help services. However, we are here with our highly qualified writers offering the guarantee of attaining good grades with our services. Our exclusive services include:' : BackbonecontentData.para7 }</p>
<h6 className='text-white text-[16px] font-semibold pt-2 pb-2'>{BackbonecontentData == null || BackbonecontentData == '' || BackbonecontentData == undefined ? 'Thoroughly Researched Dissertation:' : BackbonecontentData.heading8 }</h6>
<p className='text-white text-[16px] font-normal pt-2 pb-2'>{BackbonecontentData == null || BackbonecontentData == '' || BackbonecontentData == undefined ? 'The main crux of a well-written dissertation lies in the amount of research done in order to support the given argument. We know that and we make sure to gather as much relevant data as possible. We are known to be the best dissertation help online providers because our thorough research content is;' : BackbonecontentData.para8 }</p>

{
BackbonecontentData == null || BackbonecontentData == '' || BackbonecontentData == undefined ? <>
<ul className='flex flex-col gap-3 text-white pt-2'>
<li className='flex gap-2 items-center'><Image src={arrow} alt="market" /> Proficient qualitative data.</li>
<li className='flex gap-2 items-center'><Image src={arrow} alt="market" /> Critically analyzed quantitative data.</li>
<li className='flex gap-2 items-center'><Image src={arrow} alt="market" /> Collection of references from authentic sources only including journal articles, scholarly published work, etc.</li>
</ul>
</> :
<>
<ul className='flex flex-col gap-3 text-white pt-2'>
{
BackbonecontentData.option4.map((item,key) => {
return (
<li className='flex gap-2 items-center' key={key+1}><Image src={arrow} alt="market" /> {item.title}</li>
)
})
}

</ul>
</>
}


</div>
</div>
</>
)
}

export default Backboneinfo