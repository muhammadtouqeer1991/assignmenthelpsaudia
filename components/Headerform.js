"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import arrow from '../public/assets/arrow.svg';
import moment from 'moment';
import Moment from 'react-moment';
import { useRouter } from 'next/navigation';

const Headerform = ({HeaderContent}) => {

  const { push } = useRouter();

  const [Name,setName]=useState('');
  const [Email,setEmail]=useState('');
  const [pages,setPages]=useState('');
  const [academic,setAcademic]=useState('');
  const [deadline,setDeadline]=useState('');
  const [Price,setPrice]=useState('0');
  const [Message,setMessage]=useState('');

  const orderSubmit = (e) => {
    e.preventDefault();
    localStorage.clear();

    localStorage.setItem('Name', Name);
    localStorage.setItem('Email', Email);
    localStorage.setItem('pages', pages);
    localStorage.setItem('academic', academic);
    localStorage.setItem('deadline', deadline);
    localStorage.setItem('Amount', Price);
    localStorage.setItem('Message', Message);

    push('/order-now');


}

return (
<>
<div className='relative md:w-[550px]'>
  <div className=' bg-[#282B2F] py-3 px-3 rounded h-fit'>
  <form onSubmit={orderSubmit} method='post'>
    <div style={{background:'linear-gradient(180deg, #28D07E 0%, rgba(40, 208, 126, 0.05) 100%);'}} className='text-center py-4 rounded'>
      <h4 className='font-bold text-[26px] text-white'>{HeaderContent == null || HeaderContent == '' || HeaderContent == undefined ? 'Get Help Instantly' : HeaderContent.formheading }</h4>
      <h6 className='text-[16px] text-white'>{HeaderContent == null || HeaderContent == '' || HeaderContent == undefined ? 'Raise Your Grades with Assignment Help Pro' : HeaderContent.formpara }</h6> 
    </div>
    <div className='flex gap-3 justify-between pt-3'>
      
      <input type="text" placeholder='Your Name' name="Name" className='flex-1 py-4 rounded-[10px] px-4 bg-navcolor border-navactive border-2 text-white' onChange={e=>setName(e.target.value)} value={Name} required />
      
      <input type="email" placeholder='Your Email Address' name="Email"  className='flex-1 py-4 rounded-[10px] px-4 bg-navcolor border-navactive border-2 text-white' onChange={e=>setEmail(e.target.value)} value={Email} required  />
    </div>
    <div className='flex gap-3 justify-between pt-3'>
    <select className='flex-1 py-4 rounded-[10px] px-4 bg-navcolor border-navactive border-2 text-white' name="academic" onChange={e=>setAcademic(e.target.value)} value={academic} required >
      <option value="" selected>Education Level</option>
      <option value="high-school">High School</option>
      <option value="College">College</option>
      <option value="Undergraduate">Undergraduate</option>
      <option value="Master">Master</option>
      <option value="PhD">PhD</option>
      <option value="Admission">Admission</option>
      </select>
    </div>
    
    <div className='flex gap-3 justify-between pt-2'>
      <select className='flex-1 py-4 rounded-[10px] px-4 bg-navcolor border-navactive border-2 text-white' name="pages" onChange={e=>setPages(e.target.value)} value={pages} required >
        <option value="">Select No of Pages</option>
        {Array(200).fill(1).map((el, i) =>
        <option key={i+1} value={i+1}>{i+1} Page(s) / {i+1 * 250} Words</option>
        )}
      </select>
      <select className='flex-1 py-4 rounded-[10px] px-4 bg-navcolor border-navactive border-2 text-white' name="deadline" onChange={e=>setDeadline(e.target.value)} value={deadline} required >
      <option value="">Select Deadline</option>
    <option value="20">20 Days / {moment().add(20, 'd').format('D MMM, YYYY')}</option>
    <option value="15">15 Days / {moment().add(15, 'd').format('D MMM, YYYY')}</option>
    <option value="10">10 Days / {moment().add(10, 'd').format('D MMM, YYYY')}</option>
    <option value="7">7 Days / {moment().add(7, 'd').format('D MMM, YYYY')}</option>
    <option value="6">6 Days / {moment().add(6, 'd').format('D MMM, YYYY')}</option>
    <option value="5">5 Days / {moment().add(5, 'd').format('D MMM, YYYY')}</option>
    <option value="4">4 Days / {moment().add(4, 'd').format('D MMM, YYYY')}</option>
    <option value="3">3 Days / {moment().add(3, 'd').format('D MMM, YYYY')}</option>
    <option value="2">2 Days / {moment().add(2, 'd').format('D MMM, YYYY')}</option>
    <option value="24h">24 Hours / {moment().add(24, 'h').format('D MMM, YYYY')}</option>
    <option value="12h">12 Hours / {moment().add(12, 'h').format('D MMM, YYYY')}</option>
    <option value="6h">6 Hours / {moment().add(6, 'h').format('D MMM, YYYY')}</option>
      </select>
    </div>
    <textarea className='w-full rounded-[10px] mt-2 py-4 px-4 bg-navcolor border-navactive border-2 text-white' name="Message" placeholder='Message' cols={10} rows={5} onChange={e=>setMessage(e.target.value)} value={Message} required></textarea>
    <label htmlFor="" className='text-[20px] text-navactive'><b>Total Price: SAR <span>{Price}</span></b></label>
    <div className='flex gap-3 justify-between pt-2 items-center'>
    {HeaderContent == null || HeaderContent == '' || HeaderContent == undefined ? 
    <ul className='flex flex-col gap-2 text-white pt-2'>
    <li className='flex gap-2 items-center'><Image src={arrow} alt="market" /> Unlimited Revisions</li>
    <li className='flex gap-2 items-center'><Image src={arrow} alt="market" /> Plagiarism Report</li>
    <li className='flex gap-2 items-center'><Image src={arrow} alt="market" /> Quality Review by PHD Writer</li>
  </ul>
    :
  <ul className='flex flex-col gap-2 text-white pt-2'>
    {
      HeaderContent.formoption.map((item,key) => {
        return (
          <li className='flex gap-2 items-center' key={key+1}><Image src={arrow} alt="market" /> {item.title}</li>
        )
      })
    }
    
  </ul>
    }
      
      <button type='submit' className='bg-navactive py-4 px-10 rounded-[10px] text-white'>Order Now</button>
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