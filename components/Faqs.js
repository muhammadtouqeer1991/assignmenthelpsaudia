import React from 'react'
import Faqimg from './Faqimg'
import Faqitmes from './Faqitmes'

const Faqs = () => {
  return (
    <>
      <div className='py-7 bg-topbarcolor pb-0'>
        <div className='container mx-auto'>
            <h3 className='text-[40px] text-white font-bold text-center'>FAQs</h3>
            <p className='text-center text-[16px] text-white'>Following are some questions that student usually ask when they are planning to hire our online dissertation writing service.</p>
        </div>
        <div className='container mx-auto flex md:flex-row flex-col gap-10 items-end'>
            <Faqimg />
            <Faqitmes />
        </div>
      </div>
    </>
  )
}

export default Faqs