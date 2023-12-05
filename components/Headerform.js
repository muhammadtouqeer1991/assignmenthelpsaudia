import Image from 'next/image'
import React from 'react'
import arrow from '../public/assets/arrow.svg';

const Headerform = () => {
  return (
    <>
      <div className='w-[550px] bg-[#282B2F] py-3 px-3 rounded'>
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
            <li className='flex gap-2 items-center'><Image src={arrow} /> Unlimited Revisions</li>
            <li className='flex gap-2 items-center'><Image src={arrow} /> Plagiarism Report</li>
            <li className='flex gap-2 items-center'><Image src={arrow} /> Quality Review by PHD Writer</li>
          </ul>
          <button type='button' className='bg-navactive py-4 px-10 rounded-[10px] text-white'>Order Now</button>
        </div>
      </form>
      </div>
    </>
  )
}

export default Headerform