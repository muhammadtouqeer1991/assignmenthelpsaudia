import React from 'react'
import Subjectitems from './Subjectitems'

const Subject = ({SubjectContent}) => {
return (
<>
<div className='py-7 bg-topbarcolor'>
    <div className='container mx-auto'>
        <h4 className='md:text-[40px] text-[25px] pb-2 md:pb-0 font-bold text-white text-center'>{SubjectContent == null || SubjectContent == '' || SubjectContent == undefined ? 'Our Dissertation Specialists for Over 650+ Subjects' : SubjectContent.heading}</h4>
        <p className='text-white text-[16px] text-center'>{SubjectContent == null || SubjectContent == '' || SubjectContent == undefined ? 'From multiple domains of study, we have collectively established a team of experts based on core subjects' : SubjectContent.para}</p>
    </div>
    <div className='container mx-auto'>
        <Subjectitems SubjectContentitems={SubjectContent.items} />
    </div>
</div>
</>
)
}

export default Subject