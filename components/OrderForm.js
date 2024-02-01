import Image from 'next/image';
import React from 'react'
import formbottm from '../public/assets/formbottm.png';

const OrderForm = () => {
return (
<>
<div className='py-7 bg-topbarcolor'>
<div className="container mx-auto text-center">
    <h1 className='text-[45px] font-bold text-white'>Fill Out The Order Form</h1>
    <hr className='w-[190px] mx-auto h-[1px] bg-navactive border-navactive' />
    <div className='border-navactive rounded-[20px] border-2 mt-5'>
        <div className='flex justify-between py-10 px-10 gap-10'>
            <div className='w-[60%]'>
            <form>
            <div className='flex gap-3 justify-between pt-2'>
                <select className='flex-1 py-4 rounded-[10px] px-4 bg-navcolor border-navactive border-2 text-white'>
                    <option>Select Paper Type</option>
                </select>
                <select className='flex-1 py-4 rounded-[10px] px-4 bg-navcolor border-navactive border-2 text-white'>
                    <option>Select Referencing Style</option>
                </select>
            </div>
            <div className='flex gap-3 justify-between pt-2'>
                <select className='flex-1 py-4 rounded-[10px] px-4 bg-navcolor border-navactive border-2 text-white'>
                    <option>Select Education Level</option>
                </select>
                <select className='flex-1 py-4 rounded-[10px] px-4 bg-navcolor border-navactive border-2 text-white'>
                    <option>Select Subject</option>
                </select>
            </div>
            <div className='flex gap-3 justify-between pt-2'>
                <input type="text" className='flex-1 py-4 rounded-[10px] px-4 bg-navcolor border-navactive border-2 text-white' placeholder='Enter Topics' />
            </div>
            <div className='flex gap-3 justify-between pt-2'>
                <textarea name="" id="" cols="30" rows="5" className='flex-1 py-4 rounded-[10px] px-4 bg-navcolor border-navactive border-2 text-white' placeholder='Enter Paper Instruction'></textarea>
            </div>

            <div className='flex gap-3 justify-between pt-2'>
                <select className='flex-1 py-4 rounded-[10px] px-4 bg-navcolor border-navactive border-2 text-white'>
                    <option>Select No of Pages</option>
                </select>
                <select className='flex-1 py-4 rounded-[10px] px-4 bg-navcolor border-navactive border-2 text-white'>
                    <option>Select Deadline</option>
                </select>
            </div>

            <div className='flex gap-3 justify-between pt-4'>
                <input type="file" name='file[]' className='text-white'  />
                <input type="file" name='file[]' className='text-white'  />
                <input type="file" name='file[]' className='text-white'  />
            </div>
            <div className='flex gap-3 justify-center pt-5'>
                <h4 className='text-[2rem] text-center text-navactive font-bold'>Personal Details</h4>
            </div>

            <div className='flex gap-3 justify-between pt-2'>
               <input type="text" placeholder='Enter Full Name' className='flex-1 py-4 rounded-[10px] px-4 bg-navcolor border-navactive border-2 text-white' />
               <input type="email" placeholder='Enter Email Address' className='flex-1 py-4 rounded-[10px] px-4 bg-navcolor border-navactive border-2 text-white' />
            </div>

            <div className='flex gap-3 justify-between pt-2'>
               <select name="country" id="" className='flex-1 py-4 rounded-[10px] px-4 bg-navcolor border-navactive border-2 text-white'>
                <option value="">Select Country</option>
               </select>
               <input type="text" placeholder='Enter Phone No' className='flex-1 py-4 rounded-[10px] px-4 bg-navcolor border-navactive border-2 text-white' />
            </div>
            <div className='flex gap-3 justify-between pt-2'>
                <h6 className='text-[1.5rem] text-white'>Total Amount: <b> AED 0</b></h6>
            </div>
            <div className='flex gap-3 justify-between pt-2'>
                <p className='text-[17px] text-white'><input type="checkbox" />  I have accepted your Terms & Conditions</p>
            </div>
            <div className='flex gap-3 justify-between pt-2'>
                <button type='button' className='py-3 px-8 bg-navactive rounded-[10px]'>Order Now</button>
            </div>
           



            </form>
            </div>
            <div className='w-[40%]'>
            <div class="ordersummary">
            <h3>Your order summary</h3>

            <hr />

            <div class="academic_paper">
            <h4 className='text-left'>Academic paper writing</h4>
            <ul className='text-left'>
            <li>Type of Paper: <span class="float-right" id="PaperTypedata"></span></li>
            <li>Subject: <span class="float-right" id="SubjectData"></span></li>
            </ul>
            </div>
            <div class="basic_price pt-2">
            <h4 className='text-left'>Basic Price</h4>

            <ul className='text-left'>
            <li>Academic Level: <span class="float-right" id="AcademicLevel"></span></li>
            <li>Deadline: <span class="float-right" id="DeadlineData"></span></li>
            <li class="pb-3">Pages:  <span id="NoFPages" style={{float:'right'}}></span> </li>
            <li class="borderdata pt-2"><b>Total:</b><span id="originalprice" style={{float:'right'}}></span>  <span> AED</span></li>

            </ul>
            <Image src={formbottm} alt="formbottm" />


            </div>
            </div>
            </div>
        </div>
    </div>
</div>
</div>
</>
)
}

export default OrderForm