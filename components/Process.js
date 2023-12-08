import React from 'react'
import Processitems from './Processitems'

const Process = () => {
  return (
    <>
        <div className='py-7 pb-0 pt-16 bg-topbarcolor'>
            <div className='container mx-auto'>
                <h4 className='text-[40px] text-white font-bold text-center'>Curious To Know More About Our Service? We Are Just A Click Away</h4>
            </div>
            <div className='container mx-auto'>
                <Processitems />
            </div>
        </div>
    </>
  )
}

export default Process