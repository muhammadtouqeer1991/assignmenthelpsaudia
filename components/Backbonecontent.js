import React from 'react'
import Backboneinfo from './Backboneinfo'

const Backbonecontent = ({BackbonecontentData}) => {
return (
<>
  <div className='py-8 px-5 bg-navcolor'>
  <div className='container mx-auto'>
    <h2 className='md:text-[45px] text-[25px] pb-3 md:pb-0 font-bold md:text-center text-left text-white'>{BackbonecontentData == null || BackbonecontentData == '' || BackbonecontentData == undefined ? 'Quality – Backbone of Assignment Help' : BackbonecontentData.heading}</h2>
    <p className='text-[16px] md:text-center text-left font-normal pb-7 text-white'>{BackbonecontentData == null || BackbonecontentData == '' || BackbonecontentData == undefined ? 'Early in the 20th century, the MBA became popular in the educational programs have been made creation of this degree.' : BackbonecontentData.para}</p>
  </div>
  <div className='container mx-auto'>
  <Backboneinfo BackbonecontentData={BackbonecontentData} />
  </div>
  </div> 
</>
)
}

export default Backbonecontent