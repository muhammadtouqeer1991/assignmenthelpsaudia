import Image from 'next/image'
import React from 'react'
import arrow from '../public/assets/arrow.svg';

const Headerform = () => {
  return (
    <>
    <div className='relative md:w-[550px]'>
      <div className=' bg-[#282B2F] py-3 px-3 rounded h-fit'>
      <form>
        <div style={{background:'linear-gradient(180deg, #28D07E 0%, rgba(40, 208, 126, 0.05) 100%);'}} className='text-center py-4 rounded'>
          <h4 className='font-bold text-[26px] text-white'>Get Help Instantly</h4>
          <h6 className='text-[16px] text-white'>Raise Your Grades with Assignment Help Pro</h6> 
        </div>
        <div className='flex gap-3 justify-between pt-3'>
          <input type="text" placeholder='Your Name' className='flex-1 py-4 rounded-[10px] px-4 bg-navcolor border-navactive border-2 text-white' />
          <input type="email" placeholder='Your Email Address'  className='flex-1 py-4 rounded-[10px] px-4 bg-navcolor border-navactive border-2 text-white' />
        </div>
        <input type="tel" placeholder='Your Phone No'  className='w-full py-4 rounded-[10px] px-4 mt-2 bg-navcolor border-navactive border-2 text-white' />
        <div className='flex gap-3 justify-between pt-2'>
          <select className='flex-1 py-4 rounded-[10px] px-4 bg-navcolor border-navactive border-2 text-white'>
            <option>No of Words</option>
          </select>
          <select className='flex-1 py-4 rounded-[10px] px-4 bg-navcolor border-navactive border-2 text-white'>
            <option>Dissertation</option>
          </select>
        </div>
        <textarea className='w-full rounded-[10px] mt-2 py-4 px-4 bg-navcolor border-navactive border-2 text-white' placeholder='Message' cols={10} rows={5}></textarea>
        <div className='flex gap-3 justify-between pt-2 items-center'>
          <ul className='flex flex-col gap-2 text-white pt-2'>
            <li className='flex gap-2 items-center'><Image src={arrow} alt="market" /> Unlimited Revisions</li>
            <li className='flex gap-2 items-center'><Image src={arrow} alt="market" /> Plagiarism Report</li>
            <li className='flex gap-2 items-center'><Image src={arrow} alt="market" /> Quality Review by PHD Writer</li>
          </ul>
          <button type='button' className='bg-navactive py-4 px-10 rounded-[10px] text-white'>Order Now</button>
        </div>
      </form>
      </div>
      <div className='absolute top-[-2rem] left-[-5rem]'>
    <svg xmlns="http://www.w3.org/2000/svg" width="89" height="110" viewBox="0 0 89 110" fill="none">
<g opacity="0.5">
<path d="M63.276 14.3206C63.276 14.3206 -5.44897 51.5816 0.347031 59.8616C6.14303 68.1416 85.633 104.575 85.633 92.9826C85.633 81.3896 74.869 10.1806 63.276 14.3206Z" fill="#282B2F"/>
<path d="M62.3521 63.8166C62.3521 63.8166 18.0171 58.0026 17.9211 63.7826C17.8251 69.5626 42.4081 113.119 46.3001 107.751C50.1911 102.382 69.1101 65.7906 62.3521 63.8166Z" stroke="#343A40" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
<path d="M88.1931 41.5646C88.1931 41.5646 77.7531 -1.91437 72.3221 0.0656295C66.8911 2.04563 35.0191 40.5886 41.4241 42.3006C47.8301 44.0126 88.7691 48.5816 88.1931 41.5646Z" fill="#28D07E"/>
</g>
</svg>
    </div>
    </div>
    </>
  )
}

export default Headerform