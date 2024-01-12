import React from 'react'
import Faqimg from './Faqimg'
import Faqitmes from './Faqitmes'

const Faqs = ({FaqItems,FaqHeading}) => {
  
return (
<>
  <div className='py-7 bg-topbarcolor pb-0'>
    <div className='container mx-auto'>
        <h3 className='text-[40px] text-white font-bold text-center'>{FaqHeading == null || FaqHeading== '' || FaqHeading == undefined ? 'FAQs' : FaqHeading.heading}</h3>
        <p className='text-center text-[16px] text-white'>{FaqHeading == null || FaqHeading== '' || FaqHeading == undefined ? 'Following are some questions that student usually ask when they are planning to hire our online dissertation writing service.' : FaqHeading.para}</p>
    </div>
    <div className='container mx-auto flex md:flex-row flex-col gap-10 items-end pt-5'>
        <Faqimg />
        <Faqitmes FaqItems={FaqItems} />
    </div>
  </div>
</>
)
}

export default Faqs