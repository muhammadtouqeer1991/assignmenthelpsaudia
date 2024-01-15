import React from 'react'
import Backboneinfo from './Backboneinfo'

const Backboneabout = ({Backboneaboutdata}) => {
  return (
    <>
       <div className='py-8 bg-navcolor'>
        <div className='container mx-auto'>
          <h4 className='text-[45px] font-bold text-center text-white'>{Backboneaboutdata.heading}</h4>
          <p className='text-[16px] text-center font-normal pb-7 text-white'>{Backboneaboutdata.para}</p>
        </div>
        <div className='container mx-auto'>
            <div className="flex gap-5">
                <div>
                <p className='text-white text-center'>{Backboneaboutdata.para1}</p>
                </div>
            </div>
        </div>
       </div> 
    </>
  )
}

export default Backboneabout