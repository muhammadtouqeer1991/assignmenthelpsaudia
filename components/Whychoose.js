import React from 'react'
import Whychooseimg from './Whychooseimg'
import Choosebenifit from './Choosebenifit'
import Choosecircle from './Choosecircle'

const Whychoose = () => {
  return (
    <>
        <div className='bg-topbarcolor'>
            <div className='container mx-auto py-6'>
                <div>
                <h4 className='text-[40px] text-center text-white font-bold'>Order us and Avail the Amazing Benefits that you Deserve!</h4>
                <p className='text-white text-[16px] text-center font-normal'>Order us and Avail the Amazing Benefits that you Deserve!</p>
                </div>
                <div className='flex justify-between items-center'>
                    <Choosebenifit />
                    <Choosecircle />
                    <Whychooseimg />
                </div>
            </div>
        </div>
    </>
  )
}

export default Whychoose