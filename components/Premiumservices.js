import React from 'react'
import Premiumitems from './Premiumitems'

const Premiumservices = () => {
  return (
    <>
        <div className='bg-navcolor overflow-hidden'>
            <div className='container mx-auto py-8'>
                <h6 className='text-[40px] font-bold text-center text-white'>Our Premium Services</h6>
                <p className='text-[16px] text-center text-white'>Take a look at what we got in hand for you</p>
            </div>
            <Premiumitems />
        </div>
    </>
  )
}

export default Premiumservices