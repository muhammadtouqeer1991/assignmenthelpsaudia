import React from 'react'
import Subjectitems from './Subjectitems'

const Subject = () => {
  return (
    <>
        <div className='py-7 bg-topbarcolor'>
            <div className='container mx-auto'>
                <h4 className='text-[40px] font-bold text-white text-center'>Our Dissertation Specialists for Over 650+ Subjects</h4>
                <p className='text-white text-[16px] text-center'>From multiple domains of study, we have collectively established a team of experts based on core subjects</p>
            </div>
            <div className='container mx-auto'>
                <Subjectitems />
            </div>
        </div>
    </>
  )
}

export default Subject