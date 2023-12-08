import React from 'react'
import Clientitems from './Clientitems'

const Clientsays = () => {
return (
  <>
    <div className='py-8 bg-navcolor'>
      <div className='container mx-auto'>
          <h4 className='text-[40px] text-white font-bold text-center'>What our clients say</h4>
          <p className='text-center text-white text-[16px] font-normal'>Early in the 20th century, the MBA became popular in the educational field. More than 2500 MBA programs have been made creation </p>
      </div>
      <div className='container mx-auto'>
        <Clientitems />
      </div>
    </div>
  </>
)
}

export default Clientsays