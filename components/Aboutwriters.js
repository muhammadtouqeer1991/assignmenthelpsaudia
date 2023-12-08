import React from 'react'
import Writerimg from './Writerimg'
import Writerinfo from './Writerinfo'

const Aboutwriters = () => {
  return (
    <>
        <div className='bg-navcolor'>
            <div className='container mx-auto md:flex-row flex-col flex items-end'>
                <Writerimg />
                <Writerinfo />
            </div>
        </div>
    </>
  )
}

export default Aboutwriters