import React from 'react'
import Backboneinfo from './Backboneinfo'

const Backbonecontent = ({BackbonecontentData}) => {
return (
<>
  <div className='py-8 bg-navcolor'>
  <div className='container mx-auto'>
    <h4 className='text-[45px] font-bold text-center text-white'>{BackbonecontentData == null || BackbonecontentData == '' || BackbonecontentData == undefined ? 'Quality – Backbone of Assignment Help' : BackbonecontentData.heading}</h4>
    <p className='text-[16px] text-center font-normal pb-7 text-white'>{BackbonecontentData == null || BackbonecontentData == '' || BackbonecontentData == undefined ? 'Early in the 20th century, the MBA became popular in the educational programs have been made creation of this degree.' : BackbonecontentData.para}</p>
  </div>
  <div className='container mx-auto'>
  <Backboneinfo BackbonecontentData={BackbonecontentData} />
  </div>
  </div> 
</>
)
}

export default Backbonecontent